
import React from 'react';
import App from '../App';
import {shallow} from "../enzyme";

it('renders without crashing', () => {
    let appComponent = shallow(<App />);

    expect(appComponent.find('.App').length).toBe(1)
});