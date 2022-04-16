import { Box } from "@chakra-ui/react"
import { useSelector } from "react-redux"

export const NotificationAvailableDot = () => {
  const isNotificationRead = useSelector(state => state.auth?.isRead)

  return !isNotificationRead ? (
    <Box
      position="absolute"
      bg="red"
      w="10px"
      h="10px"
      borderRadius="full"
      border="1px solid #fff"
      right="-8px"
      top="8px"
    />
  ) : (
    ""
  )
}
