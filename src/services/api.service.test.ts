import { describe, it, expect, vi, beforeEach } from 'vitest';
import { fetchUsers } from '../services/api.service';

// Mock fetch
globalThis.fetch = vi.fn();

describe('API Service', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch users successfully', async () => {
    const mockUsers = [
      {
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
      },
    ];

    (globalThis.fetch as any).mockResolvedValueOnce({
      ok: true,
      json: async () => mockUsers,
    });

    const users = await fetchUsers();

    expect(fetch).toHaveBeenCalledWith(
      'https://jsonplaceholder.typicode.com/users'
    );
    expect(users).toHaveLength(1);
    expect(users[0]).toHaveProperty('imageUrl');
    expect(users[0].imageUrl).toContain('picsum.photos');
  });

  it('should throw error when fetch fails', async () => {
    (globalThis.fetch as any).mockResolvedValueOnce({
      ok: false,
    });

    await expect(fetchUsers()).rejects.toThrow('Failed to fetch users');
  });

  it('should handle network errors', async () => {
    (globalThis.fetch as any).mockRejectedValueOnce(new Error('Network error'));

    await expect(fetchUsers()).rejects.toThrow('Network error');
  });
});
