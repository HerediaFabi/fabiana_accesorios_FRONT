import { Box, HStack, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
// import { IoConstructOutline } from "react-icons/io";

const Home = (props) => {
  return (
    <div>
      <HStack
        borderBottom="solid 1px #dbdbdb"
        bgColor="#00afce"
        color="#fff"
        w="100vw"
        h="40px"
        px="7"
        justify="center"
        _hover={{ filter: "grayscale(100%)" }}
      >
        <Text>Envío gratis a sucursal en compras superiores a $7000</Text>
      </HStack>
      <Navbar />
      <Box>
        <h1>Holis</h1>
        {/* <Icon as={IoConstructOutline} boxSize={5} /> */}
      </Box>
    </div>
  );
};

export default Home;
