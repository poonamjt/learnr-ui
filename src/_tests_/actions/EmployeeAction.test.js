import {addEmployee, fetchEmployee} from "../../actions/EmployeeAction";
import {ACTIONS} from "../../common/constants";
import fetchMock from "fetch-mock";
import configureMockStore from 'redux-mock-store'
import thunk from "redux-thunk";

const mockStore = configureMockStore([thunk]);

fetchMock.restore();

it("should create an action to add employee", () => {

    const employee = {
      name: "testUser",
      role: "admin"
    };

    const expectedAction = {
        type: ACTIONS.ADD_EMPLOYEE,
        payload: employee
    };
    
    let addEmployeeAction = addEmployee(employee);

    expect(addEmployeeAction).toEqual(expectedAction);
});


it("should call addEmployee action on fetchEmployee action", () =>{

    const userId = "userId";
    fetchMock.getOnce(`/employees/${userId}`, {body:{employee:{
                name: "testUser",
                role: "admin"
            }}});

    const expectedActions = [
        {type: ACTIONS.ADD_EMPLOYEE,
            payload: {
            employee: {
                name: "testUser",
                role: "admin"}}
    }];

    const store = mockStore({ employee: {} });

    return store.dispatch(fetchEmployee(userId)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
    })

});
