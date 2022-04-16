import React from 'react'
import {
  Tbody,
  Tr,
  Button,
  Td,
  Flex,
  Text,
  Circle,
} from "@chakra-ui/react";
// import { AiOutlineInfoCircle } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import CareGiverDrawer from './CareGiverDrawer';

export default function TableBody({details, keys}) {

  return (
    
    <Tbody>
      <Tr fontSize={["14px"]} bg={keys % 2 === 0 ? "#fff" : "#fafdfd"}>
        <Td>{details.id}</Td>
        <Td textAlign={"left !important"}>
          <Flex>
            <Text mt="5px">{details?.caregiver}</Text>
          </Flex>
        </Td>
        <Td textAlign={"left !important"} isNumeric>
          {details?.role}
        </Td>
        <Td textAlign={"left !important"} isNumeric>
          {details?.noOfChildren}
        </Td>
        <Td>{details?.dateOfReg}</Td>
        <Td color="#19afb0">
          {" "}
          <Button
            width="113px"
            height="30px"
            bg={details.status === "Active" ? "#2ac769" : "#fb4e4e"}
            color="#fff"
            _hover={{
              bg: details.status === "Active" ? "#2ac769" : "#fb4e4e",
            }}
          >
            {details.status}
          </Button>
        </Td>
        <Td textAlign={"left !important"}>
          <Flex>
            <CareGiverDrawer
              requestNo={details.serialno}
              caregiver={details?.caregiver}
              role={details?.role}
              phoneNo={details?.phone}
              children={details?.children}
              email={details?.email}
              doctor={details?.doctor}
              requestType={details?.requestType}
              date={details?.dateOfReg}
              time={details?.time}
              nameOfChild={details?.nameOfChild}
              complaint={details?.complaint}
              prescription={details?.prescription}
              doctorsAdvice={details?.doctorsAdvice}
              status={details?.status}
            />
            <Circle mr="10px" bg="#ffe5ef" size="30px">
              <RiDeleteBin6Line color="red" size="18px" />
            </Circle>
          </Flex>
        </Td>
      </Tr>
    </Tbody>
  );
}
