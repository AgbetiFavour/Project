import React from 'react'
import {
  Tbody,
  Tr,
  Button,
  Td,
  Avatar,
  Flex,
  Text,
  Circle,
} from "@chakra-ui/react";
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';

export default function TableBody({details, keys}) {

  return (
    <Tbody>
      <Tr fontSize={["14px"]} bg={keys % 2 === 0 ? "#fff" : "#fafdfd"}>
        <Td>{details?.id}</Td>
        <Td textAlign={"left !important"}>
          <Flex>
            <Avatar src="" name={details?.name} size="sm" mr="10px" />
            <Text mt="5px">{details?.name}</Text>
          </Flex>
        </Td>
        <Td textAlign={"left !important"} isNumeric>
          {details?.amount}
        </Td>
        <Td textAlign={"left !important"} isNumeric>
          {details?.date}
        </Td>
        <Td>
          <Button
            width="113px"
            height="30px"
            bg={details?.status === "Pending" ? "#f99336" : "#2ac769"}
            color="#fff"
            _hover={{
              bg: details?.status === "Pending" ? "#f99336" : "#2ac769",
            }}
          >
            {details.status}
          </Button>
        </Td>
        <Td textAlign={"left !important"}>
          <Flex>
            <Circle mr="10px" bg="#f1fafa" size="30px">
              <AiOutlineInfoCircle size="18px" color="#19afb0" />
            </Circle>
            <Circle mr="10px" bg="#ffe5ef" size="30px">
              <RiDeleteBin6Line color="red" size="18px" />
            </Circle>
          </Flex>
        </Td>
      </Tr>
    </Tbody>
  );
}
