import { Box, Center } from "@chakra-ui/react";
import { ReactComponent as HboSvg } from "../../assets/hbomax-logo.svg";
import "./InitialPage.css";
import WhoIsWatching from "./Views/WhoIsWatching";

const InitialPage = () => {
  return (
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
      <WhoIsWatching />
    </Box>
  );
};

export default InitialPage;
