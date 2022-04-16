import { Box, Text, Stack, Flex } from "@chakra-ui/react"
import { LinkTo } from "../../nav/components/LinkTo"
import "./index.css"
import { ADMIN } from "./components/sidebar.constatnt"
// import { Image } from "@chakra-ui/image"
// import { useSelector } from "react-redux"
// import { getCompanyProfile } from "../../../pages/settings/service"
// import { useEffect, useState } from "react"
import { BiLogOut } from "react-icons/bi"

const SideBar = ({ toggle }) => {
	// const getBrandColor = useSelector(state => state.auth?.brandColor)
	// const adminId = useSelector(state => state.auth?.adminId)
	// const companyCode = useSelector(state => state.auth?.companyCode)
	// const [companyProfile, setCompanyProfile] = useState([])
	// const [company = {}] = companyProfile

	//get company profile data
	// useEffect(() => {
	//   const payload = {
	//     companyCode,
	//     adminId,
	//   }

	//   getCompanyProfile(payload, setCompanyProfile)
	// }, [companyCode, adminId])

	const handleLogout = () => {
		localStorage.removeItem("11#221#")
		window.location.href = "/"
	}

	return (
		<Box className="sidebar">
			<Box className="sidebar-inner">
				{/* <Flex className="brand-style">
					<Image
						borderRadius="full"
						boxSize="50px"
						src="https://bit.ly/dan-abramov"
						alt="Dan Abramov"
					/>
					<Box pl="12px">
						<Text fontSize={["15px"]}> Logo</Text>
					</Box>
				</Flex> */}
				<Flex flex={1} flexDirection="column">
					{ADMIN.map(({ title, to, icon }, id) => (
						<LinkTo
							key={id}
							to={to}
							title={title}
							toggle={toggle}
							id={1}
							iconComponent={icon}
						/>
					))}
				</Flex>

				<Box className="link">
					<Stack
						cursor="pointer"
						onClick={handleLogout}
						direction="row"
						alignItems="center"
						color="red"
					>
						<BiLogOut />
						<Text>Log out</Text>
					</Stack>
				</Box>
			</Box>
		</Box>
	)
}
export default SideBar
