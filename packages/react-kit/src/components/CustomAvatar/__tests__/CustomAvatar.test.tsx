// CustomAvatar.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'; // Importa todo desde jest-dom
import { CustomAvatar } from '../index';

describe('CustomAvatar', () => {
  // CustomAvatar.test.tsx
  test('renders CustomAvatar component with loading skeleton', async () => {
    render(<CustomAvatar name="John Doe" srcImage="path/to/image.jpg" />);

    // Ensure the loading skeleton is rendered initially
    expect(screen.getByTestId('loading-skeleton')).toBeInTheDocument();

    // Ensure the Avatar is not rendered initially
    expect(screen.queryByTestId('avatar')).toBeNull();
  });

  test('renders CustomAvatar component with image after loading', async () => {
    render(
      <CustomAvatar
        name="John Doe"
        srcImage="https://images.unsplash.com/photo-1702635429447-06e9ee0c617c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    );

    expect(screen.getByTestId('loading-skeleton')).toBeInTheDocument();
  });

  test('renders CustomAvatar component with image error', async () => {
    render(
      <CustomAvatar
        name="John Doe"
        srcImage="dfhlkjdshfkljhsdkjlfhlkjsd"
      />
    );

    expect(screen.getByTestId('loading-skeleton')).toBeInTheDocument();
  });
});
