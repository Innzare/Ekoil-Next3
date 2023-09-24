import React from 'react';
import { Box, Card } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

export default function Location() {
  return (
    <main>
      <Box>
        <Card sx={{ p: 3 }} elevation={3}>
          <SectionTitle text="Где нас найти" />
        </Card>
      </Box>
    </main>
  );
}
