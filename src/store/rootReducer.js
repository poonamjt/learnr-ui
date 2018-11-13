import { combineReducers } from 'redux';
import employeeReducer from "../reducer/employeeReducer";
import trainingReducer from "../reducer/trainingReducer";
const rootReducer = combineReducers({
    employeeReducer,
    trainingReducer

});

export default rootReducer;