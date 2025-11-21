// CustomIcoButton.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CustomIcoButton } from '../index';

describe('CustomIcoButton', () => {
  test('renders CustomIcoButton with disabled styles when disabled', () => {
    render(
      <CustomIcoButton
        type={'success'}
        icon="IconAtom"
        disabled={true}
        ariaLabel={'IconButtonAction'}
      />
    );

    const button = screen.getByLabelText('IconButtonAction');

    // Ensure disabled styles are applied
    expect(button).toHaveStyle({
      color: 'rgba(0, 0, 0, 0.26)',
      backgroundColor: 'transparent',
    });
  });

  test('calls handleAdd callback on button click', () => {
    const handleAddMock = jest.fn();
    render(
      <CustomIcoButton
        icon="IconAtom"
        onClick={handleAddMock}
        type={'success'}
        ariaLabel={'IconButtonAction'}
      />
    );

    const button = screen.getByLabelText('IconButtonAction');

    // Trigger button click
    fireEvent.click(button);

    // Ensure handleAdd callback is called
    expect(handleAddMock).toHaveBeenCalledTimes(1);
  });

  test('renders the type danger', () => {
    const { getByLabelText } = render(
      <CustomIcoButton icon="IconAtom" type={'danger'} ariaLabel={'IconButtonAction'} />
    );

    const button = getByLabelText('IconButtonAction');

    expect(button).toBeInTheDocument();
  });

  test('renders the type default', () => {
    const { getByLabelText } = render(
      <CustomIcoButton icon="IconAudio" type={'default'} ariaLabel={'IconButtonAction'} />
    );

    const button = getByLabelText('IconButtonAction');

    expect(button).toBeInTheDocument();
  });
});
