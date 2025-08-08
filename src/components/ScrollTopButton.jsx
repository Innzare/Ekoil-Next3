import React, { useEffect, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function ScrollTopButton() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsButtonVisible(true);
    } else {
      setIsButtonVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <IconButton
      sx={{
        position: 'fixed',
        bottom: 60,
        right: 40,
        zIndex: 1000,
        visibility: isButtonVisible ? 'visible' : 'hidden',
        opacity: isButtonVisible ? 1 : 0,
        transition: 'visibility 0.2s, opacity 0.2s',
        backgroundColor: 'rgb(0 95 188) ',

        '&:hover': {
          backgroundColor: 'rgb(0, 59, 117)'
        }
      }}
      variant="contained"
      size="large"
      onClick={scrollToTop}
    >
      <KeyboardArrowUpIcon sx={{ color: '#fff' }} />
    </IconButton>
  );
}
