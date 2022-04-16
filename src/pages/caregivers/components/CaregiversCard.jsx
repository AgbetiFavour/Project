import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'

export default function CaregiversCard() {
  // const cards = [
  //   <Card title={"Registered Caregivers"} amount={"5,700"} />,
  //   <Card title={"Active Caregivers"} amount={"1,769"} />,
  //   <Card title={"Online Caregivers"} amount={"234"} />,
  // ];
  return (
    <Flex direction={["column", "column", "row"]} alignItems={["center"]} justifyContent={["space-between"]}>
      <Box width={["100%", "32%"]}>
        <Card title={"Registered Caregivers"} amount={"5,700"} />
      </Box>
      <Box width={["100%", "32%"]} my={["20px", 0]}>
        <Card title={"Active Caregivers"} amount={"1,769"} />
      </Box>
      <Box width={["100%", "32%"]}>
        <Card title={"Online Caregivers"} amount={"234"} />
      </Box>
    </Flex>
  );
}
