import { Box, Center } from "@chakra-ui/react";
import { ReactComponent as HboSvg } from "../../assets/hbomax-logo.svg";
import "./InitialPage.css";
import CreateAdult from "./Views/CreateAdult/CreateAdult";
import WhoIsWatching from "./Views/WhoIsWatching/WhoIsWatching";
import { motion } from "framer-motion";
import CreateKid from "./Views/CreateKid/CreateKid";
import { Routes, Route } from "react-router-dom";

const InitialPage = () => {
  return (
    <Box backgroundColor={"#000000"}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Box
          className="pageBackground"
          h={"100vh"}
          display={"flex"}
          flexDir={"column"}
        >
          <Box className="circleBlur" />
          <Center>
            <HboSvg className="HboSvg" />
          </Center>
          <Routes>
            <Route path="/" element={<WhoIsWatching />} />
            <Route path="/adult" element={<CreateAdult />} />
            <Route path="/kid" element={<CreateKid />} />
          </Routes>
        </Box>
      </motion.div>
    </Box>
  );
};

export default InitialPage;
