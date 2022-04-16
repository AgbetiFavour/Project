import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  Box,
  Circle,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

import SelectOptions from "./SelectOptions";
import { doctors } from "../doctors";
import CustomCalendar from "./Calendar";
import TimeSlots from "./TimeSlots";

export default function BookServiceDrawer() {
  const timeslots = [
    "1:00 pm - 1:30 pm",
    "2:30 pm - 3:00 pm",
    "3:00 pm - 3:30 pm",
    "3:30 pm - 4:00 pm",
    "4:00 pm - 4:30 pm",
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        leftIcon={<AiOutlinePlus color="#fff" size={20} />}
        bg="#19A5B0"
        color="#fff"
        _hover={{ bg: "#19A5B0" }}
        ref={btnRef}
        // colorScheme="teal"
        onClick={onOpen}
      >
        Book Service
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent bg="#F8F8F8">
          <Flex
            position={"sticky"}
            zIndex={100}
            width={"100%"}
            px="20px"
            height="100px"
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box width="20%">
              <Circle
                size="40px"
                bg="#f1fafa"
                cursor={"pointer"}
                onClick={onClose}
              >
                <IoIosArrowBack size="26px" color="teal" />
              </Circle>
            </Box>

            {/* <DrawerCloseButton /> */}
            <DrawerHeader
              width="60%"
              flexGrow={1}
              fontWeight="bold"
              fontSize={"20px"}
            >
              Book Virtual Consultation
            </DrawerHeader>
          </Flex>
          <DrawerBody mb="50px">
            <Box>
              <SelectOptions
                data={doctors}
                formId={"caregiver"}
                label={"Select Caregiver"}
                placeholder="Select Caregiver"
              />
            </Box>
            <Box my="20px">
              <SelectOptions
                data={doctors}
                formId={"doctors"}
                label={"Select Doctors/Specialists"}
                placeholder="Select Doctors/Specialists"
              />
            </Box>
            <Box my="20px">
              <SelectOptions
                data={doctors}
                formId={"serviceTypes"}
                label={"Select Types Of Service"}
                placeholder="Select Types Of Service"
              />
            </Box>
            <Heading as="h3" fontSize={["18px"]} fontWeight="bold" my="30px">
              Available Dates
            </Heading>
            <Flex width="100%" justifyContent={"center"}>
              <CustomCalendar />
            </Flex>
            <Box>
              <Heading as="h3" fontSize={["18px"]} fontWeight="bold" my="30px">
                Available Time Slots
              </Heading>
              <Flex width="100%" wrap={"wrap"}>
                {timeslots.map((timeslot, i) => {
                  return (
                    <Box width="31%" mr="5px" key={i}>
                      <TimeSlots timeslot={timeslot} />
                    </Box>
                  );
                })}
              </Flex>
            </Box>
          </DrawerBody>
          <Flex px="20px" mb="50px">
            <Button color="#fff" bg="teal" w="100%" _hover={{ bg: "teal" }}>
              Book Consultation
            </Button>
          </Flex>
        </DrawerContent>
      </Drawer>
    </>
  );
}
