import { axiosInstance } from "../../api/axiosInstance";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";
export const SET_CATEGORY = "SET_CATEGORY";
export const SET_SORT = "SET_SORT";

export const SET_CURRENT_PRODUCT = "SET_CURRENT_PRODUCT";

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});
export const setProductList = (productList) => ({
  type: SET_PRODUCT_LIST,
  payload: productList,
});
export const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});
export const setLimit = (limit) => ({ type: SET_LIMIT, payload: limit });
export const setOffset = (offset) => ({ type: SET_OFFSET, payload: offset });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
export const setCategory = (categoryId) => ({
  type: SET_CATEGORY,
  payload: categoryId,
});
export const setSort = (sort) => ({ type: SET_SORT, payload: sort });

export const setCurrentProduct = (product) => ({
  type: SET_CURRENT_PRODUCT,
  payload: product,
});

export const fetchCategories = () => (dispatch) => {
  axiosInstance
    .get("/categories")
    .then((res) => dispatch(setCategories(res.data)))
    .catch((err) => console.error("Kategoriler hatası:", err));
};

export const fetchProducts = () => (dispatch, getState) => {
  const { limit, offset, category, filter, sort } = getState().product;
  dispatch(setFetchState("FETCHING"));

  const params = { limit, offset };
  if (category) params.category = category;
  if (filter) params.filter = filter;
  if (sort) params.sort = sort;

  axiosInstance
    .get("/products", { params })
    .then((res) => {
      dispatch(setProductList(res.data.products));
      dispatch(setTotal(res.data.total));
      dispatch(setFetchState("FETCHED"));
    })
    .catch((err) => {
      console.error("Hata:", err);
      dispatch(setFetchState("FAILED"));
    });
};

// --- product detail ---
export const fetchProduct = (productId) => (dispatch) => {
  dispatch(setFetchState("FETCHING"));
  dispatch(setCurrentProduct({}));

  axiosInstance
    .get(`/products/${productId}`)
    .then((res) => {
      dispatch(setCurrentProduct(res.data));
      dispatch(setFetchState("FETCHED"));
    })
    .catch((err) => {
      console.error("Ürün detay hatası:", err);
      dispatch(setFetchState("FAILED"));
    });
};
