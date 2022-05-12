import { Box, Center, Flex, HStack, Input, Text } from "@chakra-ui/react";
import HBOButton from "../../../Elements/Button/HBOButton";
import "./CreateAdult.css";
import Avatar from "../../../Elements/Avatar/Avatar";
import { AiOutlineCamera } from "react-icons/ai";
import ColorButtons from "../../../Elements/ColorButtons/ColorButtons";
import { Link as RouterLink } from "react-router-dom";
import { BsPerson } from "react-icons/bs";

const CreateAdult = () => {
  return (
    <Center h={"80%"} zIndex={1}>
      <Flex h={"100%"} flexDir={"column"} justify="space-between">
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
            <Avatar icon={<BsPerson />} />
            <Box
              color={"#ffff"}
              align="center"
              mt={"10px"}
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
          <Flex h="80%" flexDir={"column"} justify="space-around">
            <Input
              width={"350px"}
              variant={"flushed"}
              placeholder={"Name"}
              color={"#ffff"}
              fontSize={"2xl"}
            />
            <HStack w={"100%"} justify="space-between" zIndex={1}>
              <ColorButtons color="button1" />
              <ColorButtons color="button2" />
              <ColorButtons color="button3" />
              <ColorButtons color="button4" />
              <ColorButtons color="button5" />
            </HStack>
          </Flex>
        </Flex>
        <Flex flexDir={"column"} align="center">
          <HStack spacing="40px">
            <HBOButton content="SAVE" />
            <RouterLink to={"/"}>
              <HBOButton content="CANCEL" />
            </RouterLink>
          </HStack>
        </Flex>
      </Flex>
    </Center>
  );
};

export default CreateAdult;
