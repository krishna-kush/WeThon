import React from 'react'

import { Box, Typography } from '@mui/material';

import Dropzone from 'react-dropzone';


const index = () => {

  const handleOnDrop = (files) => {
    console.log(files)
  }

  return (
    <div>
      <Dropzone onDrop={handleOnDrop} accept="*" webkitdirectory directory >
          {({ getRootProps, getInputProps }) => (
              <section className="dropzone">
              <div {...getRootProps()}>
                  <input {...getInputProps()} webkitdirectory directory />
                  <Box
                  sx = {{
                      display : "flex",
                      flexDirection : "column",
                      justifyContent : "center",
                      alignContent : "center",
                      alignItems : "center",
                      borderColor : "grey",
                      borderWidth : 1,
                      borderStyle : "dashed",
                      borderRadius : 10,
                      marginTop : 5
                  }}
                  >
                      {/* <DriveFolderUploadIcon sx={{
                          fontSize : 100
                      }}/> */}

                      <img src="/movingIcon/floatCartoon.gif" alt="" />

                      <Typography sx={{
                          margin : 2
                      }}>Drag and drop folders or files here, or click to select</Typography>

                      {/* <CompressedImage source={""}/> */}
                  </Box>
              </div>
              
              </section>
          )}
      </Dropzone>
    </div>
  )
}

export default index