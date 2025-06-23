'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Grid,
  Typography,
  Button,
  Accordion,
  AccordionActions,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import OnlyTextLogo from '@/components/SvgIcons/OnlyTextLogo';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import SearchIcon from '@/components/SvgIcons/SearchIcon';
import OilsIcon from '@/components/SvgIcons/OilsIcon';
import ChartIcon from '@/components/SvgIcons/ChartIcon';
import CalendarIcon from '@/components/SvgIcons/CalendarIcon';
import ListIcon from '@/components/SvgIcons/ListIcon';
import LabIcon from '@/components/SvgIcons/LabIcon';
import SertificateIcon from '@/components/SvgIcons/SertificateIcon';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ActionButton from '../HeroSection/ActionButton/ActionButton';
import AboutTabs from './AboutTabs/AboutTabs';
import Engine from '@/app/assets/engine.json';
import GroupIcon from '@mui/icons-material/Group';
import DescriptionIcon from '@mui/icons-material/Description';
import CommuteIcon from '@mui/icons-material/Commute';
import BoltIcon from '@mui/icons-material/Bolt';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsIcon from '@mui/icons-material/Settings';
import PeopleIcon from '@mui/icons-material/People';
import EngineeringIcon from '@mui/icons-material/Engineering';
import Logo from '@/components/SvgIcons/Logo';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import factory from '@/app/assets/factory.jpg';
import factory2 from '@/app/assets/factory2.jpg';
import ekoilAbout from '@/app/assets/ekoil-about.jpg';

import { styled } from '@mui/system';

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

export default function About() {
  const [accordions, setAccordions] = useState([
    {
      id: 1,
      expanded: true,
      title: 'Cоответствует требованиям ведущих производителей техники и оборудования',
      text: 'Масла EKOIL LUBRICANTS разрабатываются с учётом современных требований ведущих производителей техники, а также поставляются на конвейере отечественных автопроизводителей.'
    },
    {
      id: 2,
      expanded: false,
      title: 'Для всех отраслей экономики',
      text: 'Широкий ассортимент продукции насчитывает более 200 наименований масел в совокупности для всех отраслей промышленности'
    },
    {
      id: 3,
      expanded: false,
      title: 'Современный пакет присадок',
      text: 'Длительная стабильность вязкости, отличные моющие средства, превосходные антиокислительные и термические показатели, позволяющие снизить скорость старения масла'
    },
    {
      id: 4,
      expanded: false,
      title: 'Гарантия качества',
      text: 'Вся продукция обладает сертификатами, подтверждающими заявленные характеристики'
    }
  ]);

  return (
    <>
      <Box
        sx={(theme) => ({
          px: 10,

          [theme.breakpoints.down('md')]: {
            px: 4
          },

          [theme.breakpoints.down('sm')]: {
            px: 2
          }
        })}
      >
        <Typography
          variant="h6"
          fontWeight="900"
          sx={{
            mb: 4,
            textTransform: 'uppercase',
            position: 'relative',
            display: 'inline-block',

            '&:after': {
              content: '""',
              position: 'absolute',
              right: '-80%',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '80px',
              height: '1px',
              backgroundColor: '#000'
            }
          }}
        >
          О компании
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: 2,
            flexWrap: 'wrap',
            mb: 6
          }}
        >
          <Typography variant="body1" sx={{ fontSize: '68px', fontWeight: '900', lineHeight: '68px' }}>
            <Typography variant="span" sx={{ color: '#CC2828' }}>
              EKOIL
            </Typography>{' '}
            <br />
            <Typography variant="span" sx={{ color: '#1E284B' }}>
              Lubricants
            </Typography>
          </Typography>

          <Typography variant="body1" sx={{ fontSize: '26px', fontWeight: '800', lineHeight: '32px' }}>
            <Typography variant="span" sx={{ color: '#1E284B' }}>
              Качество, которому
            </Typography>{' '}
            <br />
            <Typography variant="span" sx={{ color: '#CC2828' }}>
              можно доверять
            </Typography>
          </Typography>
        </Box>

        <Box
          sx={(theme) => ({
            display: 'flex',
            gap: 4,

            [theme.breakpoints.down('md')]: {
              flexDirection: 'column'
            }
          })}
        >
          <Box
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              borderRadius: '8px',
              flex: 1,

              [theme.breakpoints.down('md')]: {
                flexDirection: 'row'
              },

              [theme.breakpoints.down('sm')]: {
                flexDirection: 'column'
              }
            })}
          >
            <Box
              sx={(theme) => ({
                backgroundImage: `url(${factory.src})`,
                height: '340px',
                borderRadius: '24px',

                [theme.breakpoints.down('md')]: {
                  flex: '1 1 50%'
                },

                [theme.breakpoints.down('sm')]: {
                  flex: 'none'
                }
              })}
            ></Box>

            <Box
              sx={(theme) => ({
                [theme.breakpoints.down('md')]: {
                  flex: '1 1 50%'
                }
              })}
            >
              <Typography variant="body1" color="initial" sx={{ mb: 1 }}>
                <Typography variant="span" color="red" fontWeight="900">
                  EKOIL LUBRICANTS
                </Typography>{' '}
                основан в 1995 году и первоначально занималась научно-исследовательской деятельностью в сфере
                нефтехимии.
              </Typography>

              <Typography variant="body1" color="initial">
                По мере накопления базы знаний и опыта в данной сфере начали формироваться первые предложения
                продуктовой линейки смазочных материалов, соответствующие запросу рынка того времени.
              </Typography>

              <Link href="/company">
                <Button
                  variant="contained"
                  disableElevation
                  size="large"
                  endIcon={<ArrowOutwardIcon />}
                  sx={(theme) => ({
                    py: 2,
                    px: 4,
                    mt: 4,
                    backgroundColor: '#1E284B',
                    borderRadius: '12px',
                    fontWeight: '800',

                    [theme.breakpoints.down('sm')]: {
                      width: '100%'
                    }
                  })}
                >
                  Узнать больше
                </Button>
              </Link>
            </Box>
          </Box>

          <Box
            sx={(theme) => ({
              backgroundImage: `url(${factory2.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              p: 3,
              flex: 1,
              borderRadius: '24px',
              backgroundColor: '#ccc',

              [theme.breakpoints.down('md')]: {
                minHeight: '400px'
              },

              [theme.breakpoints.down('sm')]: {
                display: 'none'
              }
            })}
          />
        </Box>

        <Box
          sx={(theme) => ({
            display: 'flex',
            gap: 2,
            mt: 10,
            backgroundColor: '#F4F6F8',
            p: 4,
            borderRadius: '24px',

            [theme.breakpoints.down('md')]: {
              flexDirection: 'column',
              mt: 5,
              gap: 4
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
      </Box>

      <Box
        sx={(theme) => ({
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          pl: '5%',
          mt: 10,
          width: '100%',
          height: '1200px',
          backgroundImage: `url(${ekoilAbout.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',

          [theme.breakpoints.down('sm')]: {
            pr: '5%',
            height: '600px'
          }
        })}
      >
        <Box>
          {accordions.map((item, index) => (
            <Accordion
              key={item.id}
              expanded={item.expanded}
              onChange={(event, expanded) => {
                setAccordions((prev) => {
                  return prev.map((accordionItem) => {
                    if (accordionItem.id === item.id) {
                      return { ...accordionItem, expanded };
                    }

                    return accordionItem;
                  });
                });
              }}
              sx={{
                maxWidth: '540px',
                transition: '0.3s ease',
                backgroundColor: item.expanded ? '#CC2828' : 'rgba(255,255,255, 0.1)',
                backdropFilter: 'blur(25px)',
                borderRadius: '16px !important',
                mb: 2
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ fill: '#fff', fontSize: 32 }} />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography
                  component="span"
                  sx={(theme) => ({
                    fontSize: '20px',
                    fontWeight: '900',
                    color: '#fff',
                    padding: '24px',

                    [theme.breakpoints.down('sm')]: {
                      padding: '12px',
                      fontSize: '16px'
                    }
                  })}
                >
                  {item.title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails
                sx={(theme) => ({
                  fontSize: '16px',
                  color: '#fff',

                  [theme.breakpoints.down('sm')]: {
                    padding: '12px',
                    fontSize: '14px'
                  }
                })}
              >
                {item.text}
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </>
  );
}
