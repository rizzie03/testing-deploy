import { LOGIN_BEGIN } from "../actionsTypes/authTypes";
import { REGISTER_BEGIN } from "../actionsTypes/authTypes";

export const LoginAction = (body) => {
  return {
    type: LOGIN_BEGIN,
    body
  };
};

export const RegisterAction = (body) => {
  return {
    type: REGISTER_BEGIN,
    body
  };
};
