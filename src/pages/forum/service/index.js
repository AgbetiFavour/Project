// import { DATA_ROWS } from "../../../app/constants"

import {
	errorNotifier,
	successNotifier,
} from "../../../components/NotificationHandler"
import http, { AUTH_ROUTES } from "../../../services/api"

export const getTags = async (userId, userType, setLoading, setTags) => {
	const params = {
		userId,
		userType,
	}
	try {
		const {
			data: { data },
		} = await http.get(AUTH_ROUTES.GET_TAGS(params))

		setLoading && setLoading(false)
		setTags(data.tags)
		// console.log(data.consults, "fffffffff")
	} catch (e) {
		setLoading && setLoading(false)
		//  console.log("error", e.message)
		errorNotifier(e?.data?.message)
	}
}

export const getSingleTag = async (userId, _id, setLoading, setSingleTag) => {
	const params = {
		userId,
		_id,
	}
	try {
		const {
			data: { data },
		} = await http.get(AUTH_ROUTES.GET_SINGLE_TAG(params))

		setLoading && setLoading(false)
		setSingleTag(data.tags)
		// console.log(data.consults, "fffffffff")
	} catch (e) {
		setLoading && setLoading(false)
		//  console.log("error", e.message)
		errorNotifier(e?.data?.message)
	}
}

export const getReportedPosts = async (
	userType,
	setLoading,
	setReportedPosts
) => {
	try {
		const {
			data: { data },
		} = await http.get(AUTH_ROUTES.GET_REPORTED_POSTS(userType))

		setLoading && setLoading(false)
		setReportedPosts(data.posts)
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

export const deletePost = async (_id) => {
	
	try {
		await http.delete(AUTH_ROUTES.DELETE_POST(_id))
		successNotifier("Post Deleted successful")
	} catch (e) {
		errorNotifier(e?.message)
	}
}

export const editTag = async _id => {
	try {
		await http.put(AUTH_ROUTES.EDIT_TAG(_id))
		successNotifier("Tag updated successful")
	} catch (e) {
		errorNotifier(e?.message)
	}
}

export const createTag = async (setLoading, payload) => {
	try {
		console.log("success", payload)
		await http.post(AUTH_ROUTES.CREATE_TAG, payload)
		setLoading(false)
		successNotifier("Successfully updated")
	} catch (e) {
		setLoading(false)
		errorNotifier(e?.response?.data?.error)
	}
}
// export const doctorGetJojoloPoints = async (
// 	userId,
// 	setLoading,
// 	setJojoloPoints
// ) => {
// 	try {
// 		const {
// 			data: { data },
// 		} = await http.get(AUTH_ROUTES.DOCTOR_GET_JOJOLO_POINTS(userId))

// 		setLoading && setLoading(false)
// 		setJojoloPoints(data.userPoint)
// 		// console.log(data.appSubscription, "fffffffff")
// 	} catch (e) {
// 		setLoading && setLoading(false)
// 		// console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhh")
// 		errorNotifier(e?.response?.data?.message)
// 	}
// }

// export const doctorGetJojoloBadge = async (setLoading, setJojoloBadge) => {
// 	try {
// 		const {
// 			data,
// 			// : { data },
// 		} = await http.get(AUTH_ROUTES.DOCTOR_GET_JOJOLO_BADGE)

// 		setLoading && setLoading(false)
// 		setJojoloBadge(data)
// 		// console.log(data.appSubscription, "fffffffff")
// 	} catch (e) {
// 		setLoading && setLoading(false)
// 		// console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhh")
// 		errorNotifier(e?.response?.data?.message)
// 	}
// }

// export const getJojoloBadgeHistory = async (setLoading, setJojoloHistory) => {
// 	try {
// 		const {
// 			data: { data },
// 		} = await http.get(AUTH_ROUTES.GET_JOJOLO_BADGE_HISTORY)

// 		setLoading && setLoading(false)
// 		setJojoloHistory(data.pointHistories)
// 		// console.log(data.appSubscription, "fffffffff")
// 	} catch (e) {
// 		setLoading && setLoading(false)
// 		// console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhh")
// 		errorNotifier(e?.response?.data?.message)
// 	}
// }

// export const changePassword = async (userId, payload) => {
// 	try {
// 		await http.put(AUTH_ROUTES.DOCTOR_CHANGE_PASSWORD(userId), payload)
// 		successNotifier("password changed successfully")
// 	} catch (e) {
// 		errorNotifier(e?.response?.data?.message)
// 	}
// }

// export const doctorUpdateMedicalLicense = async (
// 	userId,
// 	setLoading,
// 	payload
// ) => {
// 	try {
// 		await http.put(AUTH_ROUTES.DOCTOR_UPDATE_MEDICAL_LICENSE(userId), payload)
// 		setLoading(false)
// 		successNotifier("Successfully updated")
// 	} catch (e) {
// 		setLoading(false)
// 		errorNotifier(e?.response?.data?.message)
// 	}
// }

// export const doctorValidCard = async (userId, setLoading, payload) => {
// 	try {
// 		await http.put(AUTH_ROUTES.DOCTOR_VALID_CARD(userId), payload)
// 		setLoading(false)
// 		successNotifier("Successfully updated")
// 	} catch (e) {
// 		setLoading(false)
// 		errorNotifier(e?.response?.data?.message)
// 	}
// }

// export const doctorDonateDetails = async payload => {
// 	try {
// 		await http.post(AUTH_ROUTES.DOCTOR_DONATE_DETAILS, payload)
// 		successNotifier("payment made successfully")
// 	} catch (e) {
// 		errorNotifier(e?.response?.data?.message)
// 	}
// }

// export const getDoctorDetails = async (userId, setLoading, setDoctor) => {
// 	try {
// 		const {
// 			data: { data },
// 		} = await http.get(AUTH_ROUTES.DOCTOR_DETAIL(userId))

// 		setLoading && setLoading(false)
// 		setDoctor(data.doctors[0])
// 		// console.log(data.appSubscription, "fffffffff")
// 	} catch (e) {
// 		setLoading && setLoading(false)
// 		// console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhh")
// 		errorNotifier(e?.response?.data?.message)
// 	}
// }
