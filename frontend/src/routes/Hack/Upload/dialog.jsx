import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

import { DataGrid } from '@mui/x-data-grid';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'path', headerName: 'Path', width: 600 },
    { field: 'fullPath', headerName: 'FileName', width: 200 },
    { field: 'formattedFileSize', headerName: 'Size', width: 100 },
  ];
  
function DataTable({rows}) {

return (
    <div style={{ height: 400, width: '100%' }}>
    <DataGrid
        getRowId={(row) => row.path}
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
  

export default function CustomizedDialogs({ files, setFiles }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setFiles([])
  };
  const handleCloseUpload = () => {
    setOpen(false);
    setFiles([])
  };

  React.useEffect(() => {
    files[0]? setOpen(true): setOpen(false)
  }, [files]);

  return (
    <React.Fragment>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Files To Upload
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
            <ul className="file-list">
              <DataTable rows={files}/>
            </ul>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCloseUpload}>
            Upload
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </React.Fragment>
  );
}