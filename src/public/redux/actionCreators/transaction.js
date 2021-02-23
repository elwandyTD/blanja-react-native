import {postTransactionString} from '../actionString';
// import env from 'react-native-config';
import axios from 'axios';
import {API_HOST} from '@env';

export const postTransaction = (body) => {
  return {
    type: postTransactionString,
    payload: axios.post(API_HOST + '/history', body),
  };
};
