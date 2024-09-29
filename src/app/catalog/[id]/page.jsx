'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Card, Tab, Tabs, Tooltip, Typography } from '@mui/material';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';
import EmailIcon from '@mui/icons-material/Email';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { ITEMS } from '@/consts/products';

export default function CatalogItem() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();

  const [data, setData] = useState(null);
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    const product = ITEMS.find((item) => item.id === Number(params.id));

    console.log(params.id);

    setData(product);
  }, []);

  const onGoBackClick = () => {
    router.back();
  };

  const handleChange = (event, newValue) => {
    setTabValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function createData(indication, method, value) {
    return { indication, method, value };
  }

  const rows = [
    createData('Плотность при 15°C, кг/м3', 'ASTM D1298', 842),
    createData('Вязкость кинематическая при 100°C, мм /с', 'ASTM D445', 10.3),
    createData('Вязкость кинематическая при 40°C, мм /с', 'ASTM D445', 62),
    createData('Индекс вязкости', 'ASTM D2270', 179),
    createData('Температура застывания, °C', 'ASTM D97', -40),
    createData('Температура вспышки в открытом тигле, °C', 'ASTM D92', 224),
    createData('Щелочное число, мг КОН/г', 'ASTM D2896', 11.1),
    createData('Сульфатная зольность, %', 'ASTM D874', 1.2),
    createData('Испаряемость по методу NOACK, %', 'ASTM D5800', 0, 2)
  ];

  return (
    <main>
      <Box>
        <Card sx={{ p: 3 }} elevation={3}>
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

          <Box sx={{ display: 'flex', gap: '8px', justifyContent: 'space-between' }}>
            <SectionTitle text={`${data?.name} ${data?.subtitle}`} />

            <Box sx={{ display: 'flex', gap: '8px' }}>
              <Button
                sx={{ mb: 4 }}
                onClick={onGoBackClick}
                variant="contained"
                disableElevation
                size="small"
                color="primary"
              >
                <Typography fontWeight={900} sx={{ mr: 2 }}>
                  Скачать PDF
                </Typography>
                <PictureAsPdfIcon />
              </Button>
              <Button
                sx={{ mb: 4 }}
                onClick={onGoBackClick}
                variant="contained"
                disableElevation
                size="small"
                color="primary"
              >
                <Typography fontWeight={900} sx={{ mr: 2 }}>
                  Отправить PDF на почту
                </Typography>
                <EmailIcon />
              </Button>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', gap: '40px', alignItems: 'flex-start' }}>
            <Box sx={{ backgroundColor: '#f5f5f5', borderRadius: '6px' }}>
              <img
                src={data?.img.src}
                alt={data?.name}
                width="500"
                height="500"
                style={{
                  filter: 'drop-shadow(0px 10px 8px rgba(0,0,0,0.5))'
                }}
              />
            </Box>

            <Box>
              <h2>Описание</h2>
              <Box sx={{ mb: 3, mt: 1 }}>{data?.description}</Box>

              <h2>Варианты фасовки</h2>
              <Box sx={{ mb: 3, mt: 1 }}>1 Л, 4 Л, 5 Л, 205 Л</Box>

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

              <Box sx={{ border: '2px solid #f5f5f5', borderBottomLeftRadius: '6px', borderBottomRightRadius: '6px' }}>
                <TabPanel value={tabValue} index={0}>
                  Рекомендовано к всесезонному использованию в бензиновых и дизельных двигателях автомобилей
                  Mercedes-Benz, BMW, Porsche, Volkswagen, Renault как в гарантийный, так и послегарантийный период
                  эксплуатации. Также подходит для применения в двигателях других автопроизводителей, требующих масел
                  уровня API SN, ACEA A3/B4.
                </TabPanel>
                <TabPanel value={tabValue} index={1}>
                  <ul>
                    <li>
                      Препятствует образованию высокотемпературных отложений, что обеспечивает поддержание чистоты
                      деталей и надежную работу двигателя􏰈
                    </li>
                    <li>
                      Защищает от износа, снижают расход масла благодаря высокой стабильности к сдвигу и сохранению
                      масла в своем классе вязкости􏰈
                    </li>
                    <li>
                      Обеспечивает надежный пуск двигателя при низких температурах, быстрое образование необходимой
                      масляной пленки на трущихся парах и защиту деталей двигателя от износа.
                    </li>
                  </ul>
                </TabPanel>
                <TabPanel value={tabValue} index={2}>
                  <Box sx={{ mb: 3, mt: 1 }}>API SP, ILSAC GF-6B</Box>
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
                        {rows.map((row) => (
                          <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="center" component="th" scope="row">
                              {row.indication}
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

          <Box sx={{ mt: 4 }}>
            <FeedbackBlock />
          </Box>
        </Card>
      </Box>
    </main>
  );
}
