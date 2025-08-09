'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Card, Stack, Tab, Tabs, Tooltip, Typography } from '@mui/material';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import HideImageOutlinedIcon from '@mui/icons-material/HideImageOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import Skeleton from '@mui/material/Skeleton';
import HeaderSection from '@/components/HeaderSection';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

import axios from 'axios';

export default function CatalogItem() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [tabValue, setTabValue] = useState(0);
  const [activeTara, setActiveTara] = useState(0);

  useEffect(() => {
    loadOil();
  }, []);

  const loadOil = async () => {
    setIsLoading(true);

    const { data } = await axios.get(`/api/products/search/${params.id}`);

    const dataFormatted = {
      ...data,
      tare: [...data.tare].sort((a, b) => {
        const numA = parseFloat(a.name.replace(',', '.'));
        const numB = parseFloat(b.name.replace(',', '.'));
        return numA - numB;
      })
    };

    setData(dataFormatted);
    setIsLoading(false);
  };

  const onGoBackClick = () => {
    router.back();
  };

  function createData() {
    if (data) {
      return data.characteristics.map((item) => {
        const { indicator, method, value } = item;

        return { indicator, method, value };
      });
    }
    return [];
  }

  const onDownloadTDSClick = () => {
    // Создаем ссылку для скачивания
    const link = document.createElement('a');
    link.href = data.documents[0].url; // Указываем URL файла
    link.download = 'oil'; // Указываем имя файла
    link.target = '_blank'; // Открываем в новом окне (если нужно)
    document.body.appendChild(link); // Добавляем ссылку в DOM
    link.click(); // Кликаем по ссылке для начала скачивания
    document.body.removeChild(link);
  };

  const renderTares = () => {
    if (data) {
      return data.tare.map((tare, index) => {
        const isActive = index === activeTara;

        return (
          <Box
            key={tare.id}
            onClick={() => setActiveTara(index)}
            sx={{
              backgroundColor: isActive ? '#CC2828' : '#F4F6F8',
              color: isActive ? '#fff' : '#000',
              px: 2,
              py: 1,
              borderRadius: '8px',
              transition: 'all .25s ease',
              cursor: 'pointer',
              fontWeight: 700,

              '&:hover': {
                backgroundColor: '#CC2828',
                color: '#fff'
              }
            }}
          >
            {tare.name}
          </Box>
        );
      });
    }

    return '';
  };

  const imageUrl = () => {
    const tareId = data?.tare[activeTara].id;

    if (data) {
      return data?.images.find((item) => Number(item.tare.id) === Number(tareId))?.url;
    }

    return null;
  };

  return (
    <main>
      <HeaderSection title="Каталог EKOIL" dynamicRouteTitle={data?.name} />

      <Box
        sx={(theme) => ({
          p: 10,

          [theme.breakpoints.down('md')]: {
            p: 5
          },

          [theme.breakpoints.down('sm')]: {
            p: 3
          }
        })}
      >
        <Tooltip title="Назад">
          <Button
            sx={{ mb: 4, backgroundColor: '#1E284B', borderRadius: '8px' }}
            onClick={onGoBackClick}
            variant="contained"
            disableElevation
            size="small"
          >
            <ArrowBackIcon />
          </Button>
        </Tooltip>

        <Box>
          {isLoading ? (
            <Box>
              <Stack spacing={1}>
                <Skeleton
                  animation="wave"
                  variant="rounded"
                  width="100%"
                  height={600}
                  sx={{
                    position: 'relative',
                    backgroundColor: 'rgb(238, 243, 250)',
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ mb: 2 }}>
                    <Skeleton variant="text" sx={{ visibility: 'visible', fontSize: '1rem' }} />
                    <Skeleton variant="text" width="60%" sx={{ visibility: 'visible', fontSize: '1rem' }} />
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: '#fff',
                      borderRadius: '6px',
                      visibility: 'visible !important',
                      height: '400px',
                      mb: 2
                    }}
                  >
                    <ImageOutlinedIcon
                      color="#ccc"
                      sx={{ visibility: 'visible !important', fontSize: 64, color: '#ccc' }}
                    />
                  </Box>

                  <Box>
                    <Skeleton variant="text" sx={{ visibility: 'visible', fontSize: '1rem' }} />
                    <Skeleton variant="text" width="60%" sx={{ visibility: 'visible', fontSize: '1rem' }} />
                  </Box>
                </Skeleton>
              </Stack>
            </Box>
          ) : (
            <>
              <Box
                sx={(theme) => ({
                  display: 'flex',
                  gap: 1,
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  mb: 4,

                  [theme.breakpoints.down('md')]: {
                    mb: 2
                  }
                })}
              >
                <Typography
                  variant="h4"
                  fontWeight={800}
                  sx={(theme) => ({
                    [theme.breakpoints.down('md')]: {
                      fontSize: '21px'
                    }
                  })}
                >
                  {`${data?.name} ${data?.subtitle || ''}`}
                </Typography>

                <Box sx={{ display: 'flex', gap: '8px' }}>
                  <Button
                    onClick={onDownloadTDSClick}
                    variant="contained"
                    disableElevation
                    size="small"
                    sx={{ borderRadius: '8px', backgroundColor: '#1E284B' }}
                  >
                    <Typography
                      fontWeight={900}
                      sx={(theme) => ({
                        mr: 2,
                        textTransform: 'initial'
                      })}
                    >
                      Скачать TDS
                    </Typography>
                    <FileDownloadIcon />
                  </Button>
                </Box>
              </Box>

              <Box
                sx={(theme) => ({
                  display: 'flex',
                  gap: '40px',
                  alignItems: 'flex-start',

                  [theme.breakpoints.down('md')]: {
                    flexDirection: 'column',
                    gap: '20px'
                  }
                })}
              >
                <Box
                  sx={(theme) => ({
                    position: 'sticky',
                    top: '110px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // backgroundColor: '#F4F6F8',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    minWidth: '500px',
                    height: '500px',

                    [theme.breakpoints.down('md')]: {
                      position: 'initial',
                      minWidth: '100%',
                      height: '300px'
                    },

                    img: {
                      objectFit: 'contain',
                      width: '100%',
                      height: '100%'
                    }
                  })}
                >
                  {imageUrl() ? (
                    <img src={imageUrl()} alt={data?.name} width="500" height="500" />
                  ) : (
                    <HideImageOutlinedIcon sx={{ color: '#ccc', fontSize: '96px' }} />
                  )}
                </Box>

                <Box sx={{ width: '100%' }}>
                  <h4>Описание</h4>
                  <Box sx={{ mb: 3, mt: 1 }} dangerouslySetInnerHTML={{ __html: data?.description }} />

                  <h4>Варианты фасовки</h4>
                  <Box sx={{ mb: 3, mt: 1, display: 'flex', gap: 1 }}>{renderTares()}</Box>
                  <Box sx={{ mb: 3, mt: 1 }} dangerouslySetInnerHTML={{ __html: data?.usage }} />
                  <Box sx={{ mb: 3, mt: 1 }} dangerouslySetInnerHTML={{ __html: data?.advantages }} />
                  <Box sx={{ mb: 3, mt: 1 }} dangerouslySetInnerHTML={{ __html: data?.specifications }} />

                  <h4>Характеристики</h4>
                  <TableContainer component={Paper} sx={{ mt: 1 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
                          <TableCell sx={{ fontWeight: '900', fontSize: '18px' }} align="center">
                            Показатель
                          </TableCell>
                          <TableCell sx={{ fontWeight: '900', fontSize: '18px' }} align="center">
                            Метод испытания
                          </TableCell>
                          <TableCell sx={{ fontWeight: '900', fontSize: '18px' }} align="center">
                            Значение
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {createData().map((row, id) => (
                          <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="center" component="th" scope="row">
                              {row.indicator}
                            </TableCell>
                            <TableCell align="center">{row.method}</TableCell>
                            <TableCell align="center">{row.value}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Box>

      <Box sx={{ mt: 4 }}>
        <FeedbackBlock />
      </Box>
    </main>
  );
}
