import {ToastAndroid} from 'react-native';

export const toastS = (msg) => {
  ToastAndroid.show(msg, ToastAndroid.SHORT);
};
