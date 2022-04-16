import { Box } from "@chakra-ui/react"
import { AiOutlineBell } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { ShouldShowNotificationInfo } from "./ShouldShowNotificationInfo"
import { useState } from "react"
import { isNotificationRead } from "../../store/actions/authAction"

export const NotificationBell = () => {
  const notificationIsRead = useSelector(state => state.auth?.isRead)
  const [showNotification, setShowNotification] = useState(false)

  const dispatch = useDispatch()

  return (
		<Box position="relative">
			{/* <Box
        borderRadius="full"
        border="1px solid #cacaca"
        p="5px"
        position={"relative"}
      > */}
			{!notificationIsRead ? (
				<Box
					w="15px"
					h="15px"
					bg="#ff3535"
					borderRadius="full"
					position="absolute"
					bottom="10px"
					right="0px"
					border="2px solid #fff"
				/>
			) : (
				""
			)}
			<AiOutlineBell
				fontSize="1.5em"
				color="#25282B"
				onClick={() => {
					dispatch(isNotificationRead(true))
					setShowNotification(!showNotification)
				}}
				cursor="pointer"
			/>
			{/* </Box> */}
			<ShouldShowNotificationInfo show={showNotification} />
		</Box>
	)
}
