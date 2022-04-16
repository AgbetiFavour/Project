import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import ChildrenCard from "./ChildrenCard";
import ChildrenProfile from "./ChildrenProfile";
import { childrenData } from "../../../feature/userSlice";

export default function CareGiverDrawer({
  phoneNo,
  email,
  children,
  caregiver,
  doctor,
  role,
  nameOfChild,
  complaint,
  status,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [complaintDetails, setComplaintDetails] = useState("request");
  const dispatch = useDispatch();
    const data = useSelector(state=> state?.userReducer?.user)

  const handleSubmit = (e, child) => {
    e.preventDefault();
    setComplaintDetails("childrenData");
    dispatch(childrenData(child));
  };

  const toggle = () => {
    if(complaintDetails === "request") setComplaintDetails("childrenData");
    if (complaintDetails === "childrenData")
      setComplaintDetails("request");
  }

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
                onClick={() => toggle()}
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
              <Flex alignItems={"center"}>
                <Avatar
                  name={complaintDetails === "request" ? caregiver : data?.name}
                  mr="10px"
                  src=""
                  alt="caregiver's name"
                />
                <Text color="#52575C">
                  {complaintDetails === "request" ? caregiver : data?.name}
                </Text>
              </Flex>
            </DrawerHeader>
          </Flex>
          <DrawerBody mb="50px">
            {complaintDetails === "childrenData" ? (
              <ChildrenProfile />
            ) : (
              <>
                <Box>
                  <RequestInfoFields
                    title={"Name Of Caregiver"}
                    details={caregiver}
                    complaintDetails={complaintDetails}
                  />
                </Box>
                <Box my="20px">
                  <RequestInfoFields
                    title={"Role"}
                    details={role}
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
                    title={"No Of Children"}
                    details={children.length}
                  />
                </Box>
                <Box my="20px" pr="40px">
                  {children?.map((child, i) => {
                    return (
                      <Box
                        key={i}
                        mb="10px"
                        cursor="pointer"
                        onClick={(e) => handleSubmit(e, child)}
                      >
                        <ChildrenCard
                          name={child?.name}
                          sex={child?.sex}
                          age={child?.age}
                        />
                      </Box>
                    );
                  })}
                </Box>
                <Box my="20px">
                  <RequestInfoFields
                    title={"Status"}
                    details={status || "--"}
                  />
                </Box>
                {/* {complaintDetails === "request" && (
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
            )} */}
              </>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
