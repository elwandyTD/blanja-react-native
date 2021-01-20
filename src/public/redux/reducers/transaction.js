import {
  postTransactionString,
  pending,
  rejected,
  fulfilled,
} from '../actionString';

const initialState = {
  post: {},
  isPending: false,
  isRejected: false,
  isFulFilled: false,
  err: {},
};

const transactionReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case postTransactionString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulFilled: false,
      };
    case postTransactionString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
      };
    case postTransactionString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulFilled: true,
        post: action.payload.data,
      };

    default:
      return {
        ...prevState,
      };
  }
};

export default transactionReducer;
