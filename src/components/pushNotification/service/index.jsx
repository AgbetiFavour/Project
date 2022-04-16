import { errorNotifier } from "../../../components/NotificationHandler"
import http, { AUTH_ROUTES } from "../../../services/api"

export const saveEmergency = async (payload, setLoading) => {
  try {
    await http.post(AUTH_ROUTES.CREATE_EMERGENCY, payload)
    setLoading(false)
  } catch (e) {
    setLoading(false)
    errorNotifier(e.response?.data?.message)
    throw new Error()
  }
}
