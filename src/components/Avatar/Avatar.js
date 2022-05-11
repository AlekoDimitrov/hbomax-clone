import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import "./Avatar.css";
import { motion } from "framer-motion";
import { BsPerson } from "react-icons/bs";

const Avatar = (props) => {
  return (
    <motion.div whileHover={{ scale: 1.15, transition: { duration: 0.3 } }}>
      <Flex cursor={"pointer"} position={"relative"} width={"fit-content"}>
        <Box className="circleBorder" />
        <Text
          fontSize={"6xl"}
          color="#ffff"
          position={"absolute"}
          className="centerInsideCircle disableSelect"
        >
          {props.name.charAt(0)}
        </Text>
      </Flex>
      <Flex justify={"center"} mt={"20px"}>
        <Text fontSize="lg" color={"#ffff"} zIndex={1}>
          {props.name}
        </Text>
      </Flex>
    </motion.div>
  );
};

export default Avatar;
