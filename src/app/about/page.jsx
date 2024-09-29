'use client';

import Image from 'next/image';
import { Box, Card } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

export default function About() {
  return (
    <main>
      <Box>
        <Card sx={{ p: 3 }} elevation={3}>
          <SectionTitle text="О компании" />
        </Card>
      </Box>
    </main>
  );
}
