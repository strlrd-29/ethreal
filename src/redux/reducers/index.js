import { combineReducers } from "redux";
import { storesReducer } from "./storesReducer";
import { typesReducer } from "./typesReducer";
import { itemsReducer } from "./itemsReducer";
import { uiReducer } from "./uiReducer";
import { userReducer } from "./userReducer";
import { commandsReducer } from "./commandsReducer";
import { cartReducer } from "./cartReducer";
import { usersReducer } from "./usersReducer";
import { discountsReducer } from "./discountsReducer";

export const rootReducer = combineReducers({
  stores: storesReducer,
  types: typesReducer,
  items: itemsReducer,
  ui: uiReducer,
  users: usersReducer,
  user: userReducer,
  commands: commandsReducer,
  cart: cartReducer,
  discounts: discountsReducer,
});
