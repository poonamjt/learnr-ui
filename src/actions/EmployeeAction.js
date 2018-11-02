import {ACTIONS} from "../common/constants";

export const addEmployee = (employee) => {

  return { type: ACTIONS.ADD_EMPLOYEE, payload: employee };
};