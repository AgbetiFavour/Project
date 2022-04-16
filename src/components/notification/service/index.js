import { errorNotifier } from "../../../components/NotificationHandler"
import http, { AUTH_ROUTES } from "../../../services/api"

export const isRead = async (notificationId, payload) => {
  try {
    await http.put(AUTH_ROUTES.EDIT_NOTIFICATION({ notificationId }), payload)
  } catch (e) {
    errorNotifier(e.response?.data?.message)
  }
}
