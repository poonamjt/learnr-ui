import React from 'react';
import {shallow} from '../../enzyme'
import AdminComponent from "../../admin/AdminComponent";
import AdminHeader from "../../admin/AdminNavigationBar";

it('should render header',() => {
    const adminComponent = shallow(<AdminComponent/>)
    expect(adminComponent.find(AdminHeader).length).toBe(1);
});