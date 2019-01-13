import React from 'react';
import { mount } from 'enzyme';
import HelloWorldWarapper from './HelloWorldWrapper';

jest.mock("./HelloWorld", () => 'mock-hello-world'); 

it('passes the name to HelloWorld', () => {
    const wrapper = mount(<HelloWorldWarapper name="john" />)
    expect(wrapper.find('mock-hello-world').props().name).toBe("john");
})