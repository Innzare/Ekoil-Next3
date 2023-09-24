import React from 'react';
import { Box, Card } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

export default function Sertificates() {
  return (
    <main>
      <Box>
        <Card sx={{ p: 3 }} elevation={3}>
          <SectionTitle text="Сертификаты" />
        </Card>
      </Box>
    </main>
  );
}
