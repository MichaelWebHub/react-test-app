import React from 'react';
import {shallow, ShallowWrapper} from 'enzyme';
import Navbar from './Navbar';

describe('Navbar component', () => {


    it('Should render without errors', () => {
        const component: ShallowWrapper = shallow(<Navbar />);
        const wrapper = component.find('.nav');

        expect(wrapper.length).toBe(1);
    });


});
