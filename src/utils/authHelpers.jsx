import jwt_decode from "jwt-decode";

const isLogin = () => {
  const token = localStorage.getItem('token');
  if (token) return true;
  return false;
}

const getUserDataToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return false;
  const decoded = jwt_decode(token);
  return decoded;
}
const loginWithToken = (token) => {
  localStorage.setItem('token', token);
}

const logOut = () => {
  return localStorage.removeItem('token');
}

export { logOut, loginWithToken, isLogin, getUserDataToken };