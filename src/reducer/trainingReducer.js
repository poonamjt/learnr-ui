import {ACTIONS} from "../common/constants";

const initialState = {
    trainings:{}
};

const trainingReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ACTIONS.ADD_TRAININGS : {
            const newState = {...state, trainings: action.payload};
            console.log("@@@@@@@@",newState);
            return newState;
        }

        default : return state;

    }
};

export default trainingReducer;

