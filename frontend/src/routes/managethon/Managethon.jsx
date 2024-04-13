import React from 'react'
import Stream from './Stream'

import {Box} from '@mui/material'

import Info from '../Hack/Info/index'
import Upload from '../Hack/Upload/index'


function Managethon() {
  return (
    <div>
      <Stream/>

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
          flex: 0.5,
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

    </div>
  )
}

export default Managethon