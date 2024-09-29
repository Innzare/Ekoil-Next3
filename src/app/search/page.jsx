'use client';

import React from 'react';
import { Box, Card } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

export default function Search() {
  return (
    <main>
      <Box>
        <Card sx={{ p: 3 }} elevation={3}>
          <SectionTitle text="Подбор масла" />
        </Card>
      </Box>
    </main>
  );
}
