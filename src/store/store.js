import thunkMiddleware from 'redux-thunk'
import {applyMiddleware, createStore} from "redux";
import employeeReducer from "../reducer/employeeReducer";
import rootReducer from "./rootReducer";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;
