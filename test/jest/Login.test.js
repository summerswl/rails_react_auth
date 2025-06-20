import React from 'react';
import {render, screen} from '@testing-library/react'
import Login from '../../src/components/Login.js'
import LoginAuth from "../../src/components/auth/LoginAuth.js";

// Component renders with Login title and LoginAuth subcomponent
it('should render Login title and LoginAuth component', () => {
    const mockHandleLogin = jest.fn();
    const mockHistory = { push: jest.fn() };

    render(
        <Login 
        handleLogin={mockHandleLogin}
        history={mockHistory}
        />
    );

    const element = screen.getAllByText('Login');
    // expect(element).toBeVisible();
    

    // expect(screen..findAllByLabelText('Login')..;
    // expect(wrapper.find(LoginAuth)).toHaveLength(1);
    // expect(wrapper.find(LoginAuth).prop('handleSuccessfulAuth')).toBeDefined();
    });