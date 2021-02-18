import {
  getActiveAddressString,
  getUserAddressString,
  addUserAddressString,
  updateUserAddressString,
  deleteUserAddressString,
} from '../actionString';
// import env from 'react-native-config';
import axios from 'axios';

// const url = 'http://localhost:8000';
const url = 'http://192.168.43.216:8000';
// const url = 'http://10.0.2.2:8000';
// const url = env.API_HOST;

export const getActiveAddress = (id, idAddress) => {
  return {
    type: getActiveAddressString,
    payload: axios.get(url + `/profile/address/${id}/${idAddress}`),
  };
};

export const getUserAddress = (id) => {
  return {
    type: getUserAddressString,
    payload: axios.get(url + `/attribute/address/${id}`),
  };
};

export const addUserAddress = (data) => {
  return {
    type: addUserAddressString,
    payload: axios.post(url + '/attribute/address', data),
  };
};

export const updateUserAddress = (id, data) => {
  return {
    type: updateUserAddressString,
    payload: axios.patch(url + '/attribute/address/' + id, data),
  };
};

export const deleteUserAddress = (id) => {
  return {
    type: deleteUserAddressString,
    payload: axios.delete(url + '/attribute/address/' + id),
  };
};
