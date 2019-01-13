import React from 'react';
import { mount } from 'enzyme';
import ComponentProps from './ComponentProps';

const nameTests = [
    'jane',
    'john'
];


it.each(nameTests)('has an h2 with the text %s', (name) => {
    const wrapper = mount(<ComponentProps title={name} message="hello world" />)
    expect(wrapper.find('h2').text()).toBe(name);
})

it('updates the title if the title prop changes', () => {
    const wrapper = mount(<ComponentProps title={"jane"} message="hello world" />)
    expect(wrapper.find('h2').text()).toBe("jane");

    // Update the title
    wrapper.setProps({ title: 'james' });
    expect(wrapper.find('h2').text()).toBe("james");
})