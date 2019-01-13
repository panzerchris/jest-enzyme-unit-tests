import React from 'react';
import { mount } from 'enzyme';
import MockDependency from './MockDependency';

jest.mock("./HelloWorld", () => 'mock-hello-world'); 

it('passes the name to HelloWorld', () => {
    const wrapper = mount(<MockDependency name="john" />)
    expect(wrapper.find('mock-hello-world').props().name).toBe("john");
})