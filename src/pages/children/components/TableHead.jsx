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
          Child
        </Th>
        <Th fontSize={["16px"]} textTransform={"capitalize !important"}>
          Sex
        </Th>
        <Th fontSize={["16px"]} textTransform={"capitalize !important"}>
          Age
        </Th>
        <Th fontSize={["16px"]} textTransform={"capitalize !important"}>
          Caregiver
        </Th>
        <Th fontSize={["16px"]} textTransform={"capitalize !important"}>
          City
        </Th>
        <Th fontSize={["16px"]} textTransform={"capitalize !important"}>
          State
        </Th>
        <Th fontSize={["16px"]} textTransform={"capitalize !important"}>
          Action
        </Th>
      </Tr>
    </Thead>
  );
}