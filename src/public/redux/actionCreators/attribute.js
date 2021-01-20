import {
  getCategoriesString,
  getSizesString,
  getColorsString,
  getBrandsString,
} from '../actionString';
import axios from 'axios';

const url = 'http://192.168.43.216:8000';

export const getCategories = () => {
  return {
    type: getCategoriesString,
    payload: axios.get(url + '/category'),
  };
};

export const getSizes = () => {
  return {
    type: getSizesString,
    payload: axios.get(url + '/attribute/sizes'),
  };
};

export const getColor = () => {
  return {
    type: getColorsString,
    payload: axios.get(url + '/attribute/colors'),
  };
};

export const getBrands = () => {
  return {
    type: getBrandsString,
    payload: axios.get(url + '/attribute/brands'),
  };
};
