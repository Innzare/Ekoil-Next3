'use client';

import React from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Link from 'next/link';
import {
  Box,
  Grid2 as Grid,
  Typography,
  Divider,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader
} from '@mui/material';
import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';
import HeaderSection from '@/components/HeaderSection';
import WeProduceBlock from '@/components/MainPageBlocks/WeProduce/WeProduceBlock/WeProduceBlock';

import Car from '@/components/SvgIcons/Car';
import CommercialCar from '@/components/SvgIcons/CommercialCar';
import SpecialCar from '@/components/SvgIcons/SpecialCar';
import IndustryIcon from '@/components/SvgIcons/IndustryIcon';
import AntiFreezeIcon from '@/components/SvgIcons/AntiFreezeIcon';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

// import ekoilTara from '@/app/assets/ekoil-tara.png';
// import ekoilTara2 from '@/app/assets/ekoil-tara2.png';
// import ekoilTara3 from '@/app/assets/ekoil-tara3.png';
// import ekoilTara4 from '@/app/assets/ekoil-tara4.png';

import Tara from '@/app/assets/ekoil-tara.png';
import Tara2 from '@/app/assets/ekoil-tara2.png';
import Tara3 from '@/app/assets/ekoil-tara3.png';
import Tara4 from '@/app/assets/ekoil-tara4.png';

import WaterDropIcon from '@mui/icons-material/WaterDrop';
import SettingsIcon from '@mui/icons-material/Settings';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';

const weProduceItems = [
  {
    title: 'Моторные масла',
    icon: Tara
  },
  {
    title: 'Трансмиссионные масла',
    icon: Tara2
  },
  {
    title: 'Индустриальные масла',
    icon: Tara3
  },
  {
    title: 'Антифризы',
    icon: Tara4
  }
];

const PRODUCTS = [
  {
    title: 'Моторные масла',
    text: null,
    link: '',
    icon: WaterDropIcon,
    color: '#1E284B',

    filters: [
      {
        title: 'Для легковых автомобилей',
        text: 'Для бензиновых и дизельных двигателей легковых автомобилей, микроавтобусов, лёгких грузовиков и малоразмерной техники',
        icon: '',

        options: [
          {
            title: 'Вид масла',
            fields: ['Синтетическое', 'Полусинтетическое', 'На основе синтетических технологий', 'Минеральное']
          },
          {
            title: 'Вязкость по SAE',
            fields: ['0W-20', '5W-30', '5W-40', '10W-40', '15W-40']
          },
          {
            title: 'Вид двигателя',
            fields: ['Бензин', 'Дизель']
          }
        ]
      },

      {
        title: 'Для коммерческого транспорта',
        text: 'Для смешанных автопарков, грузовой, автомобильной, строительной техники и автобусов',
        icon: '',

        options: [
          {
            title: 'Вид масла',
            fields: ['Синтетическое', 'Полусинтетическое', 'На основе синтетических технологий', 'Минеральное']
          },
          {
            title: 'Вязкость по SAE',
            fields: ['5W-30', '5W-40', '10W-40', '15W-40']
          },
          {
            title: 'Вид двигателя',
            fields: ['Бензин', 'Дизель', 'Газ']
          }
        ]
      },

      {
        title: 'Для малоразмерной техники',
        text: 'Для использования в двухтактных и четырёхтактных бензиновых двигателях мотоциклов, мопедов, скутеров, снегоходов, квадроциклов, гидроциклов и другой мототехники',
        icon: '',

        options: [
          {
            title: 'Вид масла',
            fields: ['Синтетическое', 'Полусинтетическое', 'Минеральное']
          },
          {
            title: 'Вязкость по SAE',
            fields: ['0W-20', '10W-40']
          },
          {
            title: 'Тип',
            fields: ['2-тактный', '4-тактный']
          }
        ]
      }
    ]
  },

  {
    title: 'Трансмиссионные масла',
    text: 'Для использования в механических и автоматических трансмиссиях легковых автомобилей, микроавтобусов, лёгких грузовиков, грузовых автомобилей и другой мобильной техники',
    link: '',
    icon: SettingsIcon,
    color: '#CC2828',

    filters: [
      {
        title: 'Для легковых автомобилей',
        text: null,
        icon: '',

        options: [
          {
            title: 'Вид масла',
            fields: ['Синтетическое', 'Полусинтетическое', 'Минеральное']
          },
          {
            title: 'Линейка',
            fields: ['ATF', 'CVT', 'TM-4', 'TM-5']
          },
          {
            title: 'Коробка передач',
            fields: ['Автоматическая', 'Механическая', 'Вариатор']
          },
          {
            title: 'Классификация по API',
            fields: ['GL-4', 'GL-5', 'GL-4/GL-5']
          }
        ]
      },

      {
        title: 'Для коммерческого транспорта',
        text: null,
        icon: '',

        options: [
          {
            title: 'Вид масла',
            fields: ['Синтетическое', 'Полусинтетическое', 'Минеральное']
          },
          {
            title: 'Линейка',
            fields: ['ATF', 'TM-4', 'TM-5']
          },
          {
            title: 'Коробка передач',
            fields: ['Автоматическая', 'Механическая']
          },
          {
            title: 'Классификация по API',
            fields: ['GL-4', 'GL-5', 'GL-4/GL-5']
          }
        ]
      },

      {
        title: 'Для малоразмерной техники',
        text: null,
        icon: '',

        options: [
          {
            title: 'Вид масла',
            fields: ['Синтетическое', 'Полусинтетическое', 'Минеральное']
          },
          {
            title: 'Линейка',
            fields: ['ATF', 'TM-4', 'TM-5']
          },
          {
            title: 'Коробка передач',
            fields: ['Автоматическая', 'Механическая']
          },
          {
            title: 'Классификация по API',
            fields: ['GL-4', 'GL-5', 'GL-4/GL-5']
          }
        ]
      }
    ]
  },

  {
    title: 'Индустриальные масла',
    text: 'Масла, предназначенные для применения в различном промышленном оборудовании: гидравлических системах, станках, редукторах, прессах, прокатных станках и т.д.',
    link: '',
    icon: OilBarrelIcon,
    color: '#0052CC',

    filters: [
      {
        title: 'Гидравлические',
        text: null,
        icon: '',

        options: [
          {
            title: 'Вид масла',
            fields: ['Синтетическое', 'Полусинтетическое', 'Минеральное']
          },
          {
            title: 'Линейка',
            fields: ['HVLP', 'HLP', 'Standart', 'ВМГ3']
          },
          {
            title: 'Класс вязкости по ISO',
            fields: ['22', '32', '46', '68', '100']
          }
        ]
      },

      {
        title: 'Турбинные',
        text: null,
        icon: '',

        options: [
          {
            title: 'По назначению',
            fields: ['ТП-22С', 'ТП-30']
          },
          {
            title: 'Применение',
            fields: ['Газовые турбины', 'Подшипники', 'Вспомогательные механизмы турбоагрегатов']
          }
        ]
      },

      {
        title: 'Компрессорные',
        text: null,
        icon: '',

        options: [
          {
            title: 'Вид масла',
            fields: ['Минеральное']
          },
          {
            title: 'Вязкость по SAE',
            fields: ['КП-8С']
          },
          {
            title: 'Применение',
            fields: [
              'Компрессоры динамического типа',
              'Винтовые компрессоры',
              'Вспомогательные механизмы турбоагрегатов'
            ]
          }
        ]
      },

      {
        title: 'Редукторные',
        text: null,
        icon: '',

        options: [
          {
            title: 'Вид масла',
            fields: ['Синтетическое', 'Полусинтетическое', 'Минеральное']
          },
          {
            title: 'Класс вязкости',
            fields: ['68', '100', '150', '220', '320', '460', '680', '1000']
          }
        ]
      }
    ]
  },

  {
    title: 'Антифризы',
    text: 'Охлаждающие низкозамерзающие жидкости, разработанные и изготовленные по современной карбоксилатной технологии и гибридной технологии.',
    link: '',
    icon: AntiFreezeIcon,
    color: '#1E284B',

    filters: [
      {
        title: 'Охлаждающие жидкости',
        text: null,
        icon: '',

        options: [
          {
            title: 'Вид антифриза',
            fields: ['Карбоксилатный', 'Гибридный']
          },
          {
            title: 'Линейка',
            fields: ['G11', 'G12']
          },
          {
            title: 'Цвет',
            fields: ['Зеленый', 'Красный']
          }
        ]
      }
    ]
  }
];

export default function Products() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const renderWeProduceBlocks = () => {
    return weProduceItems.map((item) => {
      return (
        <Grid size={{ xs: 6, sm: 6, md: 3 }} key={item.title}>
          <WeProduceBlock item={item} />
        </Grid>
      );
    });
  };

  return (
    <main>
      <Box>
        <HeaderSection title="Продукция" />

        <Box
          sx={(theme) => ({
            px: 10,
            py: 10,

            [theme.breakpoints.down('md')]: {
              px: 4,
              py: 5
            },

            [theme.breakpoints.down('sm')]: {
              px: 2
            }
          })}
        >
          <Grid container spacing={isMobile ? 2 : 4}>
            {renderWeProduceBlocks()}
          </Grid>
        </Box>

        <Box
          sx={{
            backgroundColor: '#F4F6F8',
            px: 10,
            // py: 10,

            [theme.breakpoints.down('md')]: {
              px: 4
              // pb: 5
            },

            [theme.breakpoints.down('sm')]: {
              px: 2
            }
          }}
        >
          <Box sx={{ maxWidth: '1400px', width: '100%', margin: '0 auto' }}>
            {PRODUCTS.map((item, index) => {
              const Icon = item.icon || (() => <></>);
              const isOdd = index % 2 !== 0;

              return (
                <Box
                  key={item.title}
                  sx={(theme) => ({
                    py: 10,
                    position: 'relative',
                    zIndex: 2,

                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      marginInline: 'calc(50% - 50vw)',
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      zIndex: -1,
                      backgroundColor: isOdd ? '#fff' : 'none'
                    },

                    [theme.breakpoints.down('sm')]: {
                      py: 5
                    }
                  })}
                >
                  <Box
                    sx={() => ({
                      mb: 10,
                      [theme.breakpoints.down('md')]: {
                        mb: 3
                      }
                    })}
                  >
                    <Box
                      sx={(theme) => ({
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: 2,
                        mb: 2,

                        [theme.breakpoints.down('sm')]: {
                          flexDirection: 'column',
                          alignItems: 'stretch',
                          gap: 4
                        }
                      })}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Icon sx={{ fontSize: '32px', fill: item.color, mt: '4px' }} />

                        <Typography
                          variant="h4"
                          fontWeight={800}
                          sx={(theme) => ({
                            [theme.breakpoints.down('sm')]: {
                              fontSize: '24px'
                            }
                          })}
                        >
                          {item.title}
                        </Typography>
                      </Box>

                      <Link href="/catalog">
                        <Button
                          endIcon={<ArrowOutwardIcon />}
                          sx={(theme) => ({
                            backgroundColor: item.color,
                            color: '#fff',
                            borderRadius: '16px',
                            padding: '16px 24px',
                            fontWeight: '800',
                            whiteSpace: 'nowrap',
                            textTransform: 'initial',

                            [theme.breakpoints.down('sm')]: {
                              width: '100%',
                              p: 1
                            }
                          })}
                        >
                          Открыть каталог
                        </Button>
                      </Link>
                    </Box>

                    {item.text && (
                      <Typography variant="body1" sx={{ mb: 3, maxWidth: '730px' }}>
                        {item.text}
                      </Typography>
                    )}
                  </Box>

                  {item.filters.map((filter, index, array) => {
                    return (
                      <>
                        <Box
                          sx={(theme) => ({
                            display: 'flex',
                            gap: 10,

                            [theme.breakpoints.down('md')]: {
                              flexDirection: 'column',
                              gap: 3
                            }
                          })}
                        >
                          <Box sx={{ width: '100%', maxWidth: '400px' }}>
                            <Typography variant="h6" fontWeight={800} sx={{ mb: 1 }}>
                              {filter.title}
                            </Typography>
                            {filter.text && <Typography variant="body2">{filter.text}</Typography>}
                          </Box>

                          <Box
                            sx={(theme) => ({
                              display: 'flex',
                              gap: 4,
                              width: '100%',
                              [theme.breakpoints.down('sm')]: {
                                gap: 1
                              }
                            })}
                          >
                            {filter.options.map((option) => {
                              return (
                                <Box
                                  sx={(theme) => ({
                                    display: 'flex',
                                    flexDirection: 'column',

                                    [theme.breakpoints.down('sm')]: {
                                      flexWrap: 'wrap'
                                    }
                                  })}
                                >
                                  <List
                                    component="ul"
                                    dense
                                    subheader={
                                      <ListSubheader
                                        component="div"
                                        id="nested-list-subheader"
                                        sx={{
                                          background: 'transparent',
                                          fontSize: '16px',
                                          fontWeight: 700,
                                          color: '#000'
                                        }}
                                      >
                                        {option.title}
                                      </ListSubheader>
                                    }
                                  >
                                    {option.fields.map((field) => {
                                      return (
                                        <ListItemButton sx={{ borderRadius: '8px', my: 1 }}>
                                          <ListItemText primary={field} />
                                        </ListItemButton>
                                      );
                                    })}
                                  </List>
                                </Box>
                              );
                            })}
                          </Box>
                        </Box>

                        {index < array.length - 1 && <Divider sx={{ my: 4 }}></Divider>}
                      </>
                    );
                  })}
                </Box>
              );
            })}
          </Box>
        </Box>

        <FeedbackBlock />
      </Box>
    </main>
  );
}
