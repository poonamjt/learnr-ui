import {ACTIONS} from "../common/constants";
import { getEmployee } from '../client/EmployeeClient';

export const addEmployee = (employee) => {
    console.log("inside add Employee actions");

  return { type: ACTIONS.ADD_EMPLOYEE, payload: employee };
};

export const fetchEmployee = (id) => {
    console.log("inside actions");
  return (dispatch) => {
     return getEmployee(id)
              .then( employeeData => dispatch(addEmployee(employeeData)) );
    };
};