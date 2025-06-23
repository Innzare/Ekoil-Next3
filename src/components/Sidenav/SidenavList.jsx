import React from 'react';
import { styled } from '@mui/system';
import { sidenav } from '@/consts/sidenav';
import SidenavListItem from './SidenavListItem';

export const List = styled('ul')({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '100%'
});

export default function SidenavList({ isOpen, onClick }) {
  return (
    <List>
      {sidenav.map((item) => {
        return <SidenavListItem key={item.title} item={item} isOpen={isOpen} onClick={onClick} />;
      })}
    </List>
  );
}
