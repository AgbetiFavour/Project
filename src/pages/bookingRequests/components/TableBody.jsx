import React from "react"
import { Tbody, Tr, Button, Td, Flex, Text } from "@chakra-ui/react"
import InfoDrawer from "./drawers/InfoDrawer"

export default function TableBody({ details, keys }) {
	return (
		<Tbody>
			<Tr fontSize={["14px"]} bg={keys % 2 === 0 ? "#fff" : "#fafdfd"}>
				<Td color="#19A5B0">{details.serialno}</Td>
				<Td textAlign={"left !important"}>
					<Flex>
						<Text color="#19A5B0" mt="5px">
							{details?.caregiver}
						</Text>
					</Flex>
				</Td>
				<Td textAlign={"left !important"} isNumeric>
					{details?.requestType}
				</Td>
				<Td color="#19A5B0" textAlign={"left !important"} isNumeric>
					{details?.doctor}
				</Td>
				<Td>{details?.dateOfReg}</Td>
				<Td color="#19afb0">
					
					<Button
						width="113px"
						height="30px"
						bg={
							details.status === "Completed"
								? "#017CA8"
								: details.status === "Absent"
								? "#52575C"
								: details.status === "Pending"
								? "#F99336"
								: details.status === "Accepted"
								? "#2AC769"
								: "#fb4e4e"
						}
						color="#fff"
						_hover={{
							bg: details.status === "Completed" ? "#017CA8" : "#fb4e4e",
						}}
					>
						{details.status}
					</Button>
				</Td>
				<Td textAlign={"left !important"}>
					<Flex>
						<InfoDrawer
							requestNo={details.serialno}
							caregiver={details?.caregiver}
							role={details?.role}
							doctor={details?.doctor}
							requestType={details?.requestType}
							date={details?.dateOfReg}
							time={details?.time}
							email={details?.email}
							phone={details?.phone}
							address={details?.address}
							location={details?.location}
							nameOfChild={details?.nameOfChild}
							sex={details?.sex}
							dob={details?.dob}
							weight={details?.weight}
							allergies={details?.allergies}
							specialNeeds={details?.specialNeeds}
							age={details?.age}
							complaint={details?.complaint}
							medCondition={details?.medCondition}
							prescription={details?.prescription}
							doctorsAdvice={details?.doctorsAdvice}
						/>
					</Flex>
				</Td>
			</Tr>
		</Tbody>
	)
}
