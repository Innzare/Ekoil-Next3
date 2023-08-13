import Image from 'next/image';
import { Box, Card, Container, Typography } from '@mui/material';

export default function About() {
  return (
    <main>
      <Box>
        <Card sx={{ p: 3 }} elevation={3}>
          <Typography>О компании</Typography>
        </Card>
      </Box>
    </main>
  );
}
