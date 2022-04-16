import React from "react";
import {
  FormLabel,
  Select,
} from "@chakra-ui/react";

export default function SelectOptions({ data, formId, label, placeholder }) {
  return (
    <>
      <FormLabel htmlFor={formId} fontWeight={"semibold"} mb="10px">
        {label}
      </FormLabel>
      <Select id={formId} placeholder={placeholder} bg="#f2f2f2">
        {
          data?.map((caregiver, i) => {
            return <option  key={i} value={caregiver}>{caregiver}</option>;
          })
        }
        {/* <option value="segun">Segun Adebayo</option>
        <option value="kola">Kola Tioluwani</option> */}
      </Select>
    </>
  );
}
