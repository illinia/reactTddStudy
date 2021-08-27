import React from 'react';
import { render } from '@testing-library/react';
import Profile from './Profile';

describe('<Profile />', () => {
  it('matches snapshot', () => {
    const utils = render(<Profile username="test" name="test1" />)
    expect(utils.container).toMatchSnapshot();
  });
  it('shows the props correctly', () => {
    const utils = render(<Profile username="test" name="test1" />);
    utils.getByText('test');
    // utils.getByText('test1');
    // utils.getByText(/te/);
  });
});