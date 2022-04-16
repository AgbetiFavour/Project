import { createAction } from "@reduxjs/toolkit"

export const authSetUser = createAction("auth/setUser", idsObj => {
	return {
		payload: idsObj,
	}
})

export const authSetUserType = createAction("auth/setUserType", idsObj => {
	return {
		payload: idsObj,
	}
})

export const notification = createAction("notification", notification => {
	return {
		payload: { notification },
	}
})

export const isNotificationRead = createAction("isRead", bool => {
	return {
		payload: bool,
	}
})
