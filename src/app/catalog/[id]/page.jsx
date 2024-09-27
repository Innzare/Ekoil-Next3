'use client';

import React, { useEffect, useState } from 'react';
import { Box, Button, Card, Tooltip, Typography } from '@mui/material';
import { useRouter, useParams, useSearchParams } from 'next/navigation';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';

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

          <Box sx={{ display: 'flex', gap: '40px' }}>
            <img
              src={data?.img.src}
              alt={data?.name}
              width="500"
              height="500"
              style={{
                filter: 'drop-shadow(0px 10px 8px rgba(0,0,0,0.5))'
              }}
            />

            <Box>
              <h2>Описание</h2>
              <Box sx={{ mb: 3, mt: 1 }}>{data?.description}</Box>

              <h2>Область прменения</h2>
              <Box sx={{ mb: 3, mt: 1 }}>
                Рекомендовано к всесезонному использованию в бензиновых и дизельных двигателях автомобилей
                Mercedes-Benz, BMW, Porsche, Volkswagen, Renault как в гарантийный, так и послегарантийный период
                эксплуатации. Также подходит для применения в двигателях других автопроизводителей, требующих масел
                уровня API SN, ACEA A3/B4.
              </Box>

              <h2>Преимущества</h2>
              <Box sx={{ mb: 3, mt: 1 }}>
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
              </Box>

              <h2>Спецификации</h2>
              <Box sx={{ mb: 3, mt: 1 }}>API SP, ILSAC GF-6B</Box>

              <h2>Варианты фасовки</h2>
              <Box sx={{ mb: 3, mt: 1 }}>1 Л, 4 Л, 5 Л, 205 Л</Box>
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
