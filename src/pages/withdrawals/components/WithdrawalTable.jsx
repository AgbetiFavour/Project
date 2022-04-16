import React from "react";
import {
  Table,
  Box
} from "@chakra-ui/react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function WithdrawalTable({ data }) {
  return (
    <Box maxWidth={"100%"} overflowX="scroll">
      <Table bg="#fff" borderRadius={"10px"}>
        <TableHead />
        {data.map((datum, i) => {
          return <TableBody key={i} keys={i} details={datum} />;
        })}
      </Table>
    </Box>
  );
}
