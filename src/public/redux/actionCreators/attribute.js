import {getCategoryString} from '../actionString';
import axios from 'axios';

const url = 'http://192.168.43.216:8000';

export const getCategories = () => {
  return {
    type: getCategoryString,
    payload: axios.get(url + '/category'),
  };
};
