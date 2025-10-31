import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { UserProvider, useUserContext } from '../context/UserContext';

// Mock the API service
vi.mock('../services/api.service', () => ({
  fetchUsers: vi.fn(() =>
    Promise.resolve([
      {
        id: 1,
        name: 'Test User',
        username: 'testuser',
        email: 'test@example.com',
        phone: '123-456-7890',
        website: 'test.com',
        address: {
          street: 'Test St',
          suite: 'Apt 1',
          city: 'Test City',
          zipcode: '12345',
          geo: { lat: '0', lng: '0' },
        },
        company: {
          name: 'Test Company',
          catchPhrase: 'Test Phrase',
          bs: 'Test BS',
        },
        imageUrl: 'https://picsum.photos/200',
      },
    ])
  ),
}));

// Test component to access context
function TestComponent() {
  const { users, loading, addUser, updateUser, deleteUser } = useUserContext();

  return (
    <div>
      <div data-testid="loading">{loading.toString()}</div>
      <div data-testid="user-count">{users.length}</div>
      {users.map(user => (
        <div key={user.id} data-testid={`user-${user.id}`}>
          {user.name}
        </div>
      ))}
      <button
        onClick={() =>
          addUser({
            name: 'New User',
            username: 'newuser',
            email: 'new@example.com',
            phone: '111-222-3333',
            website: 'new.com',
            address: {
              street: 'New St',
              suite: 'Apt 2',
              city: 'New City',
              zipcode: '54321',
              geo: { lat: '0', lng: '0' },
            },
            company: {
              name: 'New Company',
              catchPhrase: 'New Phrase',
              bs: 'New BS',
            },
          })
        }
      >
        Add User
      </button>
      <button onClick={() => updateUser(1, { name: 'Updated User' })}>
        Update User
      </button>
      <button onClick={() => deleteUser(1)}>Delete User</button>
    </div>
  );
}

describe('UserContext', () => {
  it('should provide users from API', async () => {
    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    );

    // Initially loading
    expect(screen.getByTestId('loading').textContent).toBe('true');

    // Wait for users to load
    await waitFor(() => {
      expect(screen.getByTestId('loading').textContent).toBe('false');
    });

    expect(screen.getByTestId('user-count').textContent).toBe('1');
    expect(screen.getByTestId('user-1')).toHaveTextContent('Test User');
  });

  it('should add a new user', async () => {
    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading').textContent).toBe('false');
    });

    const addButton = screen.getByText('Add User');
    addButton.click();

    await waitFor(() => {
      expect(screen.getByTestId('user-count').textContent).toBe('2');
    });
  });

  it('should update a user', async () => {
    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading').textContent).toBe('false');
    });

    const updateButton = screen.getByText('Update User');
    updateButton.click();

    await waitFor(() => {
      expect(screen.getByTestId('user-1')).toHaveTextContent('Updated User');
    });
  });

  it('should delete a user', async () => {
    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>
    );

    await waitFor(() => {
      expect(screen.getByTestId('loading').textContent).toBe('false');
    });

    expect(screen.getByTestId('user-count').textContent).toBe('1');

    const deleteButton = screen.getByText('Delete User');
    deleteButton.click();

    await waitFor(() => {
      expect(screen.getByTestId('user-count').textContent).toBe('0');
    });
  });
});
