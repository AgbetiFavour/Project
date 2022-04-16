import React, { useState, useEffect } from "react"
import {
	Heading,
	Text,
	Stack,
	Flex,
	Box,
	Input,
	Button,
	InputRightElement,
	InputGroup,
	Image,
} from "@chakra-ui/react"
import { SignIn } from "./service"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import loginImage from "../../assets/images/ioginImage.jpg"

const Login = () => {
	const [disabled, setDisabled] = useState(true)
	const [formValues, setFormValues] = useState({ email: "", password: "" })
	const [loading, setLoading] = useState(false)
	const [show, setShow] = useState(false)

	const handleClick = () => setShow(!show)

	useEffect(() => {
		const { email, password } = formValues
		if (!email || !password) {
			setDisabled(true)
		} else {
			setDisabled(false)
		}
		return () => {
			setDisabled(true)
		}
	}, [formValues])

	const handleChange = e => {
		const { name, value } = e.target
		setFormValues(initial => ({ ...initial, [name]: value }))
	}
	console.log(formValues, "ddddd")
	const handleSignIn = () => {
		setLoading(true)
		SignIn(setLoading, formValues)
	}

	return (
		<Flex
			justifyContent={["space-evenly", "ceter"]}
			alignItems="center"
			height="100vh"
		>
			<Stack
				// border="1px solid #bbbbbb"
				// borderRadius="5px"
				w="400px"
				h="400px"
				spacing="20px"
				p="20px"
			>
				<Heading color="#0168DA" mb="30px">
					Login
				</Heading>
				<Box>
					<Text>Email</Text>
					<Input
						name="email"
						onChange={handleChange}
						type="email"
						placeholder="Enter Email"
					/>
				</Box>

				<Box>
					<Text>Password</Text>
					<InputGroup size="md">
						<Input
							pr="4.5rem"
							type={show ? "text" : "password"}
							placeholder="Enter password"
							onChange={handleChange}
							name="password"
						/>
						<InputRightElement width="4.5rem">
							<Button
								_focus={{ boxShadow: "none" }}
								variant="ghost"
								h="1.75rem"
								size="sm"
								onClick={handleClick}
							>
								{show ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
							</Button>
						</InputRightElement>
					</InputGroup>
				</Box>

				<Button
					bg="blue"
					color="#fff"
					onClick={handleSignIn}
					isLoading={loading}
					disabled={disabled}
				>
					Sign in
				</Button>

				<Text color="#3D3D3D" textAlign="center">
					Forget password?
					<Button
						bg="transparent"
						_hover={{ bg: "transparent" }}
						color="#0168DA"
					>
						Click here
					</Button>
				</Text>
			</Stack>
			<Box display={["none", "none", "block"]}>
				<Image src={loginImage} alt="visitor" />
			</Box>
		</Flex>
	)
}

export default Login
