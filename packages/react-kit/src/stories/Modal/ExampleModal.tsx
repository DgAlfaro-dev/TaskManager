import React from 'react';
import { Box, TextField, Typography } from '@mui/material';
import { CustomButton } from '../../components/Button';
import { CustomModal } from '../../components/Modal';

export const ExampleModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Box>
      <CustomButton label={'Open'} type="success" onClick={handleOpen} />
      <CustomModal isOpen={isOpen} handleClose={handleClose}>
        <Typography variant="h5">Add Task</Typography>

        {/* Simplified the input field */}
        <TextField label="Name" variant="outlined" />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end', // Align buttons to the right
            gap: '10px',
          }}
        >
          <CustomButton label={'Cancel'} type="danger" onClick={handleClose} />
          <CustomButton label={'Add'} type="success" />
        </Box>
      </CustomModal>
    </Box>
  );
};
