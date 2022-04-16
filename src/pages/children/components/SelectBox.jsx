import React from 'react'
import { Select } from "@chakra-ui/react";
import { doctors } from "./doctors";

export default function SelectBox({ placeholder }) {
  return (
    <Select placeholder={placeholder}>
      {doctors.map((doctor, i) => {
        return <option key={i}>{doctor}</option>;
      })}
    </Select>
  );
}
