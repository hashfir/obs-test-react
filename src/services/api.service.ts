import type { User } from '../types/user.types';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const users: User[] = await response.json();

    // Add random profile pictures from picsum.photos
    return users.map(user => ({
      ...user,
      imageUrl: `https://picsum.photos/seed/${user.id}/200/200`,
    }));
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
