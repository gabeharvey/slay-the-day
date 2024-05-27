import React from "react";
import { Box, Flex, Spacer, Link, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex p="4" bg="#242424" alignItems="center">
      <Box p="2">
        <Heading size="md" color="beige" fontSize="35px" fontFamily='Indie Flower'>Slay The Day</Heading>
      </Box>
      <Spacer />
      <Box fontFamily='Nunito'>
        <Link color="beige" _hover={{textDecoration: "none", fontWeight: "bold", fontFamily:'Nunito', textShadow: "1px 1px 2px rgba(255,255,255,0.8)", cursor: "pointer"}} mr="6">Home</Link>
        <Link color="beige" _hover={{textDecoration: "none", fontWeight: "bold", fontFamily:'Nunito', textShadow: "1px 1px 2px rgba(255,255,255,0.8)", cursor: "pointer"}} mr="6">About</Link>
        <Link color="beige" _hover={{textDecoration: "none", fontWeight: "bold", fontFamily:'Nunito', textShadow: "1px 1px 2px rgba(255,255,255,0.8)", cursor: "pointer"}} mr="6">Services</Link>
        <Link color="beige" _hover={{textDecoration: "none", fontWeight: "bold", fontFamily:'Nunito', textShadow: "1px 1px 2px rgba(255,255,255,0.8)", cursor: "pointer"}} mr="6">Contact</Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
