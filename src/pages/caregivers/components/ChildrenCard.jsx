import { Avatar, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

export default function ChildrenCard({ sex, age, name }) {
  return (
    <Flex
      bg="#fff"
      borderRadius="5px"
      p="20px"
      justifyContent={"flex-start"}
      alignItems={"center"}
    >
      <Box width="20%" mr={["20px", 0]}>
        <Avatar name={name} src={name} alt="" />
      </Box>

      <Box width="85%">
        <Text mb="0px" color="#000" fontSize={["18px"]} fontWeight="bold">
          {name}
        </Text>
        <Flex>
          <Text
            // color="#19A5B0"
            fontWeight="normal"
            fontSize={["14px"]}
            mr="10px"
          >
            {sex}
          </Text>
          <Text fontWeight="normal" fontSize={["14px"]}>
            {age}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}
