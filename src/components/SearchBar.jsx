import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import React from "react";

import { BiSearch } from "react-icons/bi";

export const SearchBar = ({
  placeholder,
  inputValue,
  // setInputValue,
  handleSearch,
}) => {
  return (
    <Box>
      <InputGroup width={["100%", "220px", "220px"]}>
        <InputLeftElement
          w="auto"
          height="auto"
          top="25%"
          mr=".5rem"
          px="10px"
          children={
            <BiSearch
            // color="#c4c4c4"
            // onClick={() => handleSearch(inputValue)}
            />
          }
        />
        <Input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={(e) => handleSearch(e.target.value)}
          borderRadius="7px"
          size="sm"
          py="18px"
          bg="#fff"
        />
      </InputGroup>
    </Box>
  );
};
