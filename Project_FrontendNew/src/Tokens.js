import Cookies from 'js-cookie';

export const getToken = () => {
  const tokenCookies = Cookies.get("token");
  return tokenCookies

}

export const saveToken = (token) => {
  Cookies.set("token", token);
  return token
}