'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Card, Tab, Tabs, Tooltip, Typography } from '@mui/material';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';

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

  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9)
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
                  borderTopRightRadius: '6px'
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
              <TabPanel value={tabValue} index={0}>
                Рекомендовано к всесезонному использованию в бензиновых и дизельных двигателях автомобилей
                Mercedes-Benz, BMW, Porsche, Volkswagen, Renault как в гарантийный, так и послегарантийный период
                эксплуатации. Также подходит для применения в двигателях других автопроизводителей, требующих масел
                уровня API SN, ACEA A3/B4.
              </TabPanel>
              <TabPanel value={tabValue} index={1}>
                <ul>
                  <li>
                    Препятствует образованию высокотемпературных отложений, что обеспечивает поддержание чистоты деталей
                    и надежную работу двигателя􏰈
                  </li>
                  <li>
                    Защищает от износа, снижают расход масла благодаря высокой стабильности к сдвигу и сохранению масла
                    в своем классе вязкости􏰈
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
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                          <TableCell component="th" scope="row">
                            {row.name}
                          </TableCell>
                          <TableCell align="right">{row.calories}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          <TableCell align="right">{row.carbs}</TableCell>
                          <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </TabPanel>
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
