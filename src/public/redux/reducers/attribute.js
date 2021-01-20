import {
  getCategoriesString,
  getSizesString,
  getBrandsString,
  getColorsString,
  pending,
  rejected,
  fulfilled,
} from '../actionString';

const initialState = {
  categories: {},
  colors: {},
  sizes: {},
  brands: {},
  isPending: false,
  isRejected: false,
  isFulFilled: false,
  err: {},
};

const authReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case getCategoriesString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulFilled: false,
      };
    case getCategoriesString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
      };
    case getCategoriesString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulFilled: true,
        categories: action.payload.data,
      };

    case getSizesString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulFilled: false,
      };
    case getSizesString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
      };
    case getSizesString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulFilled: true,
        sizes: action.payload.data,
      };

    case getColorsString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulFilled: false,
      };
    case getColorsString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
      };
    case getColorsString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulFilled: true,
        colors: action.payload.data,
      };

    case getBrandsString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulFilled: false,
      };
    case getBrandsString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
      };
    case getBrandsString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulFilled: true,
        brands: action.payload.data,
      };

    default:
      return {
        ...prevState,
      };
  }
};

export default authReducer;
