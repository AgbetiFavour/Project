import React from 'react'

import {
  Thead,
  Tr,
  Th,

} from "@chakra-ui/react";

export default function TableHead() {
  return (
    <Thead mb="2px">
      <Tr textTransform={"capitalize"}>
        <Th
          fontSize={["16px"]}
          fontStyle={"capitalize !important"}
          py="22px !important"
        >
          S/N
        </Th>
        <Th fontSize={["16px"]} textTransform={"capitalize !important"}>
          Doctor/Specialist
        </Th>
        <Th fontSize={["16px"]} textTransform={"capitalize !important"}>
          Role
        </Th>
        <Th fontSize={["16px"]} textTransform={"capitalize !important"}>
          Date of Registration
        </Th>
        {/* <Th fontSize={["16px"]} textTransform={"capitalize !important"}>
          Date of Registration
        </Th> */}
        <Th fontSize={["16px"]} textTransform={"capitalize !important"}>
          Status
        </Th>
        <Th fontSize={["16px"]} textTransform={"capitalize !important"}>
          Action
        </Th>
      </Tr>
    </Thead>
  );
}