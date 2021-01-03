import {getSettingDevice, setSettingDevice} from '../actionString';

export const getSetting = () => {
  return {
    type: getSettingDevice,
  };
};

export const updateTest = (window) => {
  return {
    type: setSettingDevice,
    payload: {window},
  };
};
