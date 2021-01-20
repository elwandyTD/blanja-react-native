import {
  getProductString,
  getProductNewString,
  getProductPopularString,
  getSingleProductString,
  getSellerProductString,
  pending,
  rejected,
  fulfilled,
} from '../actionString';

const initialState = {
  product: {},
  productPopular: {},
  productNew: {},
  singleProduct: {},
  seller: {},
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

    case getSingleProductString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulFilled: false,
      };
    case getSingleProductString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
      };
    case getSingleProductString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulFilled: true,
        singleProduct: action.payload.data,
      };

    case getSellerProductString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulFilled: false,
      };
    case getSellerProductString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
      };
    case getSellerProductString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulFilled: true,
        seller: action.payload.data,
      };

    default:
      return {
        ...prevState,
      };
  }
};

export default productReducer;
