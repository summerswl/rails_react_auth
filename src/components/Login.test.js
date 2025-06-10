import React from 'react'
import { shallow } from 'enzyme'

// Component renders with Login title and LoginAuth subcomponent
it('should render Login title and LoginAuth component', () => {
    const mockHandleLogin = jest.fn();
    const mockHistory = { push: jest.fn() };

    const wrapper = shallow(
        <Login 
        handleLogin={mockHandleLogin}
        history={mockHistory}
        />
    );

    expect(wrapper.find('h1').text()).toBe('Login');
    expect(wrapper.find(LoginAuth)).toHaveLength(1);
    expect(wrapper.find(LoginAuth).prop('handleSuccessfulAuth')).toBeDefined();
    });