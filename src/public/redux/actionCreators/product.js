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
import {API_HOST} from '@env';

export const getProducts = (custom = '') => {
  return {
    type: getProductString,
    payload: axios.get(API_HOST + '/product' + custom),
  };
};

export const getSellerProducts = (id) => {
  return {
    type: getSellerProductString,
    payload: axios.get(API_HOST + '/product?user_id=' + id),
  };
};

export const getSingleProduct = (id) => {
  return {
    type: getSingleProductString,
    payload: axios.get(API_HOST + '/product/' + id),
  };
};

export const getProductPopulars = () => {
  return {
    type: getProductPopularString,
    payload: axios.get(API_HOST + '/product?order=popular'),
  };
};

export const getProductNews = () => {
  return {
    type: getProductNewString,
    payload: axios.get(API_HOST + '/product?order=newest&sort=desc'),
  };
};

export const postProduct = (data, token) => {
  return {
    type: postProductString,
    payload: axios.post(API_HOST + '/product', data, {
      headers: {
        'x-access-token': 'Bearer ' + token,
      },
    }),
  };
};
