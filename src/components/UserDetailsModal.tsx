// @ts-nocheck
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  Avatar,
  Grid,
  Divider,
  IconButton,
  Chip,
} from '@mui/material';
import {
  Close,
  Edit,
  Delete,
  Email,
  Phone,
  Language,
  LocationOn,
  Business,
} from '@mui/icons-material';
import { useUserContext } from '../context/UserContext';
import UserFormModal from './UserFormModal';

interface UserDetailsModalProps {
  open: boolean;
  onClose: () => void;
}

const UserDetailsModal: React.FC<UserDetailsModalProps> = ({
  open,
  onClose,
}) => {
  const { selectedUser, deleteUser } = useUserContext();
  const [editModalOpen, setEditModalOpen] = useState(false);

  if (!selectedUser) return null;

  const handleDelete = () => {
    if (
      window.confirm(`Are you sure you want to delete ${selectedUser.name}?`)
    ) {
      deleteUser(selectedUser.id);
      onClose();
    }
  };

  const handleEdit = () => {
    setEditModalOpen(true);
  };

  const handleEditClose = () => {
    setEditModalOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
          },
        }}
      >
        <DialogTitle sx={{ m: 0, p: 2, pr: 6 }}>
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
            {/* User Header */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'center', sm: 'flex-start' },
                gap: 3,
              }}
            >
              <Avatar
                src={selectedUser.imageUrl}
                alt={selectedUser.name}
                sx={{
                  width: 120,
                  height: 120,
                  boxShadow: 3,
                }}
              />
              <Box sx={{ flex: 1, textAlign: { xs: 'center', sm: 'left' } }}>
                <Typography variant="h4" gutterBottom>
                  {selectedUser.name}
                </Typography>
                <Typography variant="h6" color="text.secondary" gutterBottom>
                  @{selectedUser.username}
                </Typography>
                <Chip label={`ID: ${selectedUser.id}`} size="small" />
              </Box>
            </Box>

            <Divider />

            {/* Contact Information */}
            <Box>
              <Typography variant="h6" gutterBottom color="primary">
                Contact Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Email color="action" />
                    <Box>
                      <Typography variant="caption" color="text.secondary">
                        Email
                      </Typography>
                      <Typography variant="body1">
                        {selectedUser.email}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Phone color="action" />
                    <Box>
                      <Typography variant="caption" color="text.secondary">
                        Phone
                      </Typography>
                      <Typography variant="body1">
                        {selectedUser.phone}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Language color="action" />
                    <Box>
                      <Typography variant="caption" color="text.secondary">
                        Website
                      </Typography>
                      <Typography variant="body1">
                        {selectedUser.website}
                      </Typography>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Divider />

            {/* Address */}
            <Box>
              <Typography variant="h6" gutterBottom color="primary">
                Address
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <LocationOn color="action" />
                <Box>
                  <Typography variant="body1">
                    {selectedUser.address.suite}, {selectedUser.address.street}
                  </Typography>
                  <Typography variant="body1">
                    {selectedUser.address.city}, {selectedUser.address.zipcode}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Divider />

            {/* Company */}
            <Box>
              <Typography variant="h6" gutterBottom color="primary">
                Company
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                <Business color="action" />
                <Box>
                  <Typography variant="body1" fontWeight="bold">
                    {selectedUser.company.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    fontStyle="italic"
                  >
                    "{selectedUser.company.catchPhrase}"
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {selectedUser.company.bs}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </DialogContent>

        <DialogActions sx={{ p: 2, gap: 1 }}>
          <Button
            startIcon={<Delete />}
            onClick={handleDelete}
            color="error"
            variant="outlined"
          >
            Delete
          </Button>
          <Button
            startIcon={<Edit />}
            onClick={handleEdit}
            color="primary"
            variant="contained"
          >
            Edit
          </Button>
        </DialogActions>
      </Dialog>

      <UserFormModal
        open={editModalOpen}
        onClose={handleEditClose}
        user={selectedUser}
        mode="edit"
      />
    </>
  );
};

export default UserDetailsModal;
