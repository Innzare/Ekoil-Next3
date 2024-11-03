import React, { useState } from 'react';
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
  Typography,
  Tab,
  Tabs,
  tabClasses
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useStore } from '@/store';

export default function ContactModal() {
  const [value, setValue] = useState(0);
  const { isContactModalOpen, closeContactModal } = useStore();

  function TabPanel(props) {
    const { children, id, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== id}
        id={`vertical-tabpanel-${id}`}
        aria-labelledby={`vertical-tab-${id}`}
        {...other}
      >
        {value === id && (
          <Box sx={{ p: 3 }}>
            <Box>{children}</Box>
          </Box>
        )}
      </div>
    );
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog
      open={isContactModalOpen}
      onClose={closeContactModal}
      scroll="paper"
      maxWidth="sm"
      disableScrollLock
      aria-labelledby="scroll-dialog-title"
      aria-describedby="scroll-dialog-description"
      sx={{
        '& .MuiDialog-paper': {
          width: '100%'
        }
      }}
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
        <Typography variant="h6" fontWeight="bold" color="initial" sx={{ textTransform: 'initial' }}>
          Свяжитесь с нами!
        </Typography>

        <IconButton onClick={closeContactModal}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{ p: 0 }}>
        <Tabs value={value} onChange={handleChange} sx={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
          <Tab
            id={0}
            label="Написать на почту"
            icon={<MailOutlineIcon />}
            iconPosition="start"
            sx={{
              flex: 1,
              minHeight: '50px',

              [`&.${tabClasses.selected}`]: {
                backgroundColor: '#0072e526'
              }
            }}
          />

          <Tab
            id={1}
            label="Заказать обратный звонок"
            icon={<LocalPhoneOutlinedIcon />}
            iconPosition="start"
            sx={{
              flex: 1,
              minHeight: '50px',

              [`&.${tabClasses.selected}`]: {
                backgroundColor: '#0072e526'
              }
            }}
          />
        </Tabs>

        <TabPanel id={0}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              py: 2
            }}
          >
            <TextField fullWidth required id="filled-required" label="Имя" variant="outlined" />
            <TextField fullWidth required id="filled-required" label="Телефон" variant="outlined" />
            <TextField fullWidth required id="filled-required" label="Email" variant="outlined" />

            <TextField
              fullWidth
              id="outlined-multiline-static"
              multiline
              required
              rows={4}
              label="Введите ваше сообщение"
              variant="outlined"
            />
          </Box>
        </TabPanel>

        <TabPanel id={1}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              py: 2
            }}
          >
            <TextField fullWidth required id="filled-required" label="Имя" variant="outlined" />
            <TextField fullWidth required id="filled-required" label="Телефон" variant="outlined" />
          </Box>
        </TabPanel>
      </DialogContent>

      <DialogActions
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          px: 3,
          py: 2
        }}
      >
        <Button
          sx={{ textTransform: 'initial' }}
          size="large"
          variant="outlined"
          disableElevation
          onClick={closeContactModal}
        >
          Закрыть
        </Button>
        <Button sx={{ textTransform: 'initial' }} size="large" variant="contained" disableElevation>
          Отправить
        </Button>
      </DialogActions>
    </Dialog>
  );
}
