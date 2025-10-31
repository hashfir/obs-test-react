import React, { createContext, useContext, useState, useEffect } from 'react';
import type { User } from '../types/user.types';
import { fetchUsers } from '../services/api.service';

interface UserContextType {
  users: User[];
  loading: boolean;
  error: string | null;
  addUser: (user: Omit<User, 'id'>) => void;
  updateUser: (id: number, user: Partial<User>) => void;
  deleteUser: (id: number) => void;
  selectedUser: User | null;
  setSelectedUser: (user: User | null) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within UserProvider');
  }
  return context;
};

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
      } catch (err) {
        setError('Failed to load users. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const addUser = (newUser: Omit<User, 'id'>) => {
    const maxId = users.length > 0 ? Math.max(...users.map(u => u.id)) : 0;
    const userWithId: User = {
      ...newUser,
      id: maxId + 1,
      imageUrl: `https://picsum.photos/seed/${maxId + 1}/200/200`,
    };
    setUsers(prevUsers => [...prevUsers, userWithId]);
  };

  const updateUser = (id: number, updatedData: Partial<User>) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === id ? { ...user, ...updatedData } : user
      )
    );
  };

  const deleteUser = (id: number) => {
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    if (selectedUser?.id === id) {
      setSelectedUser(null);
    }
  };

  const value: UserContextType = {
    users,
    loading,
    error,
    addUser,
    updateUser,
    deleteUser,
    selectedUser,
    setSelectedUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
