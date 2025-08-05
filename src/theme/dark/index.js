'use client';

import { createTheme } from '@mui/material';
import button from './components/button';
import typography from './components/typography';

export default createTheme({
  mode: 'dark',
  palette: {
    light: {
      main: '#fff'
    },
    primary: {
      main: '#0052cc'
    },
    secondary: {
      main: '#edf2ff'
    },
    common: {
      mode: '#fff'
    },
    background: {
      default: 'rgb(26, 32, 53)',
      paper: 'rgb(32, 41, 64)',
      paperAlpha: 'rgba(32, 41, 64, 0.8)',
      primary: 'rgb(26, 115, 232)'
    },
    boxShadow: {
      header:
        'rgba(52, 71, 103, 0.9) 0rem 0rem 0.0625rem 0.0625rem inset, rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem;'
    },
    icon: {
      default: 'rgb(240, 242, 245)'
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.85)'
    }
  },
  typography: { ...typography },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box'
        },
        'html, body': {
          maxWidth: '100vw',
          overflowX: 'hidden',
          backgroundColor: 'rgb(26, 32, 53) !important',
          transition: 'background-color .25s ease'
          // height: '100%'
        },
        a: {
          color: 'inherit',
          textDecoration: 'none'
        }
      }
    }
    // MuiButton: { ...button }
  }
});
