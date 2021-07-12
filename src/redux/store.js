import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducers from "./reducers";



const initialStore = {};
const middleware = [thunk];

export const store = createStore(
    rootReducers,
    initialStore,
    composeWithDevTools(applyMiddleware(...middleware))
);