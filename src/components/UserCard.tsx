import React from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
  Chip,
} from '@mui/material';
import type { User } from '../types/user.types';
import { Email, Phone, Business } from '@mui/icons-material';

interface UserCardProps {
  user: User;
  onClick: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onClick }) => {
  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 6,
        },
      }}
    >
      <CardActionArea onClick={onClick} sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          height="200"
          image={user.imageUrl}
          alt={user.name}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" noWrap>
            {user.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            gutterBottom
            noWrap
          >
            @{user.username}
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Email fontSize="small" color="action" />
              <Typography variant="body2" noWrap>
                {user.email}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Phone fontSize="small" color="action" />
              <Typography variant="body2" noWrap>
                {user.phone}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Business fontSize="small" color="action" />
              <Typography variant="body2" noWrap>
                {user.company.name}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Chip label={user.address.city} size="small" color="primary" />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default UserCard;
