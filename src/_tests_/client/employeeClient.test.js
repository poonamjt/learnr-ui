import React from 'react';

import {getEmployees, getEmployee} from '../../client/employeeClient';

    it("should fetch all employees data", async (done) => {
        const employees = [{
            id: "1",
            name: "testUser"
        }];

        const response = {
            json: jest.fn()
        };

         fetch = jest.fn();
         fetch.mockReturnValueOnce(Promise.resolve(response));
         response.json.mockReturnValueOnce(Promise.resolve(employees));


        await getEmployees()
            .then((actualEmployee) => {
               expect("1").toEqual(actualEmployee.employees[0].id);
               expect("testUser").toEqual(actualEmployee.employees[0].name);
                 done();
            })
             .catch(done)


    });

it("should fetch employee data", async (done) => {
    const employee = {
        id: "1",
        name: "testUser"
    };

    const response = {
        json: jest.fn()
    };

    fetch = jest.fn();
    fetch.mockReturnValueOnce(Promise.resolve(response));
    response.json.mockReturnValueOnce(Promise.resolve(employee));


    await getEmployee("1")
        .then((actualEmployee) => {
            expect("1").toEqual(actualEmployee.id);
            expect("testUser").toEqual(actualEmployee.name);
            done();
        })
        .catch(done)


});

