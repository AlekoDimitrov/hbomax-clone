import React, { useContext } from "react";
import { Center, Flex, HStack, Text } from "@chakra-ui/react";
import HBOButton from "../../../Elements/Button/HBOButton";
import Avatar from "../../../Elements/Avatar/Avatar";
import { Link as RouterLink } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { UserContext } from "../../../../UserContext";
import { motion } from "framer-motion";

const ManageProfiles = () => {
  const { name } = useContext(UserContext);

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
          <RouterLink to={"/edit"}>
            <Avatar name={name} icon={<FiEdit />} />
          </RouterLink>
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
