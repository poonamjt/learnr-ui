import employeeReducer from '../../reducer/employeeReducer';
import {ACTIONS} from "../../common/constants";

it('should return initial state', () => {
    const initialState = {
        employee: {}
    };

    const newState = employeeReducer(initialState, {});

    expect(newState).toEqual(initialState);
});


it('should return state with employee data', () => {
    const prevState = {
        employee:{ name: "testUser1" }
    };


    const addEmployeeAction = {
        type: ACTIONS.ADD_EMPLOYEE,
        payload: {name: "newUser", id: 12, role: "trainer"}
    };

    const newState = employeeReducer(prevState, addEmployeeAction);

    expect(newState).toEqual({employee: {name: "newUser", id: 12, role: "trainer"}});
});