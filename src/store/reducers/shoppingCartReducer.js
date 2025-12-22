
const getInitialCart = () => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    return JSON.parse(savedCart);
  }
  return [];
};

const initialState = {
  cart: getInitialCart(), 
};

export const shoppingCartReducer = (state = initialState, action) => {
  let newState; 

  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cart.find(
        (item) => item.product.id === action.payload.id
      );

      if (existingItem) {
        newState = {
          ...state,
          cart: state.cart.map((item) =>
            item.product.id === action.payload.id
              ? { ...item, count: item.count + 1 }
              : item
          ),
        };
      } else {
        newState = {
          ...state,
          cart: [
            ...state.cart,
            { count: 1, checked: true, product: action.payload },
          ],
        };
      }
      break;

    case "REMOVE_FROM_CART":
      newState = {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
      break;

    case "UPDATE_ITEM_COUNT":
      newState = {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload.productId
            ? { ...item, count: action.payload.count }
            : item
        ),
      };
      break;

    case "TOGGLE_CHECKBOX":
      newState = {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === action.payload
            ? { ...item, checked: !item.checked }
            : item
        ),
      };
      break;

    default:
      return state;
  }

 
  if (newState) {
    localStorage.setItem("cart", JSON.stringify(newState.cart));
    return newState;
  }

  return state;
};
