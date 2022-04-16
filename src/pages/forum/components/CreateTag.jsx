import { Flex, FormLabel, Input, Stack, FormControl } from "@chakra-ui/react"
import { MdAdd } from "react-icons/md"
import CustomDrawer from "../../../components/common/CustomDrawer"
import { CustomButton } from "../../../components/CustomButton"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { errorNotifier } from "./../../../components/NotificationHandler"
import { createTag } from "./../service"

const CreateTag = ({ updateTable,onClose }) => {
	const [disabled, setDisabled] = useState(true)
	const [loading, setLoading] = useState(false)

	const userType = useSelector(state => state.auth?.userType)
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

	const handleSaveSett = async () => {
		setLoading(true)
		createTag(setLoading, formValues, userType)
			.then(() => {
				updateTable()
				onClose()
				// window.location.pathname = "/account"
			})
			.catch(e => errorNotifier(e.response?.message))
	}
	return (
		<Flex ml="auto">
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
					<FormLabel htmlFor="tagName" fontSize="sm" color="#25282B">
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
					/>
				</FormControl>
				<CustomButton
					btnText="Submit"
					width="50%"
					alignSelf="center"
					disabled={disabled}
					onClick={handleSaveSett}
					isLoading={loading}
				/>
			</Stack>
		</Flex>
	)
}

export default CreateTag
