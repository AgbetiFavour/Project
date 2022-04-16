import {
	Circle,
	FormControl,
	FormLabel,
	HStack,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	Stack,
	Text,
	useDisclosure,
} from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { FiEdit2 } from "react-icons/fi"
import { FiTrash2 } from "react-icons/fi"
import CautionAlertDialog from "../../../components/common/CautionAlertDialog"
import { deleteTags, editTag, getSingleTag } from "../service"
import { Tip } from "./../../../components/Tip"
import { CustomButton } from "../../../components/CustomButton"


const TagsTable = ({ tags, updateTable, userType, userId }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [disabled, setDisabled] = useState(true)
	const [loading, setLoading] = useState(false)
		const [singleTag, setSingleTag] = useState([])


	useEffect((_id) => {
		getSingleTag(userId, _id, setLoading, setSingleTag)
	}, [])
	
console.log(singleTag, "fhs")

	// const userId = useSelector(state => state.auth?.user)
	const [formValues, setFormValues] = useState({
		tagName: "",
	})
	//form input validation
	useEffect(() => {
		const { tagName } = formValues
		if (!tagName) {
			setDisabled(true)
		} else {
			setDisabled(false)
		}
	}, [formValues])
	console.log("Form", formValues)

	const handleChange = e => {
		const { name, value } = e.target
		setFormValues(initial => ({ ...initial, [name]: value }))
	}

	const handleSaveSett = async _id => {
		console.log("_id", _id)
		// editTag(_id, formValues)
		// 	.then(() => {
		// 		updateTable()
		// 		onClose()
		// 		// window.location.pathname = "/account"
		// 	})
		// 	.catch(e => errorNotifier(e.response?.message))
	}
	const handleDelete = _id => {
		deleteTags(_id, userType, onClose).then(() => updateTable())
	}
	return (
		<>
			{tags?.map?.((data, i) => {
				return (
					<>
						<HStack
							maxW="550px"
							h="64px"
							bg="#fff"
							justify="space-between"
							px="24px"
							borderRadius="5"
							mb="5"
							key={i}
						>
							<Text as="h3">{data.tagName}</Text>
							<HStack gap="4">
								<Tip l={"Edit"}>
									<Modal isOpen={isOpen} onClose={onClose}>
										<ModalOverlay />
										<ModalContent bg="#F8F8F8">
											<ModalHeader>
												<Text fontWeight="bold" textAlign="center">
													Edit Create Tag
												</Text>
											</ModalHeader>
											{/* <ModalCloseButton /> */}
											<ModalBody>
												<Stack
													flex="3"
													padding="10px 20px"
													maxW={["100%", "700px"]}
													mr={[0, "20px"]}
													mb={["20px", 5]}
													py={5}
													mx={5}
													cursor="pointer"
												>
													<FormControl>
														<FormLabel
															htmlFor="tagTitle"
															fontSize="sm"
															color="#25282B"
														>
															Enter Tag Title
														</FormLabel>
														<Input
															name="tagName"
															type="text"
															_focus={{ boxShadow: "none" }}
															variant="filled"
															mb={5}
															onChange={handleChange}
															value={formValues?.tagName}
															placeholder={data?.tagName}
														/>
													</FormControl>
													<CustomButton
														btnText="Submit"
														width="50%"
														alignSelf="center"
														disabled={disabled}
														onClick={() => handleSaveSett(data._id)}
														// isLoading={loading}
													/>
												</Stack>
											</ModalBody>
										</ModalContent>
									</Modal>
									<Circle p="6px" bg="rgba(25, 165, 176, 0.2)" onClick={onOpen}>
										<FiEdit2 color="rgba(25, 165, 176, 0.8)" />
									</Circle>
								</Tip>
								<CautionAlertDialog
									onContinue={() => handleDelete(data?._id)}
									cautionTitle="Are you sure you want to delete this post?"
									buttonProps={{
										size: "xs",
										background: "#FFE5E5",
										p: 1,
										borderRadius: "50%",
									}}
									button={<FiTrash2 size={18} color="rgba(251, 78, 78, 1)" />}
								/>
							</HStack>
						</HStack>
					</>
				)
			})}
		</>
	)
}

export default TagsTable
