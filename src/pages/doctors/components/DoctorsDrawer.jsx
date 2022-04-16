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
  Avatar,
} from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";

import RequestInfoFields from "./RequestInfoFields";
import ImageModal from "./ImageModal";
import DoctorsProfile from "./DoctorsProfile";
// import ChildrenCard from "./ChildrenCard";

export default function DoctorsDrawer({
  phoneNo,
  email,
  state,
  license,
  docImg,
  doctor,
  date,
  ratings,
  consultations,
  expLength,
  nameOfChild,
  complaint,
  specialty,
  docBio,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [complaintDetails, setComplaintDetails] = useState("request");

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
                onClick={()=>setComplaintDetails("request")}
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
              <Flex alignItems={"center"} justifyContent="center">
                {complaintDetails === "request" ? (
                  <>
                    <Avatar
                      name={doctor}
                      mr="10px"
                      src=""
                      alt="caregiver's name"
                    />
                    <Text color="#52575C">{doctor}</Text>
                  </>
                ) : (
                  <Text color="#52575C">Profile</Text>
                )}
              </Flex>
            </DrawerHeader>
          </Flex>
          <DrawerBody mb="50px">
            {complaintDetails === "profile" ? (
              <DoctorsProfile
                name={doctor}
                specialization={specialty}
                docBio={docBio}
                yearsOfExp={expLength}
                ratings={ratings}
                totalConsultations={consultations}
              />
            ) : (
              <>
                <Box>
                  <RequestInfoFields
                    title={
                      complaintDetails === "request"
                        ? "Name Of Doctor/Specialist"
                        : "Name Of Child"
                    }
                    details={
                      complaintDetails === "request" ? doctor : nameOfChild
                    }
                    complaintDetails={complaintDetails}
                  />
                </Box>
                <Box my="20px">
                  <RequestInfoFields
                    title={
                      complaintDetails === "request"
                        ? "Role"
                        : "Presenting Complaint"
                    }
                    details={
                      complaintDetails === "request" ? specialty : complaint
                    }
                    complaintDetails={complaintDetails}
                  />
                </Box>
                <Box my="20px">
                  <RequestInfoFields title={"Email"} details={email} />
                </Box>
                <Box my="20px">
                  <RequestInfoFields title={"Phone Number"} details={phoneNo} />
                </Box>
                <Box my="20px">
                  <RequestInfoFields
                    title={"Years Of Experience"}
                    details={expLength}
                  />
                </Box>
                {state === "requests" && (
                  <Box my="20px">
                    <RequestInfoFields
                      title={"Date Of Registration"}
                      details={date}
                    />
                  </Box>
                )}
                <Box my="20px">
                  <RequestInfoFields title={"Medical Licence"} />
                  <ImageModal img={license} title={"Medical Licence"} />
                </Box>
                <Box my="20px">
                  <RequestInfoFields title={"Valid ID Card"} />
                  <ImageModal img={docImg} title={"Valid ID Card"} />
                </Box>
                <Box my="20px">
                  <RequestInfoFields title={"Bio"} details={docBio} />
                </Box>
                <Text
                  color="#EA6F06"
                  textDecoration={"underline"}
                  cursor="pointer"
                  onClick={() => setComplaintDetails("profile")}
                >
                  View Profile
                </Text>
              </>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
