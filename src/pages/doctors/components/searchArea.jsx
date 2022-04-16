import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { SearchBar } from "../../../components/SearchBar";
import SelectBox from "./SelectBox";

export default function SearchArea() {
  return (
    <>
      <Flex direction={["column", "row"]} my="30px" justifyContent={"space-between"}>
        <Box>
          <SearchBar placeholder={"Search for users"} />
        </Box>
        <Box bg="#fff" borderRadius={"7px"}>
          <SelectBox placeholder={"Doctor"} />
        </Box>
        <Box bg="#fff" borderRadius={"7px"}>
          <SelectBox placeholder={"Role"} />
        </Box>
        <Box bg="#fff" borderRadius={"7px"}>
          <SelectBox placeholder={"Date Of Registration"} />
        </Box>
        <Box bg="#fff" borderRadius={"7px"}>
          <SelectBox placeholder={"Status"} />
        </Box>
      </Flex>
    </>
  );
}
