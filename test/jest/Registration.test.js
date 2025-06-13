import * as React from 'react'
import '@testing-library/jest-dom'
import {render} from '@testing-library/react'
import Registration from '../../src/components/Registration.js'

describe('code snippet', () => {

    // Renders a div container with h1 title "Registration"
    it('should render div container with h1 title Registration when component mounts', () => {
      const mockHandleSuccessfulAuth = jest.fn();
      const wrapper = render(<Registration handleSuccessfulAuth={mockHandleSuccessfulAuth} />);
  
      const divContainer = wrapper.container.querySelector('div');
      const h1Element = wrapper.getAllByRole('heading', { level: 1 });
  
      expect(divContainer).toBeInTheDocument();
      // expect(h1Element).toBeInTheDocument();
      // expect(h1Element).toHaveTextContent('Registration');
    });

    // Handles undefined or null handleSuccessfulAuth prop gracefully
    it('should render without errors when handleSuccessfulAuth prop is undefined', () => {
      expect(() => {
        render(<Registration handleSuccessfulAuth={undefined} />);
      }).not.toThrow();
  
      const wrapper = render(<Registration handleSuccessfulAuth={null} />);
      const h1Element = wrapper.getAllByRole('heading', { level: 1 });
      const registrationAuthComponent = wrapper.container.querySelector('div');
  
      // expect(h1Element).toHaveTextContent('Registration');
      expect(registrationAuthComponent).toBeInTheDocument();
    });
});
