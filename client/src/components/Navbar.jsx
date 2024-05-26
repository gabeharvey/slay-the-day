import React from "react";
import { Box, Flex, Spacer, Link, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex p="4" bg="blue.500" alignItems="center">
      <Box p="2">
        <Heading size="md" color="white">
          Slay The Day
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Link
          color="whiteAlpha.900"
          _hover={{ textDecoration: "underline" }}
          mr="4"
        >
          Home
        </Link>
        <Link
          color="whiteAlpha.900"
          _hover={{ textDecoration: "underline" }}
          mr="4"
        >
          About
        </Link>
        <Link
          color="whiteAlpha.900"
          _hover={{ textDecoration: "underline" }}
          mr="4"
        >
          Services
        </Link>
        <Link
          color="whiteAlpha.900"
          _hover={{ textDecoration: "underline" }}
          mr="4"
        >
          Contact
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
