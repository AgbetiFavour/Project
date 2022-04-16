import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'

export default function CaregiversCard() {
  return (
    <Flex
      direction={["column", "column", "row"]}
      alignItems={["center"]}
      justifyContent={["space-between"]}
    >
      <Box width={["100%", "24%"]}>
        <Card title={"Total Consultations Completed"} amount={"5,700"} />
      </Box>
      <Box width={["100%", "24%"]} my={["20px", 0]}>
        <Card title={"Pending Consultations"} amount={"1,769"} />
      </Box>
      <Box width={["100%", "24%"]}>
        <Card title={"Ongoing Consultations"} amount={"234"} />
      </Box>
      <Box width={["100%", "24%"]} my={["20px", 0]}>
        <Card title={"Pending Booking Requests"} amount={"234"} />
      </Box>
    </Flex>
  );
}
