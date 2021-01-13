import { combineReducers } from "redux";
import { storesReducer } from "./storesReducer";
import { typesReducer } from "./typesReducer";
import { itemsReducer } from "./itemsReducer";
import { uiReducer } from "./uiReducer";
import { usersReducer } from "./usersReducer";
import { commandsReducer } from "./commandsReducer";
import { cartReducer } from "./cartReducer";

export const rootReducer = combineReducers({
  stores: storesReducer,
  types: typesReducer,
  items: itemsReducer,
  ui: uiReducer,
  user: usersReducer,
  commands: commandsReducer,
  cart: cartReducer,
});
