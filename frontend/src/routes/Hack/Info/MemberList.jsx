import React from 'react'

import { Box, Chip, Avatar, Badge } from '@mui/material';

import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));



const MemberList = () => {

  const chipMargin = '5px'

  return (
    <Box className = "bg-black/10 rounded-2xl"
    >
        <Chip
            sx={{
              margin: `${chipMargin}`, 
            }}
            avatar={
              <Box>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" 
                    sx={{ width: 24, height: 24 }}
                  />
                </StyledBadge>
              </Box>
            }
            label="Team Member 1"
            variant="outlined"
            />
        <Chip
            sx={{
              margin: `${chipMargin}`, 
            }}
            avatar={
              <Box>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" 
                    sx={{ width: 24, height: 24 }}
                  />
                </StyledBadge>
              </Box>
            }
            label="Team Member 2"
            variant="outlined"
            />
        <Chip
            sx={{
              margin: `${chipMargin}`, 
            }}
            avatar={
              <Box>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                  variant="dot"
                >
                  <Avatar alt="Natacha" src="/static/images/avatar/1.jpg" 
                    sx={{ width: 24, height: 24 }}
                  />
                </StyledBadge>
              </Box>
            }
            label="Team Member 3"
            variant="outlined"
        />
    </Box>
  )
}

export default MemberList