import {getCategoryString, pending, rejected, fulfilled} from '../actionString';

const initialState = {
  categories: {},
  isPending: false,
  isRejected: false,
  isFulFilled: false,
  err: {},
};

const authReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case getCategoryString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulFilled: false,
      };
    case getCategoryString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
      };
    case getCategoryString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulFilled: true,
        categories: action.payload.data,
      };

    default:
      return {
        ...prevState,
      };
  }
};

export default authReducer;
