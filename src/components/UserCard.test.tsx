import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import UserCard from '../components/UserCard';
import type { User } from '../types/user.types';

const mockUser: User = {
  id: 1,
  name: 'John Doe',
  username: 'johndoe',
  email: 'john@example.com',
  phone: '123-456-7890',
  website: 'johndoe.com',
  address: {
    street: 'Main St',
    suite: 'Apt 1',
    city: 'New York',
    zipcode: '10001',
    geo: { lat: '0', lng: '0' },
  },
  company: {
    name: 'Acme Corp',
    catchPhrase: 'Innovation at its best',
    bs: 'synergize solutions',
  },
  imageUrl: 'https://picsum.photos/200',
};

describe('UserCard', () => {
  it('should render user information', () => {
    const onClick = vi.fn();
    render(<UserCard user={mockUser} onClick={onClick} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('@johndoe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
    expect(screen.getByText('123-456-7890')).toBeInTheDocument();
    expect(screen.getByText('Acme Corp')).toBeInTheDocument();
    expect(screen.getByText('New York')).toBeInTheDocument();
  });

  it('should call onClick when card is clicked', () => {
    const onClick = vi.fn();
    render(<UserCard user={mockUser} onClick={onClick} />);

    const card = screen.getByText('John Doe').closest('button');
    card?.click();

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
