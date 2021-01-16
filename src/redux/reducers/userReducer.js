import {
  SET_USER,
  SET_AUTHONTICATED,
  SET_UNAUTHONTIFICATED,
  LOADING_USER,
  SET_STORES,
  SET_TYPES,
  SET_WEBSITE,
  SET_ITEMS,
} from "../types";

const initialState = {
  authonticated: false,
  loading: false,
  userData: {},
  websiteData: {},

  storesData: [],
  typesData: [],
  itemsData: {},
  panelData: [
    [
      "https://firebasestorage.googleapis.com/v0/b/ethereal-226d2.appspot.com/o/no-image-item.png?alt=media",
      "romaan",
      3,
      2000,
    ],

    [
      "https://firebasestorage.googleapis.com/v0/b/ethereal-226d2.appspot.com/o/no-image-item.png?alt=media",
      "batata",
      4,
      3000,
    ],

    [
      "https://firebasestorage.googleapis.com/v0/b/ethereal-226d2.appspot.com/o/no-image-item.png?alt=media",
      "batikh",
      5,
      5000,
    ],
    [
      "https://firebasestorage.googleapis.com/v0/b/ethereal-226d2.appspot.com/o/no-image-item.png?alt=media",
      "jazar",
      6,
      2200,
    ],
    [
      "https://firebasestorage.googleapis.com/v0/b/ethereal-226d2.appspot.com/o/no-image-item.png?alt=media",
      "dala3",
      7,
      4200,
    ],
  ],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTHONTICATED:
      return {
        ...state,
        authenticated: true,
      };

    case SET_UNAUTHONTIFICATED:
      return {
        ...state,
        authenticated: false,
      };

    case SET_USER:
      return {
        ...state,
        authenticated: true,
        loading: false,
        userData: action.payload,
      };

    case LOADING_USER:
      return {
        loading: true,
        ...state,
      };

    case SET_WEBSITE:
      return {
        ...state,
        loading: false,
        websiteData: action.payload,
      };

    case SET_STORES:
      return {
        ...state,
        loading: false,
        storesData: action.payload,
      };

    case SET_TYPES:
      return {
        ...state,
        loading: false,
        typesData: action.payload,
      };

    case SET_ITEMS:
      return {
        ...state,
        loading: false,
        itemsData: action.payload,
      };

    default:
      return state;
  }
}
