import React, { useState } from 'react'

import { Box, Typography, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';


import Dropzone from 'react-dropzone';

function DataTable({rows}) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
}

const index = () => {

  const [files, setFiles] = useState([])

  const handleOnDrop = (files) => {
    setFiles(files)
    console.log(files)
  }
  const handleUpload = (files) => {
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

      <ul className="file-list">
        {
            files[0] ? (
                <DataTable rows={files}/>
            ) : (
                null
            )
        }
        </ul>


      <Button sx={{
          display : "flex",
          justifyContent : "center",
          alignContent : "center"

      }} onClick={handleUpload} variant="contained"
      // disabled={circularLoading}
      >Upload</Button>
    </div>
  )
}

export default index