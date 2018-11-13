import thunkMiddleware from 'redux-thunk'
import {applyMiddleware, createStore} from "redux";
import employeeReducer from "../reducer/employeeReducer";

const store = createStore(employeeReducer, applyMiddleware(thunkMiddleware));

export default store;
