import {
  loginUserString,
  registerUserString,
  forgotPassString,
  resetPassString,
  logoutUserString,
  getOtpString,
  getUserString,
} from '../actionString';
import axios from 'axios';
import {API_HOST} from '@env';

export const getUser = (role, id) => {
  return {
    type: getUserString,
    payload: axios.get(`${API_HOST}/auth/user/${role}/${id}`),
  };
};

export const loginUser = (data, type) => {
  return {
    type: loginUserString,
    payload: axios.post(API_HOST + '/auth/login/' + type, data),
  };
};

export const registerUser = (data, type) => {
  return {
    type: registerUserString,
    payload: axios.post(API_HOST + '/auth/register/' + type, data),
  };
};

export const otpUser = (data) => {
  return {
    type: getOtpString,
    payload: axios.post(API_HOST + '/auth/verify_otp', data),
  };
};

export const forgotPassword = (data) => {
  return {
    type: forgotPassString,
    payload: axios.post(API_HOST + '/auth/forgot_pass/customer', data),
  };
};

export const resetPassword = (data) => {
  return {
    type: resetPassString,
    payload: axios.post(API_HOST + '/auth/reset_pass', data),
  };
};

export const logoutUser = (token) => {
  return {
    type: logoutUserString,
    payload: axios.delete(API_HOST + '/auth/logout', {
      headers: {
        'x-access-token': 'Bearer ' + token,
      },
    }),
  };
};
