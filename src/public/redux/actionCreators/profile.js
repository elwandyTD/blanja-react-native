import {
  getActiveAddressString,
  getUserAddressString,
  addUserAddressString,
  updateUserAddressString,
  deleteUserAddressString,
} from '../actionString';
// import env from 'react-native-config';
import axios from 'axios';
import {API_HOST} from '@env';

export const getActiveAddress = (id, idAddress) => {
  return {
    type: getActiveAddressString,
    payload: axios.get(API_HOST + `/profile/address/${id}/${idAddress}`),
  };
};

export const getUserAddress = (id) => {
  return {
    type: getUserAddressString,
    payload: axios.get(API_HOST + `/attribute/address/${id}`),
  };
};

export const addUserAddress = (data) => {
  return {
    type: addUserAddressString,
    payload: axios.post(API_HOST + '/attribute/address', data),
  };
};

export const updateUserAddress = (id, data) => {
  return {
    type: updateUserAddressString,
    payload: axios.patch(API_HOST + '/attribute/address/' + id, data),
  };
};

export const deleteUserAddress = (id) => {
  return {
    type: deleteUserAddressString,
    payload: axios.delete(API_HOST + '/attribute/address/' + id),
  };
};
