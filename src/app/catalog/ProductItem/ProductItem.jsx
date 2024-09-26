'use client';

import React from 'react';
import Link from 'next/link';
import { Product, ProductImg, ProductTitle, ProductSubTitle, PreviewButton } from './style';
import { Box, Button, IconButton, Card, Grid, Typography, Tooltip } from '@mui/material';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { useRouter } from 'next/navigation';

export default function ProductItem(props) {
  const { data, onProductPreviewClick } = props;

  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/catalog/${data.id}`);
  };

  return (
    <Product>
      <ProductImg
        src={data.img.src}
        srcSet={`${data.img.src}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        loading="lazy"
        alt="oil"
      />

      <Tooltip title="Предпросмотр">
        <PreviewButton className="preview-button" color="primary" onClick={() => onProductPreviewClick(data)}>
          <VisibilityOutlinedIcon />
        </PreviewButton>
      </Tooltip>

      <ProductTitle variant="h4" color="initial">
        {data.name}
      </ProductTitle>

      <ProductSubTitle variant="h4" color="initial">
        {data.subtitle}
      </ProductSubTitle>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          gap: '8px',
          width: '100%'
        }}
      >
        <Button
          sx={{ textTransform: 'initial' }}
          variant="outlined"
          startIcon={<SubjectOutlinedIcon />}
          onClick={handleNavigate}
        >
          Подробнее
        </Button>
        {/* <Link href="/catalog/2">
        </Link> */}

        <Tooltip title="Скачать TDS">
          <Button sx={{ textTransform: 'initial' }} variant="outlined">
            <DescriptionOutlinedIcon />
          </Button>
        </Tooltip>

        {/* <IconButton color="primary">
          <DescriptionIcon />
        </IconButton> */}
      </Box>
    </Product>
  );
}
