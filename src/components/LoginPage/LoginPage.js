import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { ReactComponent as HboSvg } from "../../assets/hbomax-logo.svg";
import Avatar from "../Avatar/Avatar";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <Box className="pageBackground">
      <Center>
        <Flex
          pb={"80px"}
          h={"100vh"}
          flexDir={"column"}
          align={"center"}
          justify="space-between"
        >
          <Flex
            height={"150px"}
            flexDir={"column"}
            align="center"
            justify={"space-between"}
          >
            <HboSvg className="HboSvg" />
            <Text fontWeight={"light"} fontSize={"5xl"} color={"#ffff"}>
              Who Is Watching?
            </Text>
          </Flex>
          <Flex flex={1}>
            <Avatar />
          </Flex>
          <Flex flexDir={"column"} align="center">
            <HStack spacing="40px">
              <Button borderRadius={50} w={200}>
                <AiOutlinePlus /> ADULT
              </Button>
              <Button borderRadius={50} w={200}>
                <AiOutlinePlus /> KID
              </Button>
            </HStack>
            <Link
              mt={10}
              color={"#7150BD"}
              fontWeight="bold"
              fontSize={"md"}
              letterSpacing={1}
            >
              MANAGE PROFILES
            </Link>
          </Flex>
        </Flex>
      </Center>
    </Box>
  );
};

export default LoginPage;
