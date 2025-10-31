import type { User } from '../types/user.types';

// API configuration
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Fetches all users from the JSONPlaceholder API
 * and adds random profile images from Picsum Photos
 * @returns Promise<User[]> - Array of users with image URLs
 * @throws Error if the fetch fails
 */
export const fetchUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/users`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    
    const users: User[] = await response.json();

    // Enhance each user with a profile picture
    return users.map(user => ({
      ...user,
      imageUrl: `https://picsum.photos/seed/${user.id}/200/200`,
    }));
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};
