import React from "react";
import {
  Box,
  Table,
} from "@chakra-ui/react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function BookServiceTable({ bookingsRequest }) {
  return (
    <Box maxWidth={"100%"} overflowX="scroll">
      <Table bg="#fff" borderRadius={"10px"}>
        <TableHead />
        {bookingsRequest?.map((details, i) => {
          return <TableBody key={i} keys={i} details={details} />;
        })}
      </Table>
    </Box>
  );
}
