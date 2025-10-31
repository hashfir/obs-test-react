import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
  Chip,
  Skeleton,
} from '@mui/material';
import type { User } from '../types/user.types';
import { Email, Phone, Business } from '@mui/icons-material';

interface UserCardProps {
  user: User;
  onClick: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 2,
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 24px rgba(0,0,0,0.15)',
        },
      }}
    >
      <CardActionArea onClick={onClick} sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
        {!imageLoaded && (
          <Skeleton variant="rectangular" height={220} animation="wave" />
        )}
        <CardMedia
          component="img"
          height="220"
          image={user.imageUrl}
          alt={user.name}
          onLoad={() => setImageLoaded(true)}
          sx={{
            objectFit: 'cover',
            display: imageLoaded ? 'block' : 'none',
          }}
        />
        <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
          <Typography 
            gutterBottom 
            variant="h6" 
            component="div" 
            noWrap
            sx={{ fontWeight: 600, mb: 0.5 }}
          >
            {user.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            gutterBottom
            noWrap
            sx={{ mb: 2 }}
          >
            @{user.username}
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Email fontSize="small" color="primary" />
              <Typography variant="body2" noWrap sx={{ fontSize: '0.875rem' }}>
                {user.email}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Phone fontSize="small" color="primary" />
              <Typography variant="body2" noWrap sx={{ fontSize: '0.875rem' }}>
                {user.phone}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Business fontSize="small" color="primary" />
              <Typography variant="body2" noWrap sx={{ fontSize: '0.875rem' }}>
                {user.company.name}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 2.5 }}>
            <Chip label={user.address.city} size="small" color="primary" />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UserCard;
