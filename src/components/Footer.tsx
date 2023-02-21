"use client";
import {
  Box,
  Heading,
  SimpleGrid,
  Text,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <Box>
      {/* Upper part */}
      <Box bg={"#c7cff3"} textAlign="center" py="100px">
        <Heading size="3xl">Create Footer In NEXT.JS AND CHAKRA UI</Heading>
      </Box>

      {/* Lower Part */}
      <SimpleGrid
        templateColumns="repeat(3,1fr)"
        bg="#333333"
        gap="10px"
        p="100px"
      >
        {/* Box1 */}
        <Box textAlign="center">
          <Heading color="white" size="md" fontWeight="medium">
            Useful Links
          </Heading>
          <Text color="white" mt="20px">
            About
          </Text>
          <Text color="white">Services</Text>
          <Text color="white">Contact</Text>
          <Text color="white">Shop</Text>
          <Text color="white">Blog</Text>
        </Box>
        {/* Box2 */}
        <Box textAlign="center">
          <Heading color="white" size="md" fontWeight="medium">
            NewsLetter
          </Heading>
          <Input
            mt="20px"
            placeholder="Your Email Address"
            size="md"
            bg="white"
            px="100px"
          />
          <Button
            mt="20px"
            bg="#333333"
            border="2px solid white"
            color="white"
            borderRadius="30px"
          >
            SUBSCRIBE NOW
          </Button>
        </Box>
        {/* box3 */}
        <Box textAlign="center">
          <Heading color="white" size="md" fontWeight="medium">
            Contact
          </Heading>
          <Text color="white" mt="20px">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consequatur dolores
          </Text>
          <Flex justify="center" mt="20px" gap="30px" color="white">
            <Box>
              <FaFacebook size="25px" />
            </Box>
            <Box>
              <BsInstagram size="25px" />
            </Box>
            <Box>
              <BsTwitter size="25px" />
            </Box>
          </Flex>
        </Box>
      </SimpleGrid>
    </Box>
  );
}
