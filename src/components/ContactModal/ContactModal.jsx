import React, { useState } from 'react';
import { Box, Dialog, DialogTitle, DialogContent, IconButton, Typography, Tab, Tabs, tabClasses } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useStore } from '@/store';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import ContactByCallbackForm from './ContactByCallbackForm';
import ContactByEmailForm from './ContactByEmailForm';

const TabPanel = (props) => {
  const { children, index, value, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
};

export default function ContactModal() {
  const [value, setValue] = useState(0);
  const { isContactModalOpen, closeContactModal } = useStore();

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onClose = () => {
    closeContactModal();
    setValue(0);
  };

  return (
    <Dialog
      fullScreen={isTablet}
      open={isContactModalOpen}
      onClose={onClose}
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
            sx={(theme) => ({
              flex: 1,
              minHeight: '50px',

              [`&.${tabClasses.selected}`]: {
                backgroundColor: '#0072e526'
              },

              [theme.breakpoints.down('sm')]: {
                fontSize: '12px',
                p: 1
              }
            })}
          />

          <Tab
            id={1}
            label="Обратный звонок"
            icon={<LocalPhoneOutlinedIcon />}
            iconPosition="start"
            sx={(theme) => ({
              flex: 1,
              minHeight: '50px',

              [`&.${tabClasses.selected}`]: {
                backgroundColor: '#0072e526'
              },

              [theme.breakpoints.down('sm')]: {
                fontSize: '12px',
                p: 1
              }
            })}
          />
        </Tabs>

        <TabPanel index={0} value={value}>
          <ContactByEmailForm close={onClose} />
        </TabPanel>

        <TabPanel index={1} value={value}>
          <ContactByCallbackForm close={onClose} />
        </TabPanel>
      </DialogContent>
    </Dialog>
  );
}
