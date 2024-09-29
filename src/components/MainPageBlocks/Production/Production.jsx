'use client';

import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { styled } from '@mui/system';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import DigitsCounter from '@/components/DigitsCounter/DigitsCounter';
import FactoryIcon from '@mui/icons-material/Factory';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ScienceIcon from '@mui/icons-material/Science';
import OilsIcon from '@/components/SvgIcons/OilsIcon';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';

export default function Production() {
  return (
    <Box
      sx={
        {
          // backgroundSize: 'cover',
          // backgroundPosition: 'center',
          // backgroundImage: `url('https://gazpromneft-oil.ru/static/default/img/bg-m.jpg')`
        }
      }
    >
      <SectionTitle text="Производство" />

      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'stretch',
          gap: 4,
          mb: 4
        }}
      >
        <Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            <Typography
              variant="body"
              color="#000"
              fontWeight="500"
              sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 2 }}
            >
              <FactoryIcon color="primary" fontSize="large" />
              Масла под брендом EKOIL Lubricants производятся на производственной площадке в Уфе (Республика
              Башкортостан).
            </Typography>

            <Typography
              variant="body"
              color="#000"
              fontWeight="500"
              sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 2 }}
            >
              <FactCheckIcon color="primary" fontSize="large" />
              Система менеджмента Компании и ее производственных активов соответствует требованиям международных
              стандартов ISO 9001.
            </Typography>

            <Typography
              variant="body"
              color="#000"
              fontWeight="500"
              sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 2 }}
            >
              <ScienceIcon color="primary" fontSize="large" /> Собственная аккредитованная лаборатория.
            </Typography>

            <Typography
              variant="body"
              color="#000"
              fontWeight="500"
              sx={{ mb: 1, display: 'flex', alignItems: 'center', gap: 2 }}
            >
              <OilBarrelIcon color="primary" fontSize="large" />
              Многообразие фасовок (1, 4, 5, 20, 30 и 216,5 л) и форм отгрузки (авто и железнодорожным транспортом)
              позволяет выбрать наиболее подходящий и удобный для Вас вариант.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: 6
            }}
          >
            <Box
              color="initial"
              sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'flex-end',
                fontSize: '18px',
                fontWeight: 'bold',
                '& span': {
                  fontSize: '130px',
                  fontWeight: 'bold',
                  color: '#01a4e4'
                },
                '& p': {
                  mb: 6
                }
              }}
            >
              <DigitsCounter val={200} time={7} />
              {/* <span>150</span> */}
              <p>
                наименований <br /> продукции
              </p>
            </Box>

            <Box
              color="initial"
              sx={{
                display: 'flex',
                gap: 2,
                alignItems: 'flex-end',
                fontSize: '18px',
                fontWeight: 'bold',
                '& span': {
                  fontSize: '130px',
                  fontWeight: 'bold',
                  color: '#01a4e4'
                },
                '& p': {
                  mb: 6
                }
              }}
            >
              <DigitsCounter val={30} time={7} />
              {/* <span>100</span> */}
              <p>
                тысяч тонн <br /> продукции в год
              </p>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            minWidth: '500px',
            height: 'auto',
            borderRadius: '6px',
            backgroundImage:
              'url(https://img.freepik.com/free-photo/automated-packaging-line-efficiency-production_91128-4550.jpg?t=st=1711797896~exp=1711801496~hmac=bfbffd045945042722d5371dec92c94cb75f3efc5f5cfda9be22bb75ff0b10a7&w=2000)',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        ></Box>
      </Box>

      <Button variant="outlined" fontSize="large" endIcon={<ArrowForwardIcon />} sx={{ mt: 4, py: 2, px: 4 }}>
        Узнать подробнее
      </Button>
    </Box>
  );
}
