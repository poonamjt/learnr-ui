import {addEmployee} from "../../actions/EmployeeAction";
import {ACTIONS} from "../../common/constants";


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
