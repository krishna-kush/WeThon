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
        width: '50%',
      }}
      >
        <Info />
      </Box>

      <Box
      sx={{
        width: '50%',
        // height: '100%',
        backgroundColor: 'grey',
      }}
      >
        <Vid />
      </Box>
    </Box>


    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      // alignItems: 'center',    
    }}>
      <Box
      sx={{
        width: '50%',
        // height: '100%',
        backgroundColor: 'grey',
      }}
      >
        <Vid />
      </Box>

      <Box
        sx={{
          width: '50%',
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