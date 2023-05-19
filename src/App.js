import { Box } from "@chakra-ui/react";
import Navbar from "./Components/Homepage/Navbar";
import Carousel  from "./Components/Homepage/Carousel/Carousel";
import AllRoutes from "./Routes/AllRoutes";
function App() {
  return (
    <Box className="App">
      <AllRoutes />
    </Box>
  );
}

export default App;
