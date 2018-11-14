import {ACTIONS} from "../common/constants";
import { getTrainings } from '../client/EmployeeClient';

export const addTrainings = (trainings) =>{
    return {type: ACTIONS.ADD_TRAININGS, payload: trainings}
}

export const fetchTraining = ()=> {
    return (dispatch) =>{
        return getTrainings()
            .then(trainingData => {
                dispatch(addTrainings(trainingData.trainings))})
    }
}

// export const fetchTraining = ()=> {
//     return (dispatch) =>{
//         return getTrainings()
//             .then(trainingData => {
//                 dispatch(addTrainings(trainingData))})
//     }
// }