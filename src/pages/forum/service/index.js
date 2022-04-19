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

export const deletePost = async _id => {
	try {
		await http.delete(AUTH_ROUTES.DELETE_POST(_id))
		successNotifier("Post Deleted successful")
	} catch (e) {
		errorNotifier(e?.message)
	}
}

export const editTag = async (_id, payload) => {
	try {
		await http.put(AUTH_ROUTES.EDIT_TAG(_id), payload)
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
