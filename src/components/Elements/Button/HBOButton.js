import React from "react";
import { Button } from "@chakra-ui/react";
import "./HBOButton.css";

const HBOButton = (props) => {
  return (
    <Button
      borderRadius={50}
      w={200}
      h={12}
      backgroundColor={"#5e4488"}
      color={"#ffff"}
      letterSpacing={"2px"}
    >
      {props.icon} {props.content}
    </Button>
  );
};

export default HBOButton;
