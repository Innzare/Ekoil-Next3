'use client';

import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import BoltIcon from '@mui/icons-material/Bolt';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import Barrel from '@/components/SvgIcons/Barrel';
import Molecule from '@/components/SvgIcons/Molecule';
import Lab from '@/components/SvgIcons/Lab';
import Factory from '@/components/SvgIcons/Factory';
import Money from '@/components/SvgIcons/Money';
import Time from '@/components/SvgIcons/Time';

const FEATURES = [
  {
    icon: Molecule,
    title: 'Современные пакеты присадок',
    text: 'Ведущих мировых производителей'
  },
  {
    icon: Barrel,
    title: 'Высококачественные базовые масла',
    text: '(PAO, VHVI)'
  },
  {
    icon: Lab,
    title: 'Собственная лаборатория',
    text: 'Контроль качества сырья и выпускаемой продукции на всех этапах'
  },
  {
    icon: Factory,
    title: 'Гибкость завода',
    text: 'Разработка новых продуктов и рецептур, соответствующих запросу рынка'
  },
  {
    icon: Money,
    title: 'Приемлемая цена',
    text: 'При том же качестве по сравнению с мировыми брендами'
  },
  {
    icon: Time,
    title: 'Большой опыт работы',
    text: 'Более 25 лет на рынке смазочных материалов'
  }
];

export default function Advantages() {
  return (
    <Box
      sx={{
        // background: '#0575E6',
        // background: '-webkit-linear-gradient(to right, #021B79, #0575E6)',
        // background: 'linear-gradient(to right, #021B79, #0575E6)',
        background: '#000428',
        background: '-webkit-linear-gradient(to right, #004e92, #000428)',
        background: 'linear-gradient(to right, #004e92, #000428)',
        mx: -4,
        px: 4,
        py: 6
      }}
    >
      <SectionTitle isLight text="Наши преимущества" />

      <Grid container spacing={4} alignItems="center">
        {FEATURES.map((feature) => {
          const Icon = feature.icon;

          return (
            <Grid item xs={4}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  p: 3
                }}
              >
                <Icon fontSize="large" color="red" />
                <Typography variant="h6" color="#fff" fontWeight="700" sx={{ mt: 2, mb: 1 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body" color="#aaa" fontWeight="500" align="center">
                  {feature.text}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
