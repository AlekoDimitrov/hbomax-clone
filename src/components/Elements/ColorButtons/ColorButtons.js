import React from "react";
import "./ColorButtons.css";
import { motion } from "framer-motion";

const ColorButtons = (props) => {
  return (
    <motion.button
      whileHover={{ scale: 1.4 }}
      whileFocus={{ border: "3px solid white" }}
      className={[props.color, "defaultStyle"].join(" ")}
    ></motion.button>
  );
};

export default ColorButtons;
