import {
  loginUserString,
  registerUserString,
  forgotPassString,
  logoutUserString,
} from '../actionString';
import axios from 'axios';

const url = 'http://192.168.43.216:8000';

export const loginUser = (data, type) => {
  return {
    type: loginUserString,
    payload: axios.post(url + '/auth/login/' + type, data),
  };
};

export const registerUser = (data, type) => {
  return {
    type: registerUserString,
    payload: axios.post(url + '/auth/register/' + type, data),
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
