import React from 'react'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Button,
  Td,
  TableCaption,
  Flex,
  Text,
  Circle,
} from "@chakra-ui/react";
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { RiDeleteBin6Line } from 'react-icons/ri';
import ChildrenDrawer from './ChildrenDrawer';

export default function TableBody({data, keys}) {
  console.log({data})

  return (
		<Tbody>
			<Tr fontSize={["14px"]} bg={keys % 2 === 0 ? "#fff" : "#fafdfd"}>
				<Td>{data?.id}</Td>
				<Td textAlign={"left !important"}>
					<Flex>
						<Text mt="5px">{data?.childName}</Text>
					</Flex>
				</Td>
				<Td textAlign={"left !important"} isNumeric>
					{data?.gender}
				</Td>
				<Td textAlign={"left !important"} isNumeric>
					{/* {details?.age} */}
				</Td>
				<Td color="#19afb0">{data?.caregiverId?.fullName}</Td>
				<Td color="#19afb0">{data?.caregiverId?.cityOrState}</Td>
				{/* <Td>{details?.state}</Td> */}
				<Td textAlign={"left !important"}>
					<Flex>
					  <ChildrenDrawer
						  data={data}
							// requestNo={data.serialno}
							// caregiver={data?.caregiverId?.fullName}
							// email={data?.email}
							// doctor={data?.doctor}
							// dob={data?.dob}
							// age={details?.age}
							// specialNeeds={details?.medicalConditions}
							// allergies={details?.allegies}
							// weight={details?.weight}
							// requestType={details?.requestType}
							// date={details?.dateOfReg}
							// time={details?.time}
							// nameOfChild={details?.nameOfChild}
							// gender={details?.sex}
							// complaint={details?.complaint}
							// prescription={details?.prescription}
							// doctorsAdvice={details?.doctorsAdvice}
						/>
						{/* <Circle mr="10px" bg="#f1fafa" size="30px">
              <AiOutlineInfoCircle size="18px" color="#19afb0" />
            </Circle> */}
						<Circle mr="10px" bg="#ffe5ef" size="30px">
							<RiDeleteBin6Line color="red" size="18px" />
						</Circle>
					</Flex>
				</Td>
			</Tr>
		</Tbody>
	)
}
