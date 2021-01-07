import {loginUserString, registerUserString} from '../actionString';
import axios from 'axios';

const url = process.env.REACT_APP_BASE_URL;

export const loginUser = (data) => {
  return {
    type: loginUserString,
    payload: axios.post(url + '/login/customer', data),
  };
};

export const registerUser = (data) => {
  return {
    type: registerUserString,
    payload: axios.post(url + '/register/customer', data),
  };
};
