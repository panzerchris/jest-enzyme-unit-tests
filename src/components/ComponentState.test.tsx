import React from 'react';
import { mount } from 'enzyme';
import ComponentState from './ComponentState';

it('has an h2 with the text elrond', () => {
    const wrapper = mount(<ComponentState />);
    expect(wrapper.find('h2').text()).toBe('elrond');
});

it('has an h2 with the state "arwen"', () => {
    const wrapper = mount(<ComponentState />);
    wrapper.setState({ title: 'arwen' });
    expect(wrapper.find('h2').text()).toBe('arwen');
});