import React from 'react'

import { Box, Chip, Avatar } from '@mui/material';

const MemberList = () => {
  return (
    <Box>
        <Chip
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            label="Team Member 1"
            variant="outlined"
        />
        <Chip
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            label="Team Member 2"
            variant="outlined"
        />
        <Chip
            avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
            label="Team Member 3"
            variant="outlined"
        />
    </Box>
  )
}

export default MemberList