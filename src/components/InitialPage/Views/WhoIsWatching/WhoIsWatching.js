import { Center, Flex, HStack, Link, Text } from "@chakra-ui/react";
import HBOButton from "../../../Elements/Button/HBOButton";
import { AiOutlinePlus } from "react-icons/ai";
import Avatar from "../../../Elements/Avatar/Avatar";
import { Link as RouterLink } from "react-router-dom";

const WhoIsWatching = (props) => {
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
          <Avatar name="Aleko" />
        </Flex>
        <Flex flexDir={"column"} align="center">
          <HStack spacing="40px">
            <RouterLink to={"/adult"}>
              <HBOButton
                icon={<AiOutlinePlus />}
                content="ADULT"
                changeView="CreateAdult"
                view={props.view}
                setView={props.setView}
              />
            </RouterLink>
            <RouterLink to={"/kid"}>
              <HBOButton
                icon={<AiOutlinePlus />}
                content="KID"
                changeView="CreateKid"
                view={props.view}
                setView={props.setView}
              />
            </RouterLink>
          </HStack>
          <Link
            mt={10}
            color={"#c7baff"}
            fontWeight="bold"
            fontSize={"md"}
            letterSpacing={1}
          >
            MANAGE PROFILES
          </Link>
        </Flex>
      </Flex>
    </Center>
  );
};

export default WhoIsWatching;
