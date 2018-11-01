import {ACTIONS} from "../common/constants";

export const addEmployee = (employee) => {

    console.log("inside action  ", employee);
  return {type: ACTIONS.ADD_EMPLOYEE, payload: employee};
};