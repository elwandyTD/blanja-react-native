import {
  getProductString,
  getProductNewString,
  getProductPopularString,
  getSingleProductString,
  getSellerProductString,
  postProductString,
} from '../actionString';
// import env from 'react-native-config';
import axios from 'axios';

const url = 'http://192.168.43.216:8000';

export const getProducts = (custom = '') => {
  return {
    type: getProductString,
    payload: axios.get(url + '/product' + custom),
  };
};

export const getSellerProducts = (id) => {
  return {
    type: getSellerProductString,
    payload: axios.get(url + '/product?user_id=' + id),
  };
};

export const getSingleProduct = (id) => {
  return {
    type: getSingleProductString,
    payload: axios.get(url + '/product/' + id),
  };
};

export const getProductPopulars = () => {
  return {
    type: getProductPopularString,
    payload: axios.get(url + '/product?order=popular'),
  };
};

export const getProductNews = () => {
  return {
    type: getProductNewString,
    payload: axios.get(url + '/product?order=newest&sort=desc'),
  };
};

export const postProduct = (data, token) => {
  return {
    type: postProductString,
    payload: axios.post(url + '/product', data, {
      headers: {
        'x-access-token': 'Bearer ' + token,
      },
    }),
  };
};
