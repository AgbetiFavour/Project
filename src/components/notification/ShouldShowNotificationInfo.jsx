import { Box, Text, Stack, Divider } from "@chakra-ui/react"
import { FaTimes } from "react-icons/fa"
import { IoNotificationsCircleSharp } from "react-icons/io5"
import { useSelector } from "react-redux"
import { isRead } from "./service"

export const ShouldShowNotificationInfo = ({ show }) => {
  const notifications = useSelector(state => state.auth?.notifications)
  const adminId = useSelector(state => state.auth.adminId)
  const companyCode = useSelector(state => state.auth.companyCode)

  const handleEditNotification = id => {
    const payload = {
      adminId,
      companyCode,
      is_read: true,
    }
    isRead(id, payload)
  }

  return (
    show && (
      <Box
        position="absolute"
        top="70px"
        left="-250px"
        background={"#fff"}
        color="#000"
        padding="10px"
        boxShadow="-5px 10px 15px 0px #f5f5f5"
        borderRadius="2px"
        width="350px"
        h="400px"
        maxH="400px"
        overflow="scrollY"
        zIndex="999"
      >
        <Box>
          <Text fontWeight="bold" color="#000" mb="5px">
            Notifications
          </Text>
          <Divider mb="10px" />
          {notifications.map((data, id) => {
            return !data.is_read ? (
              <Box key={id}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Stack
                    direction="row"
                    alignItems="center"
                    spacing="-1"
                    mb="5px"
                  >
                    <IoNotificationsCircleSharp
                      color="#ff9c9c"
                      fontSize="2em"
                    />
                    <Box key={id} p="10px" maxWidth="250px">
                      <Text fontSize=".7em" fontWeight="bold">
                        {data.title}
                      </Text>
                      <Text fontSize=".6em">{data.body}</Text>
                    </Box>
                  </Stack>
                  <FaTimes
                    color="#b3b3b3"
                    cursor="pointer"
                    onClick={() => handleEditNotification(data._id)}
                  />
                </Stack>

                <Divider />
              </Box>
            ) : (
              <Text color="grey" textAlign="center">
                No unread notification
              </Text>
            )
          })}
        </Box>
      </Box>
    )
  )
}
