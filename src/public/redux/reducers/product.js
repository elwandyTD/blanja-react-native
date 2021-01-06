import {
  getProductString,
  getProductNewString,
  getProductPopularString,
  pending,
  rejected,
  fulfilled,
} from '../actionString';

const initialState = {
  product: {},
  productPopular: {},
  productNew: {},
  singleProduct: {},
  isPending: false,
  isRejected: false,
  isFulFilled: false,
  err: {},
};

const productReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case getProductString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulFilled: false,
      };
    case getProductString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
      };
    case getProductString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulFilled: true,
        product: action.payload.data,
      };

    case getProductNewString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulFilled: false,
      };
    case getProductNewString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
      };
    case getProductNewString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulFilled: true,
        productNew: action.payload.data,
      };

    case getProductPopularString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulFilled: false,
      };
    case getProductPopularString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
      };
    case getProductPopularString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulFilled: true,
        productPopular: action.payload.data,
      };

    default:
      return {
        ...prevState,
      };
  }
};

export default productReducer;
