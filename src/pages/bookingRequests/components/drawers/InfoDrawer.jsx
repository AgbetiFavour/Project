import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Box,
  Circle,
  Flex,
  Text,
  Heading,
  Avatar,
} from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

import RequestInfoFields from "./RequestInfoFields";
import ChildrenCard from "../../../caregivers/components/ChildrenCard";
import { useDispatch } from "react-redux";
import { childrenData } from "../../../../feature/userSlice";

export default function InfoDrawer({
  requestNo,
  requestType,
  caregiver,
  doctor,
  sex,
  age,
  dob,
  weight,
  specialNeeds,
  medCondition,
  allergies,
  role,
  date,
  time,
  email,
  phone,
  address,
  location,
  nameOfChild,
  complaint,
  prescription,
  doctorsAdvice,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [complaintDetails, setComplaintDetails] = useState("request");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setComplaintDetails("childrenData");
    dispatch(
      childrenData({
        requestNo,
        requestType,
        caregiver,
        doctor,
        sex,
        age,
        dob,
        role,
        date,
        time,
        email,
        phone,
        address,
        location,
        nameOfChild,
        complaint,
        prescription,
        doctorsAdvice,
      })
    );
  };

  return (
    <>
      <Circle
        mr="10px"
        bg="#f1fafa"
        size="30px"
        onClick={onOpen}
        cursor="pointer"
      >
        <AiOutlineInfoCircle size="18px" color="#19afb0" />
      </Circle>
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
                size="30px"
                bg="#f1fafa"
                cursor={"pointer"}
                onClick={() => setComplaintDetails("request")}
              >
                <IoIosArrowBack size="26px" color="teal" />
              </Circle>
            </Box>
            <DrawerHeader
              width="80%"
              flexGrow={1}
              fontWeight="bold"
              fontSize={"20px"}
            >
              {complaintDetails === "request" ? (
                <Flex>
                  <Text mr="10px">Request</Text>
                  <Text color="teal">{requestNo}</Text>
                </Flex>
              ) : complaintDetails === "childrenData" ? (
                <Flex alignItems={"center"}>
                  <Avatar
                    mr="10px"
                    name={nameOfChild}
                    alt={nameOfChild}
                    src={""}
                  />
                  <Text color="teal">{nameOfChild}</Text>
                </Flex>
              ) : (
                <Box>
                  <Text>{complaint}</Text>
                </Box>
              )}
            </DrawerHeader>
          </Flex>
          {complaintDetails === "request" &&
            requestType === "Virtual Consultation" && (
              <Heading
                px="25px"
                mb="20px"
                as="h4"
                fontSize="17px"
                fontWeight={"normal"}
              >
                Consultation with Dr {doctor} on {date}
              </Heading>
            )}
          <DrawerBody mb="50px">
            <Box>
              <RequestInfoFields
                title={
                  complaintDetails === "request"
                    ? "Name Of Caregiver"
                    : "Name Of Child"
                }
                details={
                  complaintDetails === "request" ? caregiver : nameOfChild
                }
                complaintDetails={complaintDetails}
              />
            </Box>
            <Box my="20px">
              <RequestInfoFields
                title={
                  complaintDetails === "request"
                    ? "Role"
                    : complaintDetails === "childrenData"
                    ? "Gender"
                    : "Presenting Complaint"
                }
                details={
                  complaintDetails === "request"
                    ? role
                    : complaintDetails === "childrenData"
                    ? sex
                    : complaint
                }
                complaintDetails={complaintDetails}
              />
            </Box>
            <Box
              my="20px"
              display={complaintDetails === "request" ? "block" : "none"}
            >
              <RequestInfoFields
                title={"Name Of Doctor/Specialist"}
                details={doctor}
                complaintDetails={complaintDetails}
              />
            </Box>
            <Box
              my="20px"
              display={complaintDetails === "request" ? "block" : "none"}
            >
              <RequestInfoFields
                title={"Request Type"}
                details={requestType}
                complaintDetails={complaintDetails}
              />
            </Box>
            {
              <Box
                width="80%"
                cursor={"pointer"}
                my="20px"
                display={
                  requestType === "Vaccination" &&
                  complaintDetails === "request"
                    ? "block"
                    : "none"
                }
                onClick={handleSubmit}
              >
                <RequestInfoFields
                  title={"Who Are You Trying To Immunize?"}
                  complaintDetails={complaintDetails}
                />
                <ChildrenCard sex={sex} age={age} name={nameOfChild} />
              </Box>
            }
            <Box my="20px">
              <RequestInfoFields
                title={
                  requestType === "Vaccination" &&
                  complaintDetails === "request"
                    ? "Email"
                    : complaintDetails === "childrenData"
                    ? "Date Of Birth"
                    : "Date"
                }
                details={
                  requestType === "Vaccination" &&
                  complaintDetails === "request"
                    ? email
                    : complaintDetails === "childrenData"
                    ? `${dob} ${age}`
                    : date
                }
                complaintDetails={complaintDetails}
              />
              <Box my="20px">
                <RequestInfoFields
                  title={
                    requestType === "Vaccination" &&
                    complaintDetails === "request"
                      ? "Phone No"
                      : complaintDetails === "childrenData"
                      ? "Last Known Weight"
                      : "Time"
                  }
                  details={
                    requestType === "Vaccination" &&
                    complaintDetails === "request"
                      ? phone
                      : complaintDetails === "childrenData"
                      ? weight
                      : time
                  }
                  complaintDetails={complaintDetails}
                />
              </Box>
              <Box
                my="20px"
                display={
                  complaintDetails === "request" ||
                  complaintDetails === "childrenData"
                    ? "none"
                    : "block"
                }
              >
                <RequestInfoFields
                  title={"Doctor's Advice"}
                  details={doctorsAdvice}
                  complaintDetails={complaintDetails}
                />
              </Box>
              <Box
                my="20px"
                display={
                  complaintDetails === "request" ||
                  complaintDetails === "childrenData"
                    ? "none"
                    : "block"
                }
              >
                <RequestInfoFields
                  title={"Prescription"}
                  details={prescription}
                  complaintDetails={complaintDetails}
                />
              </Box>
              <Box
                my="20px"
                display={requestType === "Vaccination" ? "block" : "none"}
              >
                <RequestInfoFields
                  title={
                    complaintDetails === "request"
                      ? "Where would the vaccine be administered at?"
                      : "Age At Last Known Weight"
                  }
                  details={complaintDetails === "request" ? location : age}
                  complaintDetails={complaintDetails}
                />
              </Box>
              <Box
                my="20px"
                display={requestType === "Vaccination" ? "block" : "none"}
              >
                <RequestInfoFields
                  title={
                    complaintDetails === "request"
                      ? "What address should it be delivered to?"
                      : "Allergies"
                  }
                  details={complaintDetails === "request" ? address : allergies}
                  complaintDetails={complaintDetails}
                />
              </Box>

              <Box
                my="20px"
                display={
                  requestType === "Vaccination" &&
                  complaintDetails === "childrenData"
                    ? "block"
                    : "none"
                }
              >
                <RequestInfoFields
                  title={"Special Needs (i.e Mental or Physical Challenges)"}
                  details={specialNeeds || "--"}
                  complaintDetails={complaintDetails}
                />
              </Box>
              <Box
                my="20px"
                display={
                  requestType === "Vaccination" &&
                  complaintDetails === "childrenData"
                    ? "block"
                    : "none"
                }
              >
                <RequestInfoFields
                  title={"Medical Conditions (i.e Diabetes, Asthma, etc.)"}
                  details={medCondition || "--"}
                  complaintDetails={complaintDetails}
                />
              </Box>
              <Box
                my="20px"
                display={
                  requestType === "Vaccination" &&
                  complaintDetails === "childrenData"
                    ? "block"
                    : "none"
                }
              >
                <RequestInfoFields
                  title={"Date Of Registration"}
                  details={date || "--"}
                  complaintDetails={complaintDetails}
                />
              </Box>
            </Box>
            {complaintDetails === "request" &&
              requestType === "Virtual Consultation" && (
                <>
                  <Text mb="5px">Post Consultation Form</Text>
                  <Text
                    color="#F99336"
                    textDecoration={"underline"}
                    onClick={() => setComplaintDetails("reason")}
                    cursor="pointer"
                  >
                    View Post Consultation Form
                  </Text>
                </>
              )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
