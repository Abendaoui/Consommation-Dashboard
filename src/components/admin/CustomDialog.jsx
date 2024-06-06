import React from 'react'
import Dialog from '@mui/material/Dialog'

const CustomDialog = ({ open, handleOpen, children }) => {
  return (
    <Dialog
      open={open}
      onClose={handleOpen}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      PaperProps={{
        style: {
          margin: 'auto',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-44.5%, -50%)',
          width: '90%',
          maxWidth: '500px',
        },
      }}
    >
      <div className='relative bg-white mx-8 md:mx-0 shadow rounded-3xl px-6 pb-6'>
        {children}
      </div>
    </Dialog>
  )
}

export default CustomDialog
