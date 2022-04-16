// import { DATA_ROWS } from "../../../app/constants"

import { errorNotifier } from "../../../components/NotificationHandler"
import http, { AUTH_ROUTES } from "../../../services/api"

export const getAnalytics = async (userType, setLoading, setAnalytics) => {
	try {
		const {
			data: { data },
		} = await http.get(AUTH_ROUTES.ANALYTICS(userType))

		setLoading && setLoading(false)
		setAnalytics(data)
		// console.log(data.consults, "fffffffff")
	} catch (e) {
		setLoading && setLoading(false)
		//  console.log("error", e.message)
		errorNotifier(e?.message)
	}
}

export const getStatistics = async (userType, setLoading, setStatistics) => {
	try {
		const {
			data: { data },
		} = await http.get(AUTH_ROUTES.USER_STATISTICS(userType))

		setLoading && setLoading(false)
		setStatistics(data)
		// console.log(data.consults, "fffffffff")
	} catch (e) {
		setLoading && setLoading(false)
		//  console.log("error", e.message)
		errorNotifier(e?.message)
	}
}
