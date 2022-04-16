import { Flex, Box, Heading } from "@chakra-ui/react";
import "../../components/nav/index.css";
import { bookRequestData } from "./components/bookRequestData";
import CaregiversCard from "./components/CaregiversCard";
import BookServiceTable from "./components/BookServiceTable";
import SearchArea from "./components/searchArea";
import BookServiceDrawer from "./components/drawers/BookServiceDrawer";
import { getBookingsRequest } from './service/index';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


function BookingRequests(props) {
  // const { SideBarActive, showSidebar, toggle } = props;
		const userType = useSelector(state => state.auth?.userType)
  const [bookingsRequest, setBookingsRequest] = useState([])
  
		const [loading, setLoading] = useState(false)
		const [updateTable, setUpdateTable] = useState({})

		useEffect(() => {
				getBookingsRequest( userType, setLoading, setBookingsRequest)
			},
			[updateTable]
  )
  
  console.log(bookingsRequest, "bookingsRequest")

  return (
    <Box px={["20px", 0]}>
      <Heading as="h2" fontSize={["22px"]}>
        Booking Requests
      </Heading>
      <Box mt="20px">
        <CaregiversCard />
      </Box>
      <Flex justifyContent={["flex-end"]} mt="20px">
        <BookServiceDrawer />
      </Flex>
      <Box>
        <SearchArea />
      </Box>
      <BookServiceTable {...bookingsRequest } />
    </Box>
  );
}

export default BookingRequests;
