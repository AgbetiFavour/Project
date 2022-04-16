import { authSetUser, authSetUserType } from "../actions/authAction"
/**
 *
 * @param {*} state
 * @param {*} action
 * @return {*}
 *
 *
 */

function r(
	state = {
		user: {},
		userType: "",
		authenticated: false,
		isRead: true,
		adminId: ""
	},
	action
) {
	switch (action.type) {
		case authSetUser.type:
			return {
				...state,
				user: action.payload,
				adminId: action.payload.adminId
			}

		case authSetUserType.type:
			return {
				...state,
				userType: action?.payload,
			}

		default:
			return state
	}
}

export default r
