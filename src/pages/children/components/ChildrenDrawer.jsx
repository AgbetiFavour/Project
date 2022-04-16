import React from "react";
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

export default function ChildrenDrawer({
  dob,
  age,
  weight,
  gender,
  date,
allergies,
specialNeeds,
  nameOfChild,
  data
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

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
								onClick={onClose}
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
									name={nameOfChild}
									mr="10px"
									src=""
									alt="Name of Child"
								/>
								<Text color="#52575C">{nameOfChild}</Text>
							</Flex>
						</DrawerHeader>
					</Flex>
					<DrawerBody mb="50px">
						<Box>
							<RequestInfoFields
								title={"Name Of Child"}
								details={data?.childName}
							/>
						</Box>
						<Box my="20px">
							<RequestInfoFields title={"Gender"} details={data?.gender} />
						</Box>
						<Box my="20px">
							<RequestInfoFields
								title={"Date Of Birth"}
								details={data?.dateOfBirth}
							/>
						</Box>
						<Box my="20px">
							<RequestInfoFields
								title={"Last Known Weight"}
								details={weight || "--"}
							/>
						</Box>

						<Box my="20px">
							<RequestInfoFields
								title={"Age at Last Known Weight"}
								details={age || "--"}
							/>
						</Box>
						<Box my="20px">
							<RequestInfoFields title={"Allegies"} details={data.allergies} />
						</Box>
						<Box my="20px">
							<RequestInfoFields
								title={"Special Needs (i.e Mental or Physical Challenges)"}
								details={data.specialNeeds}
							/>
						</Box>

						<Box my="20px">
							<RequestInfoFields
								title={"Date Of Registration"}
								details={date}
							/>
						</Box>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
}
