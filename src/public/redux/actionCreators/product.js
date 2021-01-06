import {
  getProductString,
  getProductNewString,
  getProductPopularString,
} from '../actionString';
import axios from 'axios';

const url = process.env.REACT_APP_BASE_URL;

export const getProduct = (custom = '') => {
  return {
    type: getProductString,
    payload: axios.get(url + '/product' + custom),
  };
};

export const getProductPopular = () => {
  return {
    type: getProductPopularString,
    payload: axios.get(url + '/product?order=popular&sort=asc'),
  };
};

export const getProductNew = () => {
  return {
    type: getProductNewString,
    payload: axios.get(url + '/product?order=newest&sort=asc'),
  };
};
