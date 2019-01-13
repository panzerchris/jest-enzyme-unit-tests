import React from 'react';
import { mount } from 'enzyme';
import ExpectToMatchObject from './ExpectToMatchObject';

const options = ['Club', 'Diamond', 'Heart', 'Spade'];
const handleClick = jest.fn();

it('matches the expected prop types', () => {
    const wrapper = mount(<ExpectToMatchObject options={options} handleClick={handleClick} />);
    expect(wrapper.props()).toMatchObject({
        options: expect.any(Array),
        handleClick: expect.any(Function),
    });
});

it('matches the exact props passed in', () => {
    const wrapper = mount(<ExpectToMatchObject options={options} handleClick={handleClick} />);
    expect(wrapper.props()).toMatchObject({ options, handleClick });
})