import {ACTIONS} from "../common/constants";
import { getEmployee } from '../client/EmployeeClient';

export const addEmployee = (employee) => {
  return { type: ACTIONS.ADD_EMPLOYEE, payload: employee };
};

export const fetchEmployee = (id) => {
  return (dispatch) => {
     return getEmployee(id)
              .then( employeeData => dispatch(addEmployee(employeeData)) );
    };
};