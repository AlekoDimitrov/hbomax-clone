import React, { useContext } from "react";
import "./ColorButtons.css";
import { motion } from "framer-motion";
import { ThemeContext } from "../../../ThemeContext";

const ColorButtons = (props) => {
  const { setTheme } = useContext(ThemeContext);
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.4 }}
        whileFocus={{ border: "3px solid white" }}
        className={["button1", "defaultStyle"].join(" ")}
        onClick={() => setTheme("background1")}
      />
      <motion.button
        whileHover={{ scale: 1.4 }}
        whileFocus={{ border: "3px solid white" }}
        className={["button2", "defaultStyle"].join(" ")}
        onClick={() => setTheme("background2")}
      />
      <motion.button
        whileHover={{ scale: 1.4 }}
        whileFocus={{ border: "3px solid white" }}
        className={["button3", "defaultStyle"].join(" ")}
        onClick={() => setTheme("background3")}
      />
      <motion.button
        whileHover={{ scale: 1.4 }}
        whileFocus={{ border: "3px solid white" }}
        className={["button4", "defaultStyle"].join(" ")}
        onClick={() => setTheme("background4")}
      />
      <motion.button
        whileHover={{ scale: 1.4 }}
        whileFocus={{ border: "3px solid white" }}
        className={["button5", "defaultStyle"].join(" ")}
        onClick={() => setTheme("background5")}
      />
    </>
  );
};

export default ColorButtons;
