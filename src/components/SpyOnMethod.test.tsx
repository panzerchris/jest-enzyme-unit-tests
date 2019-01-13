import React from 'react';
import { mount } from 'enzyme';
import SpyOnMethod from './SpyOnMethod';


it('Triggers handleClick spy when the button is clicked', () => {
    const wrapper = mount(<SpyOnMethod>This is a test</SpyOnMethod>);

    // We need to force a re-render after adding a spy because this is an arrow (bound) function
    // As an alternative, we could add it to the prototype. See SpyOnPrototypeMethod
    const spy = jest.spyOn(wrapper.instance() as any, 'handleClick');
    wrapper.instance().forceUpdate();
    wrapper.update(); 

    wrapper.find('button').simulate('click');
    expect(spy).toHaveBeenCalled();
});


it('Triggers handleClick mockFn when the button is clicked', () => {
    const wrapper = mount(<SpyOnMethod>This is a test</SpyOnMethod>);
    const mockFn = jest.fn();
    
    // We need to force a re-render after adding a spy because this is an arrow (bound) function
    // As an alternative, we could add it to the prototype. See SpyOnPrototypeMethod
    jest.spyOn(wrapper.instance() as any, 'handleClick').mockImplementation(mockFn);
    wrapper.instance().forceUpdate();
    wrapper.update(); 

    wrapper.find('button').simulate('click');
    expect(mockFn).toHaveBeenCalled();
});