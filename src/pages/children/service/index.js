// import { DATA_ROWS } from "../../../app/constants"

import {
	errorNotifier,
	successNotifier,
} from "../../../components/NotificationHandler"
import http, { AUTH_ROUTES } from "../../../services/api"

export const getChildren = async (userType, setLoading, setChildren) => {
	try {
		const {
			data: { data },
		} = await http.get(AUTH_ROUTES.GET_CHILDREN(userType))

		setLoading && setLoading(false)
		setChildren(data)
		// console.log(data.consults, "fffffffff")
	} catch (e) {
		setLoading && setLoading(false)
		//  console.log("error", e.message)
		errorNotifier(e?.message)
	}
}

// export const deleteTags = async (_id, userType, onClose) => {
// 	const params = {
// 		_id,
// 		userType,
// 	}
// 	try {
// 		await http.delete(AUTH_ROUTES.DELETE_TAGS(params))
// 		successNotifier("Tag Deleted successful")
// 		onClose()
// 	} catch (e) {
// 		errorNotifier(e?.message)
// 	}
// }

