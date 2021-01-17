import {
  loginUserString,
  registerUserString,
  forgotPassString,
  logoutUserString,
} from '../actionString';
import axios from 'axios';

const url = 'http://192.168.43.216:8000';

export const loginUser = (data) => {
  return {
    type: loginUserString,
    payload: axios.post(url + '/auth/login/customer', data),
  };
};

export const registerUser = (data) => {
  return {
    type: registerUserString,
    payload: axios.post(url + '/auth/register/customer', data),
  };
};

export const forgotPassword = (data) => {
  return {
    type: forgotPassString,
    payload: axios.post(url + '/auth/send_email/customer', data),
  };
};

export const logoutUser = (token) => {
  return {
    type: logoutUserString,
    payload: axios.delete(url + '/auth/logout', {
      headers: {
        'x-access-token': 'Bearer ' + token,
      },
    }),
  };
};
