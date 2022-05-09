import { Box, Text } from "@chakra-ui/react";
import React from "react";
import "./Avatar.css";
import { motion } from "framer-motion";

const Avatar = () => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="motionDivStyling">
      <Box display={"flex"} flexDir="column">
        <Box className="positionRelative">
          <Box className="circleBorder positionAbsolute" />
          <Text
            fontSize={"6xl"}
            fontWeight="light"
            color={"#ffff"}
            className="disableSelect positionAbsolute"
          >
            A
          </Text>
          <Text
            color={"#ffff"}
            className="positionAbsolute positionBelowCircle"
            textAlign={"center"}
            width="100px"
          >
            Your Name
          </Text>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Avatar;
