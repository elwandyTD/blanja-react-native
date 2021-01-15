import {
  loginUserString,
  registerUserString,
  forgotPassString,
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
