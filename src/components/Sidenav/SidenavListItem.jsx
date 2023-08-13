import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

export const ListItem = styled('li', {
  shouldForwardProp: (prop) => prop !== 'isCurrentPath'
})(({ isCurrentPath }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  minWidth: '40px',
  padding: '8px',
  borderRadius: '6px',
  transition: '.25s',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  color: '#000000b5',
  color: isCurrentPath ? '#0288d1' : '#000000b5',
  background: isCurrentPath ? '#c8e6ff' : 'transparent',

  '&:hover': {
    background: '#c8e6ff',
    color: '#0288d1'
  }
}));

export default function SidenavListItem({ item, isOpen }) {
  const { title, icon: Icon, path } = item;

  const pathname = usePathname();

  const isCurrentPath = pathname === path;

  return (
    <Link href={path}>
      <ListItem isCurrentPath={isCurrentPath}>
        <Icon color="inherit" sx={{ mr: 2 }} />

        <Typography
          sx={{
            transition: '.25s',
            visibility: isOpen ? 'visible' : 'hidden',
            opacity: isOpen ? '1' : '0',
            transform: isOpen ? 'translateX(0)' : 'translateX(-10px)',
            color: '#000'
          }}
        >
          {title}
        </Typography>
      </ListItem>
    </Link>
  );
}
