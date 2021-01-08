import {
  loginUserString,
  registerUserString,
  pending,
  rejected,
  fulfilled,
} from '../actionString';

const initialState = {
  login: {},
  register: {},
  isPending: false,
  isRejected: false,
  isFulFilled: false,
  err: {},
};

const authReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case loginUserString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulFilled: false,
      };
    case loginUserString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
      };
    case loginUserString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulFilled: true,
        login: action.payload.data,
      };

    case registerUserString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulFilled: false,
      };
    case registerUserString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
      };
    case registerUserString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulFilled: true,
        register: action.payload.data,
      };

    default:
      return {
        ...prevState,
      };
  }
};

export default authReducer;
