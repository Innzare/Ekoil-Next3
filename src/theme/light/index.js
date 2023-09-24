'use client';

import { createTheme } from '@mui/material';

export default createTheme({
  mode: 'light',
  palette: {
    primary: {
      main: '#0052cc'
    },
    secondary: {
      main: '#edf2ff'
    },
    common: {
      mode: '#000'
    },
    boxShadow: {
      header:
        'rgba(52, 71, 103, 0.9) 0rem 0rem 0.0625rem 0.0625rem inset, rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem;'
    },
    background: {
      default: 'rgb(240, 242, 245)',
      paper: '#fff',
      paperAlpha: 'rgba(255, 255, 255, 0.8)',
      primary: '#c8e6ff'
    },
    icon: {
      default: 'rgb(26, 32, 53)'
    }
  },

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
          backgroundColor: 'rgb(240, 242, 245)',
          transition: 'background-color .25s ease',
          height: '100%'
        },
        a: {
          color: 'inherit',
          textDecoration: 'none'
        }
      }
    }
  }
});
