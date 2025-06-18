'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Card, Tab, Tabs, Tooltip, Typography } from '@mui/material';
// import { useRouter, useParams, useSearchParams } from 'next/navigation';
// import SectionTitle from '@/components/SectionTitle/SectionTitle';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';
// import FileDownloadIcon from '@mui/icons-material/FileDownload';

// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';

// import HideImageOutlinedIcon from '@mui/icons-material/HideImageOutlined';
// import CircularProgress from '@mui/material/CircularProgress';
// import Skeleton from '@mui/material/Skeleton';
import HeaderSection from '@/components/HeaderSection';

// import axios from 'axios';

export default function CatalogItem() {
  // const router = useRouter();
  // const params = useParams();
  // const searchParams = useSearchParams();

  // const [isLoading, setIsLoading] = useState(false);
  // const [data, setData] = useState(null);
  // const [tabValue, setTabValue] = useState(0);

  // useEffect(() => {
  //   loadOil();

  //   // const product = ITEMS.find((item) => item.id === Number(params.id));
  //   // setData(product);
  // }, []);

  // const loadOil = async () => {
  //   setIsLoading(true);

  //   const { data } = await axios.get(`/api/products/search/${params.id}`);

  //   setData(data);
  //   setIsLoading(false);
  // };

  // const onGoBackClick = () => {
  //   router.back();
  // };

  // const handleChange = (event, newValue) => {
  //   setTabValue(newValue);
  // };

  // function TabPanel(props) {
  //   const { children, value, index, ...other } = props;

  //   return (
  //     <div
  //       role="tabpanel"
  //       hidden={value !== index}
  //       id={`vertical-tabpanel-${index}`}
  //       aria-labelledby={`vertical-tab-${index}`}
  //       {...other}
  //     >
  //       {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
  //     </div>
  //   );
  // }

  // function createData() {
  //   if (data) {
  //     return data.characteristics.map((item) => {
  //       const { indicator, method, value } = item;

  //       return { indicator, method, value };
  //     });
  //   }
  //   return [];
  // }

  // const onDownloadTDSClick = () => {
  //   // Создаем ссылку для скачивания
  //   const link = document.createElement('a');
  //   link.href = data.documents[0].url; // Указываем URL файла
  //   link.download = 'oil'; // Указываем имя файла
  //   link.target = '_blank'; // Открываем в новом окне (если нужно)
  //   document.body.appendChild(link); // Добавляем ссылку в DOM
  //   link.click(); // Кликаем по ссылке для начала скачивания
  //   document.body.removeChild(link);
  // };

  // const renderTares = () => {
  //   if (data) {
  //     return data.tare.map((tare) => tare.name).join(' / ');
  //   }

  //   return '';
  // };

  // const imageUrl = () => {
  //   if (data) {
  //     return data?.images[0]?.url;
  //   }

  //   return null;
  // };

  return (
    <main>
      <HeaderSection title="Каталог EKOIL" />

      {/* <Box sx={{ p: 3 }}>
        <Tooltip title="Назад">
          <Button
            sx={{ mb: 4 }}
            onClick={onGoBackClick}
            variant="contained"
            disableElevation
            size="small"
            color="primary"
          >
            <ArrowBackIcon />
          </Button>
        </Tooltip>

        <Box>
          {isLoading ? (
            <Box>
              <Skeleton variant="text" sx={{ fontSize: '1rem' }} height={50} />

              <Box sx={{ display: 'flex', gap: 5 }}>
                <Skeleton variant="rounded" width="100%" height={500} />

                <Box>
                  <Skeleton variant="rounded" width="100%" height={50} />
                  <Skeleton variant="rounded" width="100%" height={50} />
                  <Skeleton variant="rounded" width="100%" height={300} />
                </Box>
              </Box>
            </Box>
          ) : (
            <>
              <Box sx={{ display: 'flex', gap: '8px', justifyContent: 'space-between' }}>
                <SectionTitle text={`${data?.name} ${data?.subtitle || ''}`} />

                <Box sx={{ display: 'flex', gap: '8px' }}>
                  <Button
                    sx={{ mb: 4 }}
                    onClick={onDownloadTDSClick}
                    variant="contained"
                    disableElevation
                    size="small"
                    color="primary"
                  >
                    <Typography fontWeight={900} sx={{ mr: 2 }}>
                      Скачать TDS
                    </Typography>
                    <FileDownloadIcon />
                  </Button>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    minWidth: '500px',
                    height: '500px'
                  }}
                >
                  {imageUrl() ? (
                    <img
                      src={imageUrl()}
                      alt={data?.name}
                      width="500"
                      height="500"
                      style={{
                        filter: 'drop-shadow(0px 10px 8px rgba(0,0,0,0.5))'
                      }}
                    />
                  ) : (
                    <HideImageOutlinedIcon sx={{ color: '#ccc', fontSize: '96px' }} />
                  )}
                </Box>

                <Box>
                  <h2>Описание</h2>
                  <Box sx={{ mb: 3, mt: 1 }} dangerouslySetInnerHTML={{ __html: data?.description }} />

                  <h2>Варианты фасовки</h2>
                  <Box sx={{ mb: 3, mt: 1 }}>{renderTares()}</Box>

                  <Tabs
                    value={tabValue}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    sx={{
                      width: '100%',
                      backgroundColor: '#f5f5f5',
                      borderTopLeftRadius: '6px',
                      borderTopRightRadius: '6px',

                      '& .Mui-selected': {
                        backgroundColor: '#0052cc1c'
                      }
                    }}
                  >
                    <Tab
                      label="Применение"
                      id={0}
                      sx={{
                        flex: 1,
                        fontWeight: '900'
                      }}
                    />
                    <Tab
                      label="Преимущества"
                      id={1}
                      sx={{
                        flex: 1,
                        fontWeight: '900'
                      }}
                    />
                    <Tab
                      label="Спецификации"
                      id={2}
                      sx={{
                        flex: 1,
                        fontWeight: '900'
                      }}
                    />
                    <Tab
                      label="Характеристики"
                      id={3}
                      sx={{
                        flex: 1,
                        fontWeight: '900'
                      }}
                    />
                  </Tabs>

                  <Box
                    sx={{
                      border: '2px solid #f5f5f5',
                      borderBottomLeftRadius: '6px',
                      borderBottomRightRadius: '6px'
                    }}
                  >
                    <TabPanel value={tabValue} index={0}>
                      <Box sx={{ mb: 3, mt: 1 }} dangerouslySetInnerHTML={{ __html: data?.usage }} />
                    </TabPanel>

                    <TabPanel value={tabValue} index={1}>
                      <Box sx={{ mb: 3, mt: 1 }} dangerouslySetInnerHTML={{ __html: data?.advantages }} />
                    </TabPanel>

                    <TabPanel value={tabValue} index={2}>
                      <Box sx={{ mb: 3, mt: 1 }} dangerouslySetInnerHTML={{ __html: data?.specifications }} />
                    </TabPanel>

                    <TabPanel value={tabValue} index={3}>
                      <TableContainer component={Paper}>
                        <Table sx={{ width: '100%' }} aria-label="simple table">
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
                    </TabPanel>
                  </Box>
                </Box>
              </Box>
            </>
          )}
        </Box>
      </Box> */}

      <Box sx={{ mt: 4 }}>
        <FeedbackBlock />
      </Box>
    </main>
  );
}
