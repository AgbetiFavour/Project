import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function RequestInfoFields({ title, details }) {
  return (
    <Box>
      <Text color={"#19A5B0"} mb="7px">{title}</Text>
      <Text color="#000" fontWeight={"normal"}>
        {details}
      </Text>
    </Box>
  );
}
