'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Card } from '@mui/material';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { ITEMS } from '@/consts/products';

export default function CatalogItem() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    const product = ITEMS.find((item) => item.id === Number(params.id));

    console.log(params.id);

    setData(product);
  }, []);

  const onGoBackClick = () => {
    router.back();
  };

  return (
    <main>
      <Box>
        <Card sx={{ p: 3 }} elevation={3}>
          <Button sx={{ mb: 4 }} onClick={onGoBackClick} variant="outlined" size="small" color="primary">
            <ArrowBackIcon />
          </Button>
          <SectionTitle text={data?.name} />

          <Box>
            <img src={data?.img.src} alt={data?.name} width="200" height="200" />
          </Box>
        </Card>
      </Box>
    </main>
  );
}
