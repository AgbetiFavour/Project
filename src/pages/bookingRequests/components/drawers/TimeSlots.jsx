import React, { useState } from 'react'
import { Box, Text } from "@chakra-ui/react";

export default function TimeSlots({ timeslot }) {
  const [color, setColor] = useState("")
  return (
    
    <Box
      width="100%" 
      fontSize={"14px"} 
      textAlign={"center"}
      mb="10px" 
      p="5px" 
      color={color ? "#fff" : "#000"}
      borderRadius={"5px"} 
      cursor={"pointer"} 
      onClick={()=>setColor(!color)} 
      bg={color ? "teal" : "#fff"}>
      <Text>{timeslot}</Text>
    </Box>
  )
}
