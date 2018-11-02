import {createStore} from "redux";
import employeeReducer from "../reducer/employeeReducer";


const store = createStore(employeeReducer);

export default store;
