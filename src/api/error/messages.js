export const MSG_SERVER_ERROR = 'Ha ocurrido un error en el servidor';
export const MSG_UNAUTHORIZED = 'No tienes acceso a este recurso';
export const MSG_CLIENT_ERROR = 'Ha ocurrido un error interno';
export const MSG_UPDATE_SHIPPING_ADDRESS =
   'No se ha podido actualizar la direccion';

// errores para la llamada API.login()
export const MSG_LOGIN = {
   email: 'Email incorrecto',
   password: 'Contraseña incorrecta',
};

export const MSG_SIGNUP = {
   email: 'El email ya se encuentra registrado',
};

// errores para la llamada API.refreshToken()
export const MSG_REFRESH_TOKEN = {
   'The access token expired': 'No se pudo validar el token',
};

// errores para la llmada API.cart()
export const MSG_CART_GET = {
   400: 'No se pudo obtener el carrito',
};
export const MSG_CART_CREATE = {
   400: 'No se pudo crear el carrito',
};
export const MSG_RESET_PASSWORD = {
   500: 'No se ha podido cambiar la contraseña',
};
