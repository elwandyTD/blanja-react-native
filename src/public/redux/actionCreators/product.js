import {
  getProductString,
  getProductNewString,
  getProductPopularString,
} from '../actionString';
// import env from 'react-native-config';
import axios from 'axios';

// const url = 'http://localhost:8000';
const url = 'http://192.168.43.216:8000';
// const url = 'http://10.0.2.2:8000';
// const url = env.API_HOST;

export const getProducts = (custom = '') => {
  return {
    type: getProductString,
    payload: axios.get(url + '/product' + custom),
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
