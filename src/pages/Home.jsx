import { Box, Icon } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import { IoConstructOutline } from "react-icons/io";

const Home = (props) => {
  return (
    <div>
      <Navbar />
      <Box>
        <h1>Holis</h1>
        {/* <Icon as={IoConstructOutline} boxSize={5} /> */}
      </Box>
    </div>
  );
};

export default Home;
