import { createStore } from "redux";
// import { createLogger } from 'redux-logger';
import reducer from "./reducers";

const store = createStore(
    reducer
);

export default store;