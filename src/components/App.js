import "./App.css";
import {
  Avatar,
  Button,
  Center,
  Flex,
  HStack,
  Link,
  Text,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";

function App() {
  return (
    <Center>
      <Flex
        pt={25}
        pb={50}
        h={"100vh"}
        flexDir={"column"}
        align={"center"}
        justify="space-between"
      >
        <Flex
          height={"100px"}
          flexDir={"column"}
          align="center"
          justify={"space-between"}
        >
          <h1>HBO MAX</h1>
          <Text fontWeight={"light"} fontSize={"5xl"}>
            Who Is Watching?
          </Text>
        </Flex>
        <Flex flexDir="column" align="center">
          <Avatar
            size={"2xl"}
            name={"A  "}
            background="none"
            border={"1px solid"}
            cursor={"pointer"}
          />
          <Text pt={3}>Your Name</Text>
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
          <Link mt={8}>MANAGE PROFILES</Link>
        </Flex>
      </Flex>
    </Center>
  );
}

export default App;
