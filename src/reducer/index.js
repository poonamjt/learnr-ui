import {ACTIONS} from "../common/constants";

const initialState = {
  employee: {}
};

const rootReducer = (state = initialState, action) => {
    console.log("inside reducer. Action ", action);
    switch (action.type) {
        case ACTIONS.ADD_EMPLOYEE: {
            console.log("inside reducer");
            return {...state, employee: action.payload}; }

        default:
            return state;
    }
};


export default rootReducer;