import {
  loginUserString,
  registerUserString,
  forgotPassString,
  resetPassString,
  logoutUserString,
  getOtpString,
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

export const otpUser = (data) => {
  return {
    type: getOtpString,
    payload: axios.post(url + '/auth/verify_otp', data),
  };
};

export const forgotPassword = (data) => {
  return {
    type: forgotPassString,
    payload: axios.post(url + '/auth/forgot_pass/customer', data),
  };
};

export const resetPassword = (data) => {
  return {
    type: resetPassString,
    payload: axios.post(url + '/auth/reset_pass', data),
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
