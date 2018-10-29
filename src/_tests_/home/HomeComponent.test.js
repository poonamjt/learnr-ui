import React from 'react';
import {shallow} from '../../enzyme';
import HomeComponent from "../../home/HomeComponent";

xit('should redirect to admin page when role is admin', () =>{

    const employee = {id: "testId", name: "testUser", role: "admin"};

    const mockResponse = {
        json: jest.fn()
    };

    const mockHistory = {
        push: jest.fn()
    };

    fetch = jest.fn();
    fetch.mockReturnValueOnce(Promise.resolve(mockResponse));
    mockResponse.json.mockReturnValueOnce(Promise.resolve(employee));


    let shallow1 = shallow(<HomeComponent history={mockHistory} />);



    expect(mockHistory.push.mock.calls[0]).toEqual("");


});