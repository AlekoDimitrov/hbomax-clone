import React from "react";
import { Center, Flex, HStack, Link, Text } from "@chakra-ui/react";
import HBOButton from "../../../Elements/Button/HBOButton";
import { AiOutlinePlus } from "react-icons/ai";
import Avatar from "../../../Elements/Avatar/Avatar";
import { Link as RouterLink } from "react-router-dom";
import { FiEdit } from "react-icons/fi";

const ManageProfiles = () => {
  return (
    <Center h={"80%"}>
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
          zIndex={1}
        >
          <Text fontWeight={"light"} fontSize={"5xl"} color={"#ffff"}>
            Who Is Watching?
          </Text>
        </Flex>
        <Flex>
          <Avatar name="Aleko" icon={<FiEdit />} />
        </Flex>
        <Flex flexDir={"column"} align="center">
          <HStack spacing="40px">
            <RouterLink to={"/"}>
              <HBOButton content="DONE" />
            </RouterLink>
          </HStack>
        </Flex>
      </Flex>
    </Center>
  );
};

export default ManageProfiles;
