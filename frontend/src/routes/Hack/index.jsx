import React from 'react'
import { Box } from '@mui/material';

import Info from './Info/index'
import Vid from './Vid/index'
import Upload from './Upload/index'

const index = () => {
  return (
    <Box>

    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      // alignItems: 'center',    
    }}>
      <Box
      sx={{
        width: '70%',
        // height: '100%',
        height: '50vh',
        backgroundColor: 'grey',
      }}
      >
        <Vid />
      </Box>
    </Box>

    <br />

    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',    
    }}>
      <Box
      sx={{
        flex: 3,
      }}
      >
        <Info />
      </Box>

      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          // height: '100%',
          // backgroundColor: 'grey',
        }}
      >
        <Upload />
      </Box>
    </Box>

    </Box>
  )
}

export default index