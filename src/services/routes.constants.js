export const AUTH_ROUTES = {
	ADMIN_LOGIN: "/admin/login",
	ANALYTICS: userType => `/admin/analytics?userType=${userType}`,
	USER_STATISTICS: userType => `/admin/user-stat?userType=${userType}`,
	GET_TAGS: ({ userId, userType }) =>
		`/admin/tags?adminId=${userId}&userType=${userType}`,
	GET_SINGLE_TAG: ({ userId, _id }) =>
		`admin/tags?adminId=${userId}&id=${_id}`,
	DELETE_TAGS: ({ _id, userType }) => `/admin/tags/${_id}?userType=${userType}`,
	DELETE_POST: _id => `/admin/posts/${_id}`,
	GET_CHILDREN: userType => `/admin/children?userType=${userType}`,
	CREATE_TAG: "/admin/tags",
	EDIT_TAG: _id => `/admin/tags/${_id}`,
	GET_REPORTED_POSTS: userType => `/admin/posts?userType=${userType}`,
	GET_BOOKINGS_REQUEST: userType => `/admin/bookings?userType=${userType}`,
}
