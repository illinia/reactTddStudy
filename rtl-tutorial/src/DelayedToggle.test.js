import React from 'react';
import DelayedToggle from './DelayedToggle';
import {
  render,
  fireEvent,
  waitFor,
  waitForDomChange,
  waitForElementToBeRemoved,
} from '@testing-library/react'

describe('<DelayedToggle />', () => {
  it('reveals text when toggle is ON', async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText('토글');
    fireEvent.click(toggleButton);
    await waitFor(() => getByText('야호!'), { timeout: 3000});
  });

  it('toggles text ON/OFF', async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText('토글');
    fireEvent.click(toggleButton);
    const text = await waitFor(() => getByText('ON'));
    expect(text).toHaveTextContent('ON')
  });

  it('changes something when button is clicked', async () => {
    const { getByText, container } = render(<DelayedToggle />);
    const toggleButton = getByText('토글');
    fireEvent.click(toggleButton);
    await waitForDomChange({ container });
  });

  it('removes text when toggl eis OFF', async () => {
    const { getByText, container } = render(<DelayedToggle />);
    const toggleButton = getByText('토글');
    fireEvent.click(toggleButton);
    await waitForDomChange({ container });
    getByText('야호!');
    fireEvent.click(toggleButton);
    await waitForElementToBeRemoved(() => getByText('야호!'))
  })
});
