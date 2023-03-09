import React from "react";
import { Box, Flex, Spacer, HStack, Image, Icon } from "@chakra-ui/react";
import { SiInstagram, SiWhatsapp } from "react-icons/si";

const Navbar = (props) => {
  return (
    <HStack
      borderBottom="solid 1px #dbdbdb"
      w="100vw"
      h="60px"
      px="7"
      justify="space-between"
    >
      <HStack spacing="20px" align="center">
        <a target="_blank" href="https://www.instagram.com/fabianaaccesorios_/">
          <Icon as={SiInstagram} boxSize={5} />
        </a>
        <a target="_blank" href="https://wa.link/xp7age">
          <Icon as={SiWhatsapp} boxSize={5} />
        </a>
      </HStack>
      <Box>
        <Image
          src="/fa_horizontal.png"
          alt="Fabiana accesorios logo"
          h="25px"
        />
      </Box>
      {/* <HStack spacing="20px">
        <a>Pulseras</a>
        <a>Collares</a>
        <a>Aros</a>
        <a>Llaveros</a>
        <a>Tobilleras</a>
        <a>Anillos</a>
      </HStack> */}
      <HStack spacing="20px">
        <a>Cuenta</a>
        <a>Carrito</a>
      </HStack>
    </HStack>
  );
};

export default Navbar;
