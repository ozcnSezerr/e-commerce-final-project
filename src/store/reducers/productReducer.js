import {
  SET_CATEGORIES,
  SET_PRODUCT_LIST,
  SET_TOTAL,
  SET_FETCH_STATE,
  SET_LIMIT,
  SET_OFFSET,
  SET_FILTER,
  SET_CATEGORY,
  SET_SORT,
  SET_CURRENT_PRODUCT,
} from "../actions/productActions";

const initialState = {
  productList: [],
  total: 0,
  limit: 24,
  offset: 0,
  fetchState: "NOT_FETCHED",
  categories: [],
  category: null,
  filter: "",
  sort: "",
  currentProduct: {},
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case SET_PRODUCT_LIST:
      return { ...state, productList: action.payload };
    case SET_TOTAL:
      return { ...state, total: action.payload };
    case SET_FETCH_STATE:
      return { ...state, fetchState: action.payload };
    case SET_LIMIT:
      return { ...state, limit: action.payload };
    case SET_OFFSET:
      return { ...state, offset: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload, offset: 0 };
    case SET_CATEGORY:
      return { ...state, category: action.payload, offset: 0 };
    case SET_SORT:
      return { ...state, sort: action.payload };

    case SET_CURRENT_PRODUCT:
      return { ...state, currentProduct: action.payload };

    default:
      return state;
  }
};
