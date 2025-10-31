// @ts-nocheck
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Box,
  Grid,
  IconButton,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import type { User, UserFormData } from '../types/user.types';
import { useUserContext } from '../context/UserContext';

interface UserFormModalProps {
  open: boolean;
  onClose: () => void;
  user?: User;
  mode: 'add' | 'edit';
}

const UserFormModal: React.FC<UserFormModalProps> = ({
  open,
  onClose,
  user,
  mode,
}) => {
  const { addUser, updateUser } = useUserContext();
  const [formData, setFormData] = useState<UserFormData>({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
    street: '',
    suite: '',
    city: '',
    zipcode: '',
    companyName: '',
    catchPhrase: '',
    bs: '',
  });

  useEffect(() => {
    if (user && mode === 'edit') {
      setFormData({
        name: user.name,
        username: user.username,
        email: user.email,
        phone: user.phone,
        website: user.website,
        street: user.address.street,
        suite: user.address.suite,
        city: user.address.city,
        zipcode: user.address.zipcode,
        companyName: user.company.name,
        catchPhrase: user.company.catchPhrase,
        bs: user.company.bs,
      });
    } else {
      setFormData({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: '',
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        companyName: '',
        catchPhrase: '',
        bs: '',
      });
    }
  }, [user, mode, open]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const userData: Omit<User, 'id'> = {
      name: formData.name,
      username: formData.username,
      email: formData.email,
      phone: formData.phone,
      website: formData.website,
      address: {
        street: formData.street,
        suite: formData.suite,
        city: formData.city,
        zipcode: formData.zipcode,
        geo: { lat: '0', lng: '0' },
      },
      company: {
        name: formData.companyName,
        catchPhrase: formData.catchPhrase,
        bs: formData.bs,
      },
    };

    if (mode === 'edit' && user) {
      updateUser(user.id, userData);
    } else {
      addUser(userData);
    }

    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: { borderRadius: 2 },
      }}
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle sx={{ m: 0, p: 2, pr: 6 }}>
          {mode === 'edit' ? 'Edit User' : 'Add New User'}
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: theme => theme.palette.grey[500],
            }}
          >
            <Close />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Personal Information */}
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Username"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    type="email"
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Address */}
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Street"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Suite"
                    name="suite"
                    value={formData.suite}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Zipcode"
                    name="zipcode"
                    value={formData.zipcode}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Company */}
            <Box>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Company Name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Catch Phrase"
                    name="catchPhrase"
                    value={formData.catchPhrase}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Business"
                    name="bs"
                    value={formData.bs}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          <Button onClick={onClose} color="inherit">
            Cancel
          </Button>
          <Button type="submit" variant="contained" color="primary">
            {mode === 'edit' ? 'Save Changes' : 'Add User'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default UserFormModal;
