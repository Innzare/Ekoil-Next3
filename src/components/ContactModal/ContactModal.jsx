import React from 'react';
import {
  Box,
  Card,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  IconButton,
  TextField,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useStore } from '@/store';

export default function ContactModal() {
  const { isContactModalOpen, closeContactModal } = useStore();

  return (
    <Dialog
      open={isContactModalOpen}
      onClose={closeContactModal}
      scroll="paper"
      maxWidth="md"
      minWidth="600px"
      disableScrollLock
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
    >
      <DialogTitle
        id="scroll-dialog-title"
        sx={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontWeight: '900',
          textTransform: 'uppercase',
          fontSize: '32px'
        }}
      >
        <Typography variant="h6" color="initial" sx={{ textTransform: 'initial' }}>
          Свяжитесь с нами
        </Typography>

        <IconButton onClick={closeContactModal}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <TextField required id="filled-required" label="Имя*" variant="outlined" />
      </DialogContent>

      <DialogActions></DialogActions>
    </Dialog>
  );
}
