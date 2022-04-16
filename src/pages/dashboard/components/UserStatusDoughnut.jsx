import React, { useState } from 'react';
import {
  Box,
  Circle,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  HStack,
  Text,
  VStack,
} from '@chakra-ui/react';

const UserStatusDoughnut = ({ statistics }) => {
	const [userStat, setUserStat] = useState(
		parseInt(statistics.registeredCaregiversPercentage)
	)
	const [user, setUser] = useState("Caretakers")

	const handleToggleStat = () => {
		setUserStat(parseInt(statistics.registeredDoctorsPercentage))
		setUser(user === "Doctors" ? "Caretakers" : "Doctors")
	}

	return (
		<Box
			h={["250px", "220px", "207px"]}
			w={["100%", "270px"]}
			borderRadius="5"
			bg="#fff"
			px="4"
			py="3"
			mb={["7"]}
		>
			<Text mb="4" fontWeight="600">
				User Status
			</Text>
			<CircularProgress
				thickness="12px"
				size={["140px", "120px"]}
				trackColor="orange"
				value={userStat}
				color="blue"
			>
				<CircularProgressLabel>
					<VStack>
						<Text as="h2">{userStat}%</Text>
						<Text fontSize="14px" mt={"0 !important"}>
							{user}
						</Text>
					</VStack>
				</CircularProgressLabel>
			</CircularProgress>
			<HStack mt={["5", "3"]} justifyContent={"space-between"}>
				{userStatData?.map((data, i) => (
					<Flex
						key={i}
						alignItems={"center"}
						gap="2"
						cursor="pointer"
						onClick={handleToggleStat}
					>
						<Circle
							w="10px"
							h="10px"
							bg={i % 2 === 0 ? "orange" : "blue"}
						></Circle>
						<Text>{data}</Text>
					</Flex>
				))}
			</HStack>
		</Box>
	)
}

export default UserStatusDoughnut;

const userStatData = ['Caregivers', 'Doctors/Specialist'];
