import React from 'react'
import { Box } from '@mui/material';

import Info from './Info/index'
import Vid from './Vid/video'
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
        width: '100%',
      }}
      className="overflow-hidden bg-stone-600 flex items-center justify-center h-[70vh] max-h-[70vh]"
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