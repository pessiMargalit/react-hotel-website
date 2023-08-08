import {createStore} from"redux";
import { allReducers } from "./reducers/allReducer";
export const store = createStore(
allReducers
);
store.getState();