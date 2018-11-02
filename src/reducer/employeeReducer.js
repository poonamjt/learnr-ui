import {ACTIONS} from "../common/constants";

const initialState = {
  employee: {}
};

const employeeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTIONS.ADD_EMPLOYEE: {
            return {...state, employee: action.payload}; }

        default:
            return state;
    }
};


export default employeeReducer;