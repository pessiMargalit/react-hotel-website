import { combineReducers } from "redux";
import { roomsReducer } from "./roomsReducer";
import { cartReducer } from "./CartReducer";

export const allReducers = combineReducers(
    {
        roomsReducer:roomsReducer,
        cartReducer :cartReducer
    }
);