import React, { useState } from 'react'
import Dropzone from 'react-dropzone';

import { Box, Typography, Button } from '@mui/material';

import DialogUpload from './dialog'

const index = () => {

  const [files, setFiles] = useState([])

  const handleOnDrop = (files) => {
    setFiles(files)
    console.log(files)
  }
  const handleUpload = (files) => {
    console.log(files)
  }

  // return (
  //   <DialogUpload files={files}/>
  // )

  return (
    <div>
      {
        !files[0] ? (
          <Dropzone onDrop={handleOnDrop} accept="*" webkitdirectory directory >
          {({ getRootProps, getInputProps }) => (
              <section className="dropzone">
              <div {...getRootProps()}>
                  <input {...getInputProps()}  webkitdirectory="" directory="" />
                  <Button sx={{
                    display : "flex",
                    justifyContent : "center",
                    alignContent : "center"

                  }} onClick={handleUpload} variant="contained"
                  // disabled={circularLoading}
                  >Upload</Button>

                  <Button lable='Upload' />
              </div>
              
              </section>
          )}
        </Dropzone>
        )
        : null
        // <ul className="file-list">
        //   <DataTable rows={files}/>
        // </ul>
      }
      <DialogUpload files={files} setFiles={setFiles} />


      {/* <Button sx={{
          display : "flex",
          justifyContent : "center",
          alignContent : "center"

      }} onClick={handleUpload} variant="contained"
      // disabled={circularLoading}
      >Upload</Button> */}
    </div>
  )
}

export default index