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
