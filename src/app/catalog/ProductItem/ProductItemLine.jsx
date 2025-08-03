'use client';

import React from 'react';
import { Box, Button, IconButton, Typography, Tooltip, Link } from '@mui/material';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import HideImageOutlinedIcon from '@mui/icons-material/HideImageOutlined';
import { useRouter } from 'next/navigation';

export default function ProductItem(props) {
  const { data, onProductPreviewClick } = props;

  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/catalog/${data.product_number}`);
  };

  return (
    <Box
      onClick={handleNavigate}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '16px',
        borderRadius: '6px',
        padding: '24px',
        backgroundColor: 'rgb(238, 243, 250)',
        cursor: 'pointer'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '42px'
        }}
      >
        {data?.img ? (
          <img
            width="150"
            height="150"
            src={data.img}
            srcSet={data.img}
            alt={data.name}
            loading="lazy"
            style={{ borderRadius: '8px', backgroundColor: '#fff', objectFit: 'contain' }}
          />
        ) : (
          <Box
            sx={{
              height: '150px',
              width: '150px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              borderRadius: '6px'
            }}
          >
            <HideImageOutlinedIcon sx={{ color: '#ccc', fontSize: '46px' }} />
          </Box>
        )}

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '16px'
          }}
        >
          <Typography variant="h6" fontWeight={800}>
            {data.name}
          </Typography>
          <Typography variant="body">{data.subtitle}</Typography>

          <Link
            href={data.documents[0]?.url}
            target="_blank"
            onClick={(event) => {
              event.stopPropagation();
            }}
          >
            <Button sx={{ textTransform: 'initial', width: 'fit-content' }} variant="outlined">
              Скачать TDS
              <DescriptionOutlinedIcon sx={{ ml: 2 }} />
            </Button>
          </Link>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          justifyContent: 'space-between'
        }}
      >
        <Tooltip title="Предпросмотр">
          <IconButton
            color="primary"
            onClick={(event) => {
              event.stopPropagation();
              onProductPreviewClick(data);
            }}
          >
            <VisibilityOutlinedIcon />
          </IconButton>
        </Tooltip>

        <Button
          sx={{ textTransform: 'initial' }}
          variant="outlined"
          startIcon={<SubjectOutlinedIcon />}
          onClick={handleNavigate}
        >
          Подробнее
        </Button>
      </Box>
    </Box>
  );
}
