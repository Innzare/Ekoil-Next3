'use client';

import React from 'react';
import { Product, ProductImg, ProductTitle, ProductSubTitle, PreviewButton } from './style';
import { Box, Button, IconButton, Card, Grid, Typography, Tooltip } from '@mui/material';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import HideImageOutlinedIcon from '@mui/icons-material/HideImageOutlined';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ProductItem(props) {
  const { data, onProductPreviewClick } = props;

  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/catalog/${data.product_number}`, `/catalog/${data.product_number}`);
  };

  return (
    <Product>
      {data?.img ? (
        <ProductImg
          src={data.img}
          srcSet={`${data.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          loading="lazy"
          alt="oil"
        />
      ) : (
        <Box
          sx={{
            height: '155px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '32px',
            backgroundColor: '#fff',
            borderRadius: '6px',
            width: '100%'
          }}
        >
          <HideImageOutlinedIcon sx={{ color: '#ccc', fontSize: '46px' }} />
        </Box>
      )}

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
        <Tooltip title="Скачать TDS">
          <Button sx={{ textTransform: 'initial' }} variant="outlined">
            <DescriptionOutlinedIcon />
          </Button>
        </Tooltip>
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

        {/* <IconButton color="primary">
          <DescriptionIcon />
        </IconButton> */}
      </Box>
    </Product>
  );
}
