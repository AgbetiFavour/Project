import { Box, Text } from '@chakra-ui/react'
import React from 'react'

export default function RequestInfoFields({ title, details, complaintDetails }) {
  return (
    <Box>
      <Text color={complaintDetails === "request" ? "grey" : "#19A5B0"}>
        {title}
      </Text>
      <Text color="#000" fontWeight={"normal"}>
        {details}
      </Text>
    </Box>
  );
}
