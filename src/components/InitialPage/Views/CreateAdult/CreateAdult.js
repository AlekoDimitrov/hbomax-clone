import { Center, Flex, HStack, Input, Text } from "@chakra-ui/react";
import HBOButton from "../../../Elements/Button/HBOButton";
import "./CreateAdult.css";
import Avatar from "../../../Avatar/Avatar";

const CreateAdult = () => {
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
            Create Profile
          </Text>
        </Flex>
        <Flex width={"550px"} justify={"space-between"} align="center">
          <Avatar name="Benko" />
          <Input
            width={"350px"}
            variant={"flushed"}
            placeholder={"Name"}
            color={"#ffff"}
            fontSize={"2xl"}
          />
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
