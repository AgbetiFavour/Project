import React from "react";
import {
  Box,
  Table,
} from "@chakra-ui/react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";
import BookingRequests from './../index';

export default function BookServiceTable({ bookingsRequest }) {
  return (
    <Box maxWidth={"100%"} overflowX="scroll">
      <Table bg="#fff" borderRadius={"10px"}>
        <TableHead />
        {bookingsRequest?.map((bookingRequest, i) => {
          return <TableBody key={i} keys={i} details={bookingRequest} />;
        })}
      </Table>
    </Box>
  );
}
