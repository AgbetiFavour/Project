import React from 'react'
import {
  Tbody,
  Tr,
  Button,
  Td,
  Flex,
  Text,
  Circle,
  Avatar,
} from "@chakra-ui/react";
import { AiOutlineCheck } from "react-icons/ai";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { GiCancel } from 'react-icons/gi';
import DoctorsDrawer from './DoctorsDrawer';

export default function TableBody({ details, keys, state }) {

  return (
    <Tbody>
      <Tr fontSize={["14px"]} bg={keys % 2 === 0 ? "#fff" : "#fafdfd"}>
        <Td>{details.id}</Td>
        <Td textAlign={"left !important"}>
          <Flex>
            <Avatar src="" name={details.caregiver} size="sm" mr="10px" />
            <Text mt="5px">{details.caregiver}</Text>
          </Flex>
        </Td>
        <Td textAlign={"left !important"} isNumeric>
          {details?.role}
        </Td>
        <Td fontSize={["12px"]}>{details?.dateOfReg}</Td>
        <Td color="#19afb0">
          {" "}
          <Button
            width="113px"
            height="30px"
            bg={
              details.status === "Pending"
                ? "#F99336"
                : details.status === "Accepted"
                ? "#2ac769"
                : "#fb4e4e"
            }
            color="#fff"
            _hover={{
              bg:
                details.status === "Pending"
                  ? "#F99336"
                  : details.status === "Accepted"
                  ? "#2ac769"
                  : "#fb4e4e",
            }}
          >
            {details.status}
          </Button>
        </Td>
        {/* <Td>{details?.state}</Td> */}
        <Td textAlign={"left !important"}>
          <Flex>
            <DoctorsDrawer
              state={state}
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
              specialty={details?.specialty}
              expLength={details?.yearsOfExp}
              docImg={details?.docImg}
              license={details?.docLic}
              docBio={details?.docBio}
              consultations={details?.consultations}
              ratings={details?.ratings}
            />
            {state === "requests" ? (
              <>
                <Circle mx="10px" bg="#F1FAFA" size="30px">
                  <AiOutlineCheck color="green" size="18px" />
                </Circle>
                <Circle bg="#FFE5E5" size="30px">
                  <GiCancel color="red" size="18px" />
                </Circle>
              </>
            ) : (
              <Circle ml="10px" bg="#ffe5ef" size="30px">
                <RiDeleteBin6Line color="red" size="18px" />
              </Circle>
            )}
          </Flex>
        </Td>
      </Tr>
    </Tbody>
  );
}
