import {ACTIONS} from "../common/constants";

const initialState = {
  employee: {}
};

const employeeReducer = (state = initialState, action) => {

    switch (action.type) {
        case ACTIONS.ADD_EMPLOYEE: {
            const newState = {...state, employee: action.payload};
            return newState; }

        default:
            return state;
    }
};

export default employeeReducer;