import React from 'react';
import { mount } from 'enzyme';
import SpyOnMethodPrototype from './SpyOnMethodPrototype';


describe('Spy on the prototype', () => {
    let spy: ReturnType<typeof jest.spyOn>;

    beforeAll(() => {
        spy = jest.spyOn(SpyOnMethodPrototype.prototype, 'handleClick');
    });

    afterAll(() => {
        spy.mockRestore();
    })

    beforeEach(() => {
        spy.mockClear();
    });
    
    it('Triggers handleClick spy when the button is clicked', () => {
        const wrapper = mount(<SpyOnMethodPrototype>This is a test</SpyOnMethodPrototype>);
        wrapper.find('button').simulate('click');
        expect(spy).toHaveBeenCalled();
    });
    
    it('allows the spy to be reset between assetions', () => {
        const wrapper = mount(<SpyOnMethodPrototype>This is a test</SpyOnMethodPrototype>);
        wrapper.find('button').simulate('click');
        expect(spy).toHaveBeenCalledTimes(1);
    })
});

describe('After the prototype is restored', () => {
    it('has no mock on the method', () => {
        const wrapper = mount(<SpyOnMethodPrototype>This is a test</SpyOnMethodPrototype>);
        const instance = wrapper.instance() as any;
        expect(instance.handleClick.mock).toBeUndefined();
    });
})