import React from 'react';
import { mount } from 'enzyme';
import AlertDialog from './AlertDialog';


it('Triggers handleClick when the button is clicked', () => {
    const wrapper = mount(<AlertDialog>This is a test</AlertDialog>);
    const mockFn = jest.fn();

    // Update wrapper after adding a spy, because we need to re-render
    jest.spyOn(wrapper.instance() as any, 'handleClick').mockImplementation(mockFn);
    wrapper.instance().forceUpdate();
    wrapper.update(); 

    wrapper.find('button').simulate('click');
    expect(mockFn).toHaveBeenCalled();
});