import {
  getActiveAddressString,
  getUserAddressString,
  addUserAddressString,
  deleteUserAddressString,
  updateUserAddressString,
  pending,
  rejected,
  fulfilled,
} from '../actionString';

const initialState = {
  address: {},
  active: {},
  insert: {},
  udpate: {},
  remove: {},
  isPending: false,
  isRejected: false,
  isFulFilled: false,
  err: {},
};

const profileReducer = (prevState = initialState, action) => {
  switch (action.type) {
    case getActiveAddressString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulFilled: false,
      };
    case getActiveAddressString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
      };
    case getActiveAddressString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulFilled: true,
        active: action.payload.data,
      };

    case getUserAddressString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulFilled: false,
      };
    case getUserAddressString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
      };
    case getUserAddressString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulFilled: true,
        address: action.payload.data,
      };

    case addUserAddressString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulFilled: false,
      };
    case addUserAddressString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
      };
    case addUserAddressString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulFilled: true,
        insert: action.payload.data,
      };

    case updateUserAddressString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulFilled: false,
      };
    case updateUserAddressString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
      };
    case updateUserAddressString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulFilled: true,
        update: action.payload.data,
      };

    case deleteUserAddressString + pending:
      return {
        ...prevState,
        isPending: true,
        isRejected: false,
        isFulFilled: false,
      };
    case deleteUserAddressString + rejected:
      return {
        ...prevState,
        isPending: false,
        isRejected: true,
        err: action.payload.data,
      };
    case deleteUserAddressString + fulfilled:
      return {
        ...prevState,
        isPending: false,
        isFulFilled: true,
        remove: action.payload.data,
      };

    default:
      return {
        ...prevState,
      };
  }
};

export default profileReducer;
