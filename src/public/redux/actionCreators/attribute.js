import {
  getCategoriesString,
  getSizesString,
  getColorsString,
  getBrandsString,
} from '../actionString';
import axios from 'axios';
import {API_HOST} from '@env';

export const getCategories = () => {
  return {
    type: getCategoriesString,
    payload: axios.get(API_HOST + '/category'),
  };
};

export const getSizes = () => {
  return {
    type: getSizesString,
    payload: axios.get(API_HOST + '/attribute/sizes'),
  };
};

export const getColor = () => {
  return {
    type: getColorsString,
    payload: axios.get(API_HOST + '/attribute/colors'),
  };
};

export const getBrands = () => {
  return {
    type: getBrandsString,
    payload: axios.get(API_HOST + '/attribute/brands'),
  };
};
