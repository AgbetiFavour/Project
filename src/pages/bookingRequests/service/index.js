// import { DATA_ROWS } from "../../../app/constants"

import { errorNotifier } from "../../../components/NotificationHandler"
import http, { AUTH_ROUTES } from "../../../services/api"

export const getBookingsRequest = async (userType, setLoading, setBookingsRequest) => {
	try {
		const {
			data: { data },
		} = await http.get(AUTH_ROUTES.GET_BOOKINGS_REQUEST(userType))

		setLoading && setLoading(false)
		setBookingsRequest(data.bookings)
		// console.log(data.consults, "fffffffff")
	} catch (e) {
		setLoading && setLoading(false)
		//  console.log("error", e.message)
		errorNotifier(e?.message)
	}
}

