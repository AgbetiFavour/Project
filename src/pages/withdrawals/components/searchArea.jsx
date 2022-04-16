import React from 'react'
import {
  Text,
  Heading,
  Flex,
  Box,
  Select,
  Table,
} from "@chakra-ui/react";
import { doctors } from './doctors';
import { SearchBar } from '../../../components/SearchBar';

export default function SearchArea() {
  return (
    <Flex my="30px" justifyContent={"space-between"}>
      <Box>
        <SearchBar placeholder={"Search for users"} />
      </Box>
      <Box bg="#fff" borderRadius={"7px"}>
        <Select placeholder="Doctor">
          {doctors.map((doctor, i) => {
            return <option key={i}>{doctor}</option>;
          })}
        </Select>
      </Box>
      <Box bg="#fff" borderRadius={"7px"}>
        <Select placeholder="Role">
          {doctors.map((doctor, i) => {
            return <option key={i}>{doctor}</option>;
          })}
        </Select>
      </Box>
      <Box bg="#fff" borderRadius={"7px"}>
        <Select placeholder="Date of Registration">
          {doctors.map((doctor, i) => {
            return <option key={i}>{doctor}</option>;
          })}
        </Select>
      </Box>
      <Box bg="#fff" borderRadius={"7px"}>
        <Select placeholder="Status">
          {doctors.map((doctor, i) => {
            return <option key={i}>{doctor}</option>;
          })}
        </Select>
      </Box>
    </Flex>
  );
}
