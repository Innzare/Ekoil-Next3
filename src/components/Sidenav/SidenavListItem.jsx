import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const ListItem = styled('li', {
  shouldForwardProp: (prop) => prop !== 'isCurrentPath'
})(({ theme, isCurrentPath }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  minWidth: '40px',
  padding: '8px',
  borderRadius: '6px',
  transition: '.25s',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  color: theme.palette.icon.default,
  background: isCurrentPath ? theme.palette.background.primary : 'transparent',

  '&:hover': {
    background: theme.palette.background.primary
  }
}));

const ListItemText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isOpen'
})(({ theme, isOpen }) => ({
  transition: '.25s',
  visibility: isOpen ? 'visible' : 'hidden',
  opacity: isOpen ? '1' : '0',
  transform: isOpen ? 'translateX(0)' : 'translateX(-10px)',
  color: theme.palette.text.primary
}));

export default function SidenavListItem({ item, isOpen }) {
  const { title, icon: Icon, path } = item;

  const pathname = usePathname();

  const isCurrentPath = pathname === path;

  return (
    <Link href={path}>
      <ListItem isCurrentPath={isCurrentPath}>
        <Icon color="inherit" sx={{ mr: 2 }} />

        <ListItemText isOpen={isOpen}>{title}</ListItemText>
      </ListItem>
    </Link>
  );
}
