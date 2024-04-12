import React from 'react'
import { Box } from '@mui/material';

import Info from './Info/index'
import Vid from './Vid/index'
import Upload from './Upload/index'
import Messages from './Messages/index'

const index = () => {
  return (
    <Box>

    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: '1rem',
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

      margin: '0 3em',
      gap: '3rem',
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
        <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
        >
          <Upload />
        </Box>
      </Box>
    </Box>

    <br />

    <Box>
      <Messages />
    </Box>

    </Box>
  )
}

export default index