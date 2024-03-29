import { useState, useRef } from "react";
import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Textarea,
  Box,
  Flex,
  Image,
  VStack,
  useToast,
  ModalOverlay,
} from "@chakra-ui/react";

const PostReviewModal = ({ isOpen, onClose, productId, reloadProduct }) => {
  const [reviewText, setReviewText] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const toast = useToast();

  const handleReviewTextChange = (event) => {
    setReviewText(event.target.value);
  };

  const uploadImage = async (file) => {
    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", "shopziel");
    data.append("cloud_name", "dicjkx0at");

    try {
      let response = await fetch(
        "https://api.cloudinary.com/v1_1/dicjkx0at/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      let result = await response.json();
      setImageUrl(result.url);
    } catch (err) {
      alert(err);
    }
  };

  // handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    uploadImage(file);
    setImageFile(file);

    // Generate a preview image URL
    const tempImageURL = URL.createObjectURL(file);
    setImagePreview(tempImageURL);
  };

  const handleSelectFile = () => {
    fileInputRef.current.click();
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Handle image drop
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];

    uploadImage(file);
    setImageFile(file);

    const tempImageURL = URL.createObjectURL(file);
    setImagePreview(tempImageURL);
  };

  const handleCancel = () => {
    setImageFile(null);
    setImagePreview(null);
    setReviewText("");
    onClose();
  };

  const handleSubmit = async () => {
    // Handle the submission of the review and the uploaded image here

    const myHeaders = new Headers();

    myHeaders.append(
      "Authorization",
      `Bearer ${sessionStorage.getItem("token")}`
    );
    myHeaders.append("Content-Type", "application/json");

    try {
      const response = await fetch(
        `https://shopziel.up.railway.app/api/customers/review/${productId}`,
        {
          method: "POST",
          body: JSON.stringify({
            review: reviewText,
            imageUrl: imageUrl,
            rating: 5,
          }),
          headers: myHeaders,
        }
      );

      if (response.ok) {
        reloadProduct();
        toast({
          title: "Review Added",
          description: "Thank you for your valuable feedback",
          duration: "3000",
          status: "success",
          position: "top",
        });
      } else {
        throw new Error("Failed to add review");
      }
    } catch (err) {
      alert(err.message);
    }

    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCancel}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Post Review</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Textarea
            placeholder="Write your review..."
            value={reviewText}
            onChange={handleReviewTextChange}
          />
          <Flex
            align="center"
            justify="center"
            h="250px"
            bg="gray.100"
            borderRadius="md"
            border="2px"
            borderColor="gray.200"
            mt={4}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            cursor="pointer"
          >
            {imagePreview ? (
              <Image src={imagePreview} alt="Review Image" h="100%" />
            ) : (
              <VStack>
                <Box as="span" fontSize="xl">
                  Drag &amp; Drop Image
                </Box>
                <Box as="span" fontSize="sm" color="gray.500">
                  or
                </Box>
                <Button
                  borderRadius={"3xl"}
                  onClick={handleSelectFile}
                  colorScheme="blue"
                >
                  Select File
                </Button>
              </VStack>
            )}
            <input
              type="file"
              onChange={handleImageUpload}
              ref={fileInputRef}
              style={{ display: "none" }}
            />
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button
            color={"white"}
            bg="buttonColor"
            _hover={{ bg: "buttonColor", boxShadow: "base" }}
            mr={3}
            borderRadius={"3xl"}
            onClick={handleSubmit}
          >
            Submit Review
          </Button>
          <Button
            borderRadius={"3xl"}
            colorScheme="red"
            variant={"outline"}
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PostReviewModal;
