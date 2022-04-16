import React from "react";
import { Image, Box, Circle, Flex, Text, Avatar, AvatarBadge } from "@chakra-ui/react";
import { BsCameraVideo } from "react-icons/bs";
import { RiChat4Line } from "react-icons/ri";
import { FaMedal } from "react-icons/fa";
import { AiTwotoneStar } from "react-icons/ai";

export default function DoctorsProfile({
  name,
  img,
  specialization,
  badge,
  docBio,
  ratings,
  totalConsultations,
  yearsOfExp,
}) {
  return (
    <Box color="#fff">
      <Flex alignItems={"center"}>
        <Box mr="10px">
          <Avatar name={name} src={img} alt={name}>
          <AvatarBadge boxSize="1em" bg="green.500" />
          </Avatar>
        </Box>
        <Box color="#25282B">
          <Flex alignItems={"center"}>
            <Text mr="10px" fontWeight={"bold"}>
              {name}
            </Text>
            <FaMedal color="#926842" />
            {/* <Image mx="10px" src={badge} /> */}
          </Flex>
          <Flex alignItems={"center"}>
            <Text>{specialization}</Text>
            <Box mx="5px">
              <AiTwotoneStar color="#926842" />
            </Box>
            {/* <Image mx="10px" src={badge} /> */}
            <Text>{ratings}</Text>
          </Flex>
        </Box>
      </Flex>
      <Box mt="30px" mb="20px" bg="#19A5B0" p="20px" borderRadius={"7px"}>
        <Flex justifyContent={"space-between"}>
          <Box>
            <Text>{totalConsultations}</Text>
            <Text color="#B2E9ED">Consultations</Text>
          </Box>
          <Box>
            <Text>{yearsOfExp}</Text>
            <Text color="#B2E9ED">Experience</Text>
          </Box>
          <Box>
            <Text>{ratings}</Text>
            <Text color="#B2E9ED">Ratings</Text>
          </Box>
        </Flex>
      </Box>
      <Flex justifyContent={"space-between"}>
        <Box borderRadius={"7px"} bg="#DEF3F4" p="10px" width="49%">
          <Circle bg="#19A5B0" size="30px">
            <BsCameraVideo />
          </Circle>
          <Text color="#19A5B0">Book a Virtual Consultation</Text>
        </Box>
        <Box borderRadius={"7px"} bg="#DEF3F4" p="10px" width="49%">
          <Circle bg="#19A5B0" size="30px">
            <RiChat4Line />
          </Circle>
          <Text color="#19A5B0">Chat With Doctor</Text>
        </Box>
      </Flex>
      <Box mt="30px">
        <Text color="#25282B" fontWeight={"bold"}>
          Doctors Bio
        </Text>
        <Text color="#52575C">{docBio}</Text>
      </Box>
    </Box>
  );
}
