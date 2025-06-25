'use client';

import React, { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Card, Grid, tabClasses, Divider, Tab, Tabs } from '@mui/material';

import SectionTitle from '@/components/SectionTitle/SectionTitle';
import OnlyTextLogo from '@/components/SvgIcons/OnlyTextLogo';
import TextLogo from '@/components/SvgIcons/TextLogo';
import Logo from '@/components/SvgIcons/Logo';
import AboutTab from './Tabs/AboutTab';
import NewsTab from './Tabs/NewsTab';
import ProductionTab from './Tabs/ProductionTab';
import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';
import HeaderSection from '@/components/HeaderSection';
import EkoilTextOutlinedIcon from '@/components/SvgIcons/EkoilTextOutlinedIcon';
import HeaderLogo from '@/components/SvgIcons/HeaderLogo';
import oilTara from '@/app/assets/AboutPage/oil-tara.jpg';
import ChartIcon from '@/components/SvgIcons/ChartIcon';
import CalendarIcon from '@/components/SvgIcons/CalendarIcon';
import ListIcon from '@/components/SvgIcons/ListIcon';
import LabIcon from '@/components/SvgIcons/LabIcon';

import styled from '@emotion/styled';

const achievements = [
  {
    title: '30 000 тонн',
    description: 'мощность комплекса в год',
    icon: ChartIcon
  },
  {
    title: '15 + стран',
    description: 'география поставок',
    icon: CalendarIcon
  },
  {
    title: '200+ продукции',
    description: 'наименований в ассортименте',
    icon: ListIcon
  },
  {
    title: 'Контроль качества',
    description: 'в собственной лаборатории',
    icon: LabIcon
  }
];

export default function Production() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <main>
      <Box>
        <HeaderSection title="О компании" />

        <Box
          sx={(theme) => ({
            backgroundColor: '#F4F6F8',
            px: 10,
            pb: 10,

            [theme.breakpoints.down('md')]: {
              px: 4,
              pb: 5
            },

            [theme.breakpoints.down('sm')]: {
              px: 2
            }
          })}
        >
          <Box
            sx={(theme) => ({
              py: 12,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'flex-end',
              mb: 10,

              [theme.breakpoints.down('md')]: {
                mb: 0,
                py: 4
              }
            })}
          >
            <Box
              sx={(theme) => ({
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '100%',
                zIndex: 0,

                [theme.breakpoints.down('md')]: {
                  display: 'none'
                }
              })}
            >
              <EkoilTextOutlinedIcon />
            </Box>

            <Typography
              variant="body1"
              color="initial"
              sx={(theme) => ({
                fontSize: '28px',
                fontWeight: '900',
                zIndex: 1,
                position: 'relative',
                maxWidth: '70%',
                mb: 4,

                [theme.breakpoints.down('md')]: {
                  maxWidth: '100%',
                  fontSize: '21px'
                }
              })}
            >
              <Typography variant="span" color="red" fontWeight="700">
                EKOIL Lubricants
              </Typography>
              — один из крупных производителей смазочных материалов в Республике Башкортостан, обладающий собственной
              технологической и производственной базой для выпуска широкого ассортимента продукции.
            </Typography>

            <Typography
              variant="body2"
              color="red"
              sx={(theme) => ({
                fontSize: '24px',
                zIndex: 1,
                position: 'relative',
                lineHeight: '24px',
                fontWeight: 700,

                [theme.breakpoints.down('md')]: {
                  fontSize: '18px'
                },

                '&:before': {
                  content: '""',
                  position: 'absolute',
                  left: '-120px',
                  top: '60%',
                  transform: 'translateY(-50%)',
                  width: '100px',
                  height: '2px',
                  backgroundColor: 'red'
                },

                [theme.breakpoints.down('sm')]: {
                  '&:before': {
                    display: 'none'
                  }
                }
              })}
            >
              мы подберем Вам оптимальный продукт
            </Typography>
          </Box>

          <Box
            sx={(theme) => ({
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 6,
              borderRadius: '24px',
              overflow: 'hidden',

              [theme.breakpoints.down('md')]: {
                flexDirection: 'column',
                gap: 3
              }
            })}
          >
            <Box
              sx={(theme) => ({
                backgroundImage: `url(${oilTara.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '550px',
                width: '100%',
                flex: '1 1 50%',

                [theme.breakpoints.down('md')]: {
                  minHeight: '350px'
                }
              })}
            ></Box>

            <Box sx={{ flex: '1 1 50%' }}>
              <HeaderLogo width={isMobile ? '200' : '400'} height={isMobile ? '50' : '100'} />

              <Typography variant="body1" sx={{ mb: 1 }}>
                Мы объединили современные российские и иностранные технологии в сфере производства смазочных материалов
                для получения премиальных высокотехнологичных масел, закрывающих потребность во всех сферах.
              </Typography>

              <Typography variant="body1">
                Использование собственных разработок вместе c сырьевой базой позволяет производить продукцию,
                соответствующую требованиям ведущих мировых производителей техники и международных профессиональных
                Ассоциаций — API, ACEA, SAE, ILSAC, DIN и др.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={(theme) => ({
            display: 'flex',
            gap: 2,
            backgroundColor: '#fff',
            p: 4,
            borderRadius: '24px',
            maxWidth: '1280px',
            margin: '0 auto',

            [theme.breakpoints.down('md')]: {
              flexDirection: 'column',
              mt: 5,
              gap: 4
            },

            [theme.breakpoints.down('sm')]: {
              mt: 3
            }
          })}
        >
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <Box
                sx={{
                  flex: '25%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column'
                }}
              >
                <Icon />

                <Typography
                  variant="h5"
                  sx={(theme) => ({
                    mb: 1,
                    mt: 3,
                    fontWeight: '800',
                    textAlign: 'center',

                    [theme.breakpoints.down('sm')]: {
                      fontSize: '16px',
                      mt: 2
                    }
                  })}
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="body2"
                  sx={(theme) => ({
                    textAlign: 'center',

                    [theme.breakpoints.down('sm')]: {
                      fontSize: '14px'
                    }
                  })}
                >
                  {item.description}
                </Typography>
              </Box>
            );
          })}
        </Box>

        <Box
          sx={(theme) => ({
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: '#F4F6F8',
            px: 10,
            py: 10,

            [theme.breakpoints.down('md')]: {
              px: 4,
              py: 5
            },

            [theme.breakpoints.down('sm')]: {
              px: 2,
              gap: 3,
              flexDirection: 'column'
            }
          })}
        >
          <Box
            sx={(theme) => ({
              flex: '0 1 40%',

              [theme.breakpoints.down('sm')]: {
                order: 1
              }
            })}
          >
            <Typography variant="body1" sx={{ mb: 2 }}>
              Последовательная реализация бизнес-стратегии, большой опыт и репутация надёжного поставщика на рынке
              смазочных материалов обеспечивают компании стабильный рост объёмов производства.
            </Typography>

            <Typography variant="body1">
              На сегодняшний день нами достигнута производственная мощность, позволяющая выпускать более
              200 наименований различных видов масел для всех отраслей современной промышленности и автотранспорта.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flex: '0 1 40%'
            }}
          >
            <Typography
              variant="body1"
              sx={(theme) => ({
                color: 'red',
                fontSize: '64px',
                fontWeight: 900,

                [theme.breakpoints.down('sm')]: {
                  lineHeight: '64px'
                }
              })}
            >
              30+ лет
            </Typography>

            <Typography variant="body1" sx={{ fontSize: '24px', fontWeight: 800 }}>
              на рынке
            </Typography>
          </Box>
        </Box>
      </Box>
      <FeedbackBlock />
    </main>
  );
}
