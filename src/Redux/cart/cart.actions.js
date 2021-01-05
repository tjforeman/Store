import CartDropdown from "../../Components/Cart/CartDropdown";
import CartActionTypes from "./cart.types";
import CardActionTypes from "./cart.types";

export const toggleCartHidden = () => ({
  type: CardActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CardActionTypes.REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CardActionTypes.CLEAR_CART,
});
