import { errorNotifier } from "../../../components/NotificationHandler"
import http, { AUTH_ROUTES} from "../../../services/api"

export const SignIn = async (setLoading, payload) => {
	try {
		const {
			data: { result },
		} = await http.post(AUTH_ROUTES.ADMIN_LOGIN, payload)
		const token = result?.data?.token
		localStorage.setItem("11#221#", token)
		localStorage.setItem("11#222#", result?.data?.userType)
    window.location.href = "/dashboard"
    console.log(result,"ffff")
	} catch (e) {
    setLoading(false)
    // console.log("error", e.response)
		errorNotifier(e?.response?.data?.result?.message)
	}
}