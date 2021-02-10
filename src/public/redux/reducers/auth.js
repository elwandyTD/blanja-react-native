import {
  loginUserString,
  registerUserString,
  forgotPassString,
  resetPassString,
  logoutUserString,
  getOtpString,
  pending,
  rejected,
  fulfilled,
} from '../actionString';

const initialState = {
  login: {},
  logout: {},
  register: {},
  forgot: {},
  reset: {},
  otp: {},
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

    case forgotPassString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulFilled: false,
      };
    case forgotPassString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
      };
    case forgotPassString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulFilled: true,
        forgot: action.payload.data,
      };

    case getOtpString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulFilled: false,
      };
    case getOtpString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
      };
    case getOtpString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulFilled: true,
        otp: action.payload.data,
      };

    case resetPassString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulFilled: false,
      };
    case resetPassString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
      };
    case resetPassString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulFilled: true,
        reset: action.payload.data,
      };

    case logoutUserString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulFilled: false,
      };
    case logoutUserString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
      };
    case logoutUserString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulFilled: true,
        logout: action.payload.data,
      };

    default:
      return {
        ...prevState,
      };
  }
};

export default authReducer;
