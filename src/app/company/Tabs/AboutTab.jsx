'use client';

import React from 'react';
import { Box, Typography } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
// import type { Chrono as ChronoType } from "react-chrono";
import dynamic from 'next/dynamic';

export const Chrono = dynamic(() => import('react-chrono').then((lib) => lib.Chrono), {
  ssr: false
});

export default function AboutTab() {
  const items = [
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk',
      url: 'http://www.history.com',
      cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
      cardDetailedText: 'Men of the British Expeditionary Force (BEF) wade out to..',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://gazpromneft-oil.ru/static/default/img/bg-m.jpg'
        }
      }
    },
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk',
      url: 'http://www.history.com',
      cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
      cardDetailedText: 'Men of the British Expeditionary Force (BEF) wade out to..',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://gazpromneft-oil.ru/static/default/img/bg-m.jpg'
        }
      }
    },
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk',
      url: 'http://www.history.com',
      cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
      cardDetailedText: 'Men of the British Expeditionary Force (BEF) wade out to..',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://gazpromneft-oil.ru/static/default/img/bg-m.jpg'
        }
      }
    },
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk',
      url: 'http://www.history.com',
      cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
      cardDetailedText: 'Men of the British Expeditionary Force (BEF) wade out to..',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://gazpromneft-oil.ru/static/default/img/bg-m.jpg'
        }
      }
    },
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk',
      url: 'http://www.history.com',
      cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
      cardDetailedText: 'Men of the British Expeditionary Force (BEF) wade out to..',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://gazpromneft-oil.ru/static/default/img/bg-m.jpg'
        }
      }
    },
    {
      title: 'May 1940',
      cardTitle: 'Dunkirk',
      url: 'http://www.history.com',
      cardSubtitle: 'Men of the British Expeditionary Force (BEF) wade out to..',
      cardDetailedText: 'Men of the British Expeditionary Force (BEF) wade out to..',
      media: {
        type: 'IMAGE',
        source: {
          url: 'https://gazpromneft-oil.ru/static/default/img/bg-m.jpg'
        }
      }
    }
  ];

  return (
    <Box>
      <SectionTitle text="О компании" />

      <Box>
        <Typography variant="h6" sx={{ mb: 2 }} color="initial">
          Ekoil Lubricants один из крупных производителей смазочных материалов в Республике Башкортостан, обладающий
          собственной технологической и производственной базой для выпуска широкого ассортимента продукции.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2 }} color="initial">
          Мы объединили современные российские и иностранные технологии в сфере производства смазочных материалов для
          получения премиальных высокотехнологичных масел, закрывающих потребность во всех сферах.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2 }} color="initial">
          Производственная площадка Ekoil Lubricants имеет собственную аккредитованную лабораторию, позволяющую
          проводить проверку качества выпускаемой продукции на всех этапах производства.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2 }} color="initial">
          Наша стратегическая цель – это обеспечение эффективного и безопасного функционирования Вашей техники. Поэтому
          мы нацелены на создание премиальных и эффективных смазочных материалов, идеально работающих во всех агрегатах
          техники – в двигателях, трансмиссиях, гидравлических системах, в любых климатических и эксплуатационных
          условиях.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2 }} color="initial">
          Соответствие продукции мировым стандартам подтверждается тем, что Ekoil выбирают крупнейшие отечественные
          производители техники, такие как: - ПАО «КАМАЗ». - ПАО «НЕФАЗ». - АО «Русская механика».
        </Typography>
      </Box>

      <SectionTitle text="История развития" />

      <Chrono items={items} mode="VERTICAL_ALTERNATING" disableToolbar />
    </Box>
  );
}
