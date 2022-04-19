// import { DATA_ROWS } from "../../../app/constants"

import {
	errorNotifier,
	successNotifier,
} from "../../../components/NotificationHandler"
import http, { AUTH_ROUTES } from "../../../services/api"

export const getWithdrawal = async ( setLoading, setWithdrawal) => {
	try {
		const {
			data: { data },
		} = await http.get(AUTH_ROUTES.GET_WITHDRAWAL)

		setLoading && setLoading(false)
		setWithdrawal(data)
		// console.log(data.consults, "fffffffff")
	} catch (e) {
		setLoading && setLoading(false)
		//  console.log("error", e.message)
		errorNotifier(e?.data?.message)
	}
}





export const deleteTags = async (_id, userType) => {
	const params = {
		_id,
		userType,
	}
	try {
		await http.delete(AUTH_ROUTES.DELETE_TAGS(params))
		successNotifier("Tag Deleted successful")
	} catch (e) {
		errorNotifier(e?.message)
	}
}

export const deletePost = async _id => {
	try {
		await http.delete(AUTH_ROUTES.DELETE_POST(_id))
		successNotifier("Post Deleted successful")
	} catch (e) {
		errorNotifier(e?.message)
	}
}

