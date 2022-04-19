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
import { errorNotifier } from "../../../components/NotificationHandler"


const TagsTable = ({ tags, updateTable, userType, userId }) => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [disabled, setDisabled] = useState(true)
	const [loading, setLoading] = useState(false)
		const [currentData, setCurrentData] = useState([])


	const openModal = (tag) => {
		setCurrentData({ ...tag })
		onOpen()

	}
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
		editTag(_id, formValues)
			.then(() => {
				updateTable()
				onClose()
			})
			.catch(e => errorNotifier(e.response?.message))
	}
	const handleDelete = _id => {
		deleteTags(_id, userType, onClose).then(() => updateTable())
	}
	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent bg="#F8F8F8">
					<ModalHeader>
						<Text fontWeight="bold" textAlign="center">
							Edit Create Tag
						</Text>
					</ModalHeader>
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
								<FormLabel htmlFor="tagTitle" fontSize="sm" color="#25282B">
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
									defaultValue={currentData?.tagName}
								/>
							</FormControl>
							<CustomButton
								btnText="Submit"
								width="50%"
								alignSelf="center"
								disabled={disabled}
								onClick={() => handleSaveSett(currentData._id)}
								isLoading={loading}
							/>
						</Stack>
					</ModalBody>
				</ModalContent>
			</Modal>
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
							key={data._Id}
						>
							<Text as="h3">{data.tagName}</Text>
							<HStack gap="4">
								<Tip l={"Edit"}>
									<Circle p="6px" bg="rgba(25, 165, 176, 0.2)" onClick={() => openModal(data)}>
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
