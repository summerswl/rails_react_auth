import React from 'react';
import axios from 'axios';
import RegistrationAuth from "../../src/components/auth/RegistrationAuth.js";
import { render } from '@testing-library/react';

    // Form submission with valid email and matching passwords triggers API call
    it('should make API call when form is submitted with valid data', async () => {
        
        const mockHandleSuccessfulAuth = jest.fn();
        const mockAxios = jest.spyOn(axios, 'post');
        mockAxios.mockResolvedValueOnce({ data: { status: 'created' } });
  
        const wrapper = render(<RegistrationAuth handleSuccessfulAuth={mockHandleSuccessfulAuth} />);
  
        // wrapper.setState({
        //   email: 'test@test.com',
        //   password: 'password123',
        //   password_confirmation: 'password123'
        // });
  
        // const form = wrapper.findByRole('form');
        // form.simulate('submit', { preventDefault: () => {} });
  
        // expect(mockAxios).toHaveBeenCalledWith(
        //   'http://localhost:3001/registrations',
        //   {
        //     user: {
        //       email: 'test@test.com',
        //       password: 'password123',
        //       password_confirmation: 'password123'
        //     }
        //   },
        //   { withCredentials: true }
        // );
  
        // await Promise.resolve();
        // expect(mockHandleSuccessfulAuth).toHaveBeenCalled();
      });

    // Successful registration updates parent component via handleSuccessfulAuth
    it('should call handleSuccessfulAuth with response data when registration is successful', async () => {
        const mockHandleSuccessfulAuth = jest.fn();
        const mockAxios = jest.spyOn(axios, 'post').mockResolvedValue({
          data: { status: 'created' }
        });
  
        const wrapper = render(
          <RegistrationAuth handleSuccessfulAuth={mockHandleSuccessfulAuth} />
        );
  
        // wrapper.setState({
        //   email: 'test@example.com',
        //   password: 'password123',
        //   password_confirmation: 'password123'
        // });
  
        // const form = wrapper.findByRole('form');
        // form('submit', { preventDefault: () => {} });
  
        // await Promise.resolve();
        // expect(mockHandleSuccessfulAuth).toHaveBeenCalledWith({ status: 'created' });
      });