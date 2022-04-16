import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'

export default function DoctorsCard() {
  return (
    <Flex direction={["column", "row", "row"]} alignItems={["center"]} justifyContent={["space-between"]}>
      <Box width={["100%", "32%"]}>
        <Card title={"Registered Doctors/Specialists"} amount={"5,700"} />
      </Box>
      <Box width={["100%", "32%"]} my={["20px", 0]}>
        <Card title={"Active Doctors/Specialists"} amount={"1,769"} />
      </Box>
      <Box width={["100%", "32%"]}>
        <Card title={"Online Doctors/Specialists"} amount={"234"} />
      </Box>
    </Flex>
  );
}
