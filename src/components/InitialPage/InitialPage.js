import { Box, Center } from "@chakra-ui/react";
import { ReactComponent as HboSvg } from "../../assets/hbomax-logo.svg";
import "./InitialPage.css";
import CreateAdult from "./Views/CreateAdult/CreateAdult";
import WhoIsWatching from "./Views/WhoIsWatching/WhoIsWatching";
import { motion, AnimatePresence } from "framer-motion";
import CreateKid from "./Views/CreateKid/CreateKid";
import { Routes, Route } from "react-router-dom";
import ManageProfiles from "./Views/ManageProfiles/ManageProfiles";
import EditProfile from "./Views/EditProfile/EditProfile";
import { useContext } from "react";
import { ThemeContext } from "./../../ThemeContext";

const InitialPage = () => {
  const theme = useContext(ThemeContext);
  return (
    <AnimatePresence>
      <Box backgroundColor={"#000000"}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Box className="pageBackgroundSizing" background={theme.theme}>
            <Box className="circleBlur" left={"-1200px"} top={"50px"} />
            <Center>
              <HboSvg className="HboSvg" />
            </Center>
            <Routes>
              <Route path="/" element={<WhoIsWatching />} />
              <Route path="/adult" element={<CreateAdult />} />
              <Route path="/kid" element={<CreateKid />} />
              <Route path="/manage" element={<ManageProfiles />} />
              <Route path="/edit" element={<EditProfile />} />
            </Routes>
          </Box>
        </motion.div>
      </Box>
    </AnimatePresence>
  );
};

export default InitialPage;
