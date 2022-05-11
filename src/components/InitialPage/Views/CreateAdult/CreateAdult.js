import { Box, Center, Flex, HStack, Input, Text } from "@chakra-ui/react";
import HBOButton from "../../../Elements/Button/HBOButton";
import "./CreateAdult.css";
import Avatar from "../../../Avatar/Avatar";
import { AiOutlineCamera } from "react-icons/ai";

const CreateAdult = () => {
  return (
    <Center h={"80%"} zIndex={1}>
      <Flex
        h={"100%"}
        flexDir={"column"}
        align={"center"}
        justify="space-between"
      >
        <Flex
          height={"fit-content"}
          flexDir={"column"}
          align="center"
          justify={"space-between"}
        >
          <Text fontWeight={"light"} fontSize={"5xl"} color={"#ffff"}>
            Create Profile
          </Text>
        </Flex>
        <Flex width={"640px"} justify={"space-between"} align="center">
          <Flex flexDir={"column"} w="200px" align={"center"}>
            <Avatar />
            <Box
              color={"#ffff"}
              align="center"
              mt={"20px"}
              fontSize="lg"
              p={"15px"}
              className="backdropFilter"
            >
              <Box fontSize={"3xl"}>
                <AiOutlineCamera />
              </Box>
              <Text mt={"5px"}>
                Use our mobile app to upload a photo or choose a character
              </Text>
            </Box>
          </Flex>
          <Flex>
            <Input
              width={"350px"}
              variant={"flushed"}
              placeholder={"Name"}
              color={"#ffff"}
              fontSize={"2xl"}
            />
          </Flex>
        </Flex>
        <Flex flexDir={"column"} align="center">
          <HStack spacing="40px">
            <HBOButton content="SAVE" />
            <HBOButton content="CANCEL" />
          </HStack>
        </Flex>
      </Flex>
    </Center>
  );
};

export default CreateAdult;
