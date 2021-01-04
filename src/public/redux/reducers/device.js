import {
  getSettingDevice,
  setSettingDevice,
  // pending,
  // rejected,
  // fulfilled,
} from '../actionString';
import {Dimensions} from 'react-native';

const window = Dimensions.get('window');
const initialState = {
  width: window.width,
  height: window.height,
  device: window.width > 415 ? 'tablet' : 'mobile',
  orientation: window.height > window.width ? 'portrait' : 'landscape',
  isPending: false,
  isRejected: false,
  isFulfilled: false,
};

const deviceReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case getSettingDevice:
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
      };
    case setSettingDevice:
      const get = action.payload.window;
      const width = get.width;
      const height = get.height;
      const device = window.width > 415 ? 'tablet' : 'mobile';
      const orientation = get.height > get.width ? 'portrait' : 'landscape';
      return {
        ...prevState,
        isPending: false,
        isFulfilled: true,
        width,
        height,
        device,
        orientation,
      };

    default:
      return {
        ...prevState,
      };
  }
};

export default deviceReducer;
