// @ts-nocheck
import React, { useState } from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  CircularProgress,
  Alert,
  Fab,
  TextField,
  InputAdornment,
} from '@mui/material';
import { Add, Search } from '@mui/icons-material';
import type { User } from '../types/user.types';
import { useUserContext } from '../context/UserContext';
import UserCard from './UserCard';
import UserDetailsModal from './UserDetailsModal';
import UserFormModal from './UserFormModal';

const UserList: React.FC = () => {
  const { users, loading, error, setSelectedUser } = useUserContext();
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setDetailsModalOpen(true);
  };

  const handleCloseDetailsModal = () => {
    setDetailsModalOpen(false);
    setSelectedUser(null);
  };

  const handleAddUser = () => {
    setAddModalOpen(true);
  };

  const handleCloseAddModal = () => {
    setAddModalOpen(false);
  };

  const filteredUsers = users.filter(
    user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.company.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Show loading spinner while fetching users
  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  // Show error message if something went wrong
  if (error) {
    return (
      <Container sx={{ mt: 4 }}>
        <Alert severity="error">
          Oops! Something went wrong: {error}
        </Alert>
      </Container>
    );
  }

  return (
    <>
      <Container sx={{ py: 4 }}>
        {/* Page Header */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              mb: 1,
            }}
          >
            User Directory
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            sx={{ textAlign: 'center', mb: 3 }}
          >
            Explore and manage your users with ease
          </Typography>

          {/* Search Input */}
          <TextField
            fullWidth
            placeholder="Search by name, email, username, or company..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            sx={{
              maxWidth: 600,
              mx: 'auto',
              display: 'block',
            }}
          />
        </Box>

        {/* User Grid or Empty State */}
        {filteredUsers.length === 0 ? (
          <Alert severity="info" sx={{ textAlign: 'center', borderRadius: 2 }}>
            {searchQuery
              ? `No users found matching "${searchQuery}". Try a different search term.`
              : 'No users available at the moment.'}
          </Alert>
        ) : (
          <Grid 
            container 
            spacing={{ xs: 2, sm: 3, md: 4 }}
            sx={{
              px: { xs: 0, sm: 1 },
            }}
          >
            {filteredUsers.map(user => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={user.id}>
                <UserCard user={user} onClick={() => handleUserClick(user)} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>

      {/* Floating Action Button to Add New User */}
      <Fab
        color="primary"
        aria-label="add user"
        onClick={handleAddUser}
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          boxShadow: 3,
          '&:hover': {
            transform: 'scale(1.1)',
            transition: 'transform 0.2s',
          },
        }}
      >
        <Add />
      </Fab>

      <UserDetailsModal
        open={detailsModalOpen}
        onClose={handleCloseDetailsModal}
      />

      <UserFormModal
        open={addModalOpen}
        onClose={handleCloseAddModal}
        mode="add"
      />
    </>
  );
};

export default UserList;
