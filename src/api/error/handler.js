/* eslint-disable no-else-return */
import { MSG_SERVER_ERROR, MSG_CLIENT_ERROR } from "./messages";

// handlear errores de llamdas a la API
export default function handler(err, messages = null) {
  let message;
  const errorType = err.response?.data.error_type || null;

  // client received response
  if (err.response) {
    // si queremos mostrar un mensaje especifico lo mostramos
    if (messages) {
      message = messages[errorType];
    } else {
      // si no mostramos el error que vino directamente del servidor
      message = err.response.data.error;
    }
  } else if (err.request) {
    // client never received a response, or request never left
    message = MSG_SERVER_ERROR;
  } else if (err.message) {
    message = err.message;
  } else {
    // anything else
    message = MSG_CLIENT_ERROR;
  }

  return {
    type: errorType,
    message,
  };
}
