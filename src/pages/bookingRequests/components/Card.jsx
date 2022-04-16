import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function Card({ title, amount }) {
  return (
    <Box bg="#fff" borderRadius="5px" p="20px">
      <Text mb="20px" color="#000" fontSize={["14px"]} fontWeight="bold">{title}</Text>
      <Text color="#19A5B0" fontWeight="semibold" fontSize={["20px"]}>{amount}</Text>
    </Box>
  );
}
