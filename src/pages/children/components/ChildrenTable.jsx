import React from "react";
import {
  Table,
} from "@chakra-ui/react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

export default function ChildrenTable({children}) {
  console.log(children,"gggggggggggg")
  return (
    <Table bg="#fff" borderRadius={"10px"}>
      <TableHead />
      {children?.map?.((data, i) => {return(
        <TableBody key={i} keys={i} data={data} />
      )})}
    </Table>
  );
}
