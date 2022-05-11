import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import "./Avatar.css";
import { motion } from "framer-motion";
import { BsPerson } from "react-icons/bs";

const Avatar = (props) => {
  let variants = "";
  if (props.name !== undefined) {
    variants = {
      whileHover: {
        scale: 1.15,
        transition: {
          duration: 0.3,
        },
      },
    };
  }

  return (
    <motion.div variants={variants} whileHover="whileHover">
      <Flex cursor={"pointer"} position={"relative"} width={"fit-content"}>
        <Box className="circleBorder" />
        <Text
          fontSize={"6xl"}
          color="#ffff"
          position={"absolute"}
          className="centerInsideCircle disableSelect"
        >
          {console.log(props.name)}
          {props.name !== undefined ? props.name.charAt(0) : <BsPerson />}
        </Text>
      </Flex>
      <Flex justify={"center"}>
        {props.name !== undefined && (
          <Text fontSize="lg" color={"#ffff"} zIndex={1} mt="10px">
            {props.name}
          </Text>
        )}
      </Flex>
    </motion.div>
  );
};

export default Avatar;
