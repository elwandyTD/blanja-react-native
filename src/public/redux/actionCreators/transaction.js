import {postTransactionString} from '../actionString';
// import env from 'react-native-config';
import axios from 'axios';

const url = 'http://192.168.43.216:8000';

export const postTransaction = (body) => {
  return {
    type: postTransactionString,
    payload: axios.post(url + '/history', body),
  };
};
