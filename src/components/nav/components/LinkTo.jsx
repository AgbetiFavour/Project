import { NavLink } from "react-router-dom"
import { Flex, useMediaQuery, Box } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { isNotificationRead } from "../../../store/actions/authAction"
import { NotificationAvailableDot } from "../../notification/NotificationAvailableDot"

export const LinkTo = ({
  type,
  to,
  classname,
  iconComponent = null,
  btn,
  title,
  toggle,
}) => {
  const [isMobileScreen] = useMediaQuery("(max-width: 600px)")
  

  const handleLogout = () => {
    localStorage.removeItem("11#221#")
    window.location.replace(`/${type}/login`)
  }

  const dispatch = useDispatch()

  return btn ? (
    <Flex
      _hover={{
        cursor: "pointer",
        background: "#f2f2f2",
        borderTopLeftRadius: 40,
        fontWeight: "700",
        color: "black",
        borderBottomLeftRadius: 40,
        flex: " 1 0 auto",
      }}
      fontWeight="700"
      onClick={handleLogout}
      className={`${classname} link`}
    >
      {iconComponent}
      {title}
    </Flex>
  ) : (
    <NavLink
      activeStyle={{
        fontWeight: "bold",
        color: "#19A5B0",
        borderLeft: "5px solid #19A5B0",
        background: "#f1fafa",
        borderRadius: "5px",
        paddingTop: "10px",
        paddingBottom: "10px",
      }}
      activeClassName="active"
      className={`${classname} link`}
      onClick={() => {
        if (title === "Notifications") {
          dispatch(isNotificationRead(true));
        }
        if (isMobileScreen) {
          toggle();
        }
      }}
      target={title === "Guest CheckIn" ? "_blank" : ""}
      to={to ? to : "/"}
    >
      <Box position="relative">
        {title === "Notifications" && <NotificationAvailableDot />}
        {iconComponent}
      </Box>
      {title}
    </NavLink>
  );
}
