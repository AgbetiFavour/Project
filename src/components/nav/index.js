import "./index.css";
import { Box, Flex, Image, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
// import { NotificationBell } from "./../notification/NotificationBell";
// import { SearchBar } from "../SearchBar";
import { useLocation } from "react-router-dom";

export const Navigation = ({ toggle, showSidebar }) => {
  const [toggleSide] = useState(false);
  const location = useLocation();

  // const { lightBlack } = GlobalStyle

  const handleToggle = () => {
    toggle(!toggleSide);
  };

  return location.pathname !== "/forum" ? (
    <Box
      pos="fixed"
      className="navigation-inner"
      fontSize={{ sm: ".9em", md: ".9em", lg: "1em" }}
      borderBottom="1px solid #f2f2f2"
    >
      <Box
        display="grid"
        gridAutoFlow="column"
        width="100%"
        // padding="15px 10px"
        alignItems="center"
      >
        <Flex className="brand-style" padding= {["10px 0", "10px 30px"]}>
          <Flex display={["flex", "flex", "none"]}>
          <Box className="toggle-side-bar">
            {showSidebar && (
              <RiMenu2Fill
                onClick={handleToggle}
                size={30}
                style={{ cursor: "pointer", paddingLeft: "10px" }}
              />
            )}
          </Box>
        </Flex>
          <Image
          display={["none", "block"]}
            borderRadius="full"
            boxSize="50px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
          <Box pl="12px">
            <Text fontSize={["15px"]}> Logo</Text>
          </Box>
        </Flex>
        {/* <Flex>
          <Box className="toggle-side-bar">
            {showSidebar && (
              <RiMenu2Fill
                onClick={handleToggle}
                size={30}
                style={{ cursor: "pointer", paddingLeft: "10px" }}
              />
            )}
          </Box>
        </Flex> */}
        <Stack
          spacing="30px"
          alignItems="center"
          direction="row"
          justifyContent="flex-end"
          mr="1rem"
        >
          {/* <SearchBar />
          <NotificationBell /> */}
          <Image
            borderRadius="full"
            boxSize="35px"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
        </Stack>
      </Box>
    </Box>
  ) : null;
};
