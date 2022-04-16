import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { SearchBar } from "../../../components/SearchBar";
import SelectBox from "./SelectBox";

export default function SearchArea() {
  return (
    <>
      <Flex mt="30px" justifyContent={"space-between"}>
        <Box>
          <SearchBar placeholder={"Search for users"} />
        </Box>
        <Box bg="#fff" borderRadius={"7px"}>
          <SelectBox placeholder={"Child"} />
        </Box>
        <Box bg="#fff" borderRadius={"7px"}>
          <SelectBox placeholder={"Age"} />
        </Box>
        <Box bg="#fff" borderRadius={"7px"}>
          <SelectBox placeholder={"Sex"} />
        </Box>
        <Box bg="#fff" borderRadius={"7px"}>
          <SelectBox placeholder={"Caregiver"} />
        </Box>
      </Flex>
      <Flex my="20px">
        <Box mr="30px" bg="#fff" borderRadius={"7px"}>
          <SelectBox placeholder={"City"} />
        </Box>
        <Box bg="#fff" borderRadius={"7px"}>
          <SelectBox placeholder={"State"} />
        </Box>
      </Flex>
    </>
  );
}
