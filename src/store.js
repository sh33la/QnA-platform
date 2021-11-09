import { createStore } from "redux";
import { initialState } from "./reducers/initialState";
import { rootReducer } from "./reducers/rootReducer";

export const store = createStore(rootReducer,initialState)