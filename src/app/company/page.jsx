'use client';

import React, { useRef, useState } from 'react';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { Box, Typography, IconButton, Grid2, Button } from '@mui/material';

import { Swiper as SwiperMUI, SwiperSlide as SwiperSlideMUI } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import slider1 from '@/app/assets/AboutPage/slider1.png';
import slider2 from '@/app/assets/AboutPage/slider2.jpg';
import slider3 from '@/app/assets/AboutPage/slider3.jpg';
import oilTara from '@/app/assets/AboutPage/oil-tara.jpg';
import factory from '@/app/assets/factory.jpg';
import timeline1 from '@/app/assets/Timeline/timeline1.jpg';
import timeline2 from '@/app/assets/Timeline/timeline2.jpg';
import timeline3 from '@/app/assets/Timeline/timeline3.jpg';
import timeline4 from '@/app/assets/Timeline/timeline4.jpg';
import timeline5 from '@/app/assets/Timeline/timeline5.jpg';
import timeline6 from '@/app/assets/Timeline/timeline6.jpg';
import timeline7 from '@/app/assets/Timeline/timeline7.jpg';
import timeline8 from '@/app/assets/Timeline/timeline8.jpg';
import timeline9 from '@/app/assets/Timeline/timeline9.jpg';
import timeline10 from '@/app/assets/Timeline/timeline10.jpg';
import timeline11 from '@/app/assets/Timeline/timeline11.jpg';
import production1 from '@/app/assets/Production/production1.jpg';
import production2 from '@/app/assets/Production/production2.jpg';
import FeedbackBackground from '@/app/assets/FeedbackBackground.jpg';
import map from '@/app/assets/map.png';

import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';
import HeaderSection from '@/components/HeaderSection';
import EkoilTextOutlinedIcon from '@/components/SvgIcons/EkoilTextOutlinedIcon';
import HeaderLogo from '@/components/SvgIcons/HeaderLogo';
import ChartIcon from '@/components/SvgIcons/ChartIcon';
import MoleculeIcon from '@/components/SvgIcons/MoleculeIcon';
import CalendarIcon from '@/components/SvgIcons/CalendarIcon';
import ListIcon from '@/components/SvgIcons/ListIcon';
import LabIcon from '@/components/SvgIcons/LabIcon';
import FactoryIcon from '@mui/icons-material/Factory';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

import styled from '@emotion/styled';
import Link from 'next/link';

export const Swiper = styled(SwiperMUI)(({ theme }) => ({
  width: '100%',
  height: '390px',
  flex: '1',

  [theme.breakpoints.down('sm')]: {
    // height: '200px'
  }
}));

export const SwiperSlide = styled(SwiperSlideMUI)(({ theme }) => ({
  // display: 'flex',
  // justifyContent: 'center',
  // alignItems: 'center',
  // // backgroundColor: '#ccc',
  // borderRadius: '8px',
  // overflow: 'hidden',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover'
  }
}));

const ACHIEVMENTS = [
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

const REASONS = [
  {
    title: 'Современные пакеты присадок',
    text: 'Ведущих мировых производителей',
    icon: MoleculeIcon
  },
  {
    title: 'Высококачественные базовые масла',
    text: 'PAO, VHVI',
    icon: OilBarrelIcon
  },
  {
    title: 'Собственная лаборатория',
    text: 'Контроль качества сырья и выпускаемой продукции на всех этапах',
    icon: LabIcon
  },
  {
    title: 'Гибкость завода',
    text: 'Разработка новых продуктов и рецептур, соответствующих запросу рынка',
    icon: FactoryIcon
  },
  {
    title: 'Приемлемая цена',
    text: 'При том же качестве по сравнению с мировыми брендами',
    icon: MonetizationOnIcon
  },
  {
    title: 'Большой опыт работы',
    text: 'Более 25 лет на рынке смазочных материалов',
    icon: ChartIcon
  }
];

const TIMELINE = [
  {
    title: 'Год основания Компании',
    text: 'История компании «Экойл» начинается с 1995 года с создания маленького производственного кооператива, выпускающего небольшой ассортимент моторных масел.',
    year: '1995',
    image: timeline1.src
  },
  {
    title: 'Начало выпуска моторных масел',
    text: 'Год за годом компания осваивала производство различных видов смазочных материалов, используя инновационные методики и опираясь на разработки ведущих производителей присадок.',
    year: '1997',
    image: timeline2.src
  },
  {
    title: 'Начало выпуска трансмиссионных и индустриальных масел',
    text: null,
    year: '1998',
    image: timeline3.src
  },
  {
    title: 'Налажено производство смазочных материалов для всех основных отраслей промышленности',
    text: 'За последние годы значительно расширена материально-техническая база предприятия, закуплено новое оборудование и внедрены гибкие технологические линии.',
    year: '2000',
    image: timeline4.src
  },
  {
    title:
      'Создание собственной лаборатории для обеспечения входного и выходного контроля качества сырья и выпускаемой продукции',
    text: null,
    year: '2005',
    image: timeline5.src
  },
  {
    title: 'Получение лицензий API на моторные масла линейки Ekoil Lubricants',
    text: null,
    year: '2008',
    image: timeline6.src
  },
  {
    title: 'Выход на международный рынок ближнего зарубежья',
    text: null,
    year: '2010',
    image: timeline7.src
  },
  {
    title: 'Существенное расширение ассортимента выпускаемой продукции',
    text: 'Обновление продуктовой линейки смазочных материалов Ekoil Lubricants с улучшенной рецептурой и новой упаковкой. Компания начала использовать жестяную тару для фасовки производимых масел.',
    year: '2012',
    image: timeline8.src
  },
  {
    title: 'Модернизация производства с целью увеличения производительности до 30 тысяч тонн в год',
    text: 'На предприятии действует полный цикл технологических процессов – цех по разработке инновационных продуктов, отвечающих требованиям мировых производителей техники, цех по оперативному производству продукции, лаборатория контроля качества входящего сырья и производимой продукции, логистика и оперативная организация доставки продукции до конечного потребителя.',
    year: '2016',
    image: timeline9.src
  },
  {
    title: 'Запуск производства охлаждающих жидкостей (G11, G12)',
    text: null,
    year: '2022',
    image: timeline10.src
  },
  {
    title: 'Ребрендинг тары',
    text: 'Компания обновила тару для легкомоторных и трансмиссионных масел',
    year: '2023',
    image: timeline11.src
  }
];

const PRODUCTION = [
  {
    title: 'Производственная мощность',
    text: 'Компания имеет собственную производственную площадку с развитой складской и транспортной инфраструктурой, расположенную в г. Уфе (Республика Башкортостан). Производственная мощность завода – более 30 тысяч тонн в год.',
    img: production1.src
  },
  {
    title: 'Широкий ассортимент',
    text: 'Ekoil Lubricants предлагает широкий ассортимент моторных и трансмиссионных масел для легковых автомобилей и коммерческой техники, масел для малой техники, гидравлических масел, компрессорных масел, а также антифризов. В собственной лаборатории наши инженеры постоянно работают над развитием и расширением ассортимента выпускаемой продукции.',
    img: timeline11.src
  },
  {
    title: 'Качественное сырье',
    text: 'При производстве смазочных материалов мы используем исключительно качественное сырье: как базовые масла (VHVI, PAO), так и пакеты присадок ведущих мировых производителей.',
    img: production2.src
  }
];

const SLIDES = [slider1.src, slider2.src, slider3.src, slider1.src, slider2.src, slider3.src];

export default function Production() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const timelinePrevRef = useRef(null);
  const timelineNextRef = useRef(null);

  const [_, setInit] = useState();
  const [mobileTimeline, setTimelineInit] = useState();
  const [timelineActiveIndex, setTimelineActiveIndex] = useState(0);

  return (
    <main>
      <Box sx={{ backgroundColor: '#F4F6F8' }}>
        <HeaderSection title="О компании" />

        <Box
          sx={(theme) => ({
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
              alignItems: 'stretch',
              // gap: 6,
              borderRadius: '24px',
              overflow: 'hidden',

              [theme.breakpoints.down('md')]: {
                flexDirection: 'column'
                // gap: 3
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

            <Box
              sx={{
                flex: '1 1 50%',
                backgroundColor: '#fff',
                p: 4,
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column'
              }}
            >
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

        <Box sx={{ backgroundColor: '#fff' }}>
          <Box
            sx={(theme) => ({
              display: 'flex',
              gap: 2,
              p: 4,
              maxWidth: '1280px',
              margin: '0 auto',

              [theme.breakpoints.down('md')]: {
                flexDirection: 'column',
                mt: 5,
                gap: 4
              },

              [theme.breakpoints.down('sm')]: {
                mt: 3,
                p: 2
              }
            })}
          >
            {ACHIEVMENTS.map((item) => {
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
            display: 'flex',
            justifyContent: 'space-between',
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

        <Box sx={{ position: 'relative' }}>
          <IconButton
            ref={prevRef}
            sx={{
              backgroundColor: '#fff',
              position: 'absolute',
              left: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: '10',

              '&:hover': {
                backgroundColor: '#fff'
              }
            }}
          >
            <ArrowBackIcon />
          </IconButton>

          <Swiper
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current
            }}
            slidesPerView={isMobile ? 1 : 3}
            spaceBetween={20}
            onInit={() => setInit(true)}
            modules={[Navigation]}
            loop={true}
          >
            {SLIDES.map((slide, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={slide} alt={`ekoil-${index}`} />
                </SwiperSlide>
              );
            })}
          </Swiper>

          <IconButton
            ref={nextRef}
            sx={{
              backgroundColor: '#fff',
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: '10',

              '&:hover': {
                backgroundColor: '#fff'
              }
            }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Box>

        <Box
          sx={{
            px: 10,
            py: 10,

            [theme.breakpoints.down('md')]: {
              px: 4,
              py: 5
            },

            [theme.breakpoints.down('sm')]: {
              px: 2,
              gap: 3
            }
          }}
        >
          <Typography variant="h3" textAlign="center" sx={{ mb: 3, fontWeight: '900' }}>
            Почему{' '}
            <Typography variant="span" color="red">
              EKOIL
            </Typography>
            ?
          </Typography>

          <Typography
            variant="body1"
            textAlign="center"
            sx={(theme) => ({
              maxWidth: '820px',
              margin: '0 auto 80px',

              [theme.breakpoints.down('md')]: {
                mb: 6
              }
            })}
          >
            Наш опыт в производстве смазочных материалов объединяет передовые технологии, высокие стандарты качества и
            индивидуальный подход, чтобы обеспечить надежность, эффективность и долгосрочную защиту Вашей техники.{' '}
          </Typography>

          <Grid2 container spacing={{ xs: 2, sm: 4 }}>
            {REASONS.map((item) => {
              const Icon = item.icon;

              return (
                <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
                  <Box
                    sx={(theme) => ({
                      backgroundColor: '#fff',
                      p: 6,
                      borderRadius: '12px',
                      cursor: 'pointer',
                      overflow: 'hidden',
                      height: '100%',
                      wordBreak: 'break-word',

                      [theme.breakpoints.down('md')]: {
                        p: 3
                      },

                      '&:hover': {
                        transition: 'all 0.3s ease-in-out',
                        backgroundColor: '#1E284B',
                        color: 'white',

                        '& svg, path': {
                          fill: 'white'
                        }
                      },

                      '& svg, path': {
                        fill: 'red',
                        width: '48px',
                        height: '48px'
                      },

                      [theme.breakpoints.down('sm')]: {
                        '& svg': {
                          width: '32px',
                          height: '32px'
                        }
                      }
                    })}
                  >
                    <Icon />

                    <Typography
                      variant="h6"
                      fontWeight={900}
                      sx={(theme) => ({
                        fontSize: '24px',
                        mt: 4,
                        mb: 2,

                        [theme.breakpoints.down('sm')]: {
                          fontSize: '16px',
                          mt: 2,
                          mb: 1
                        }
                      })}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={(theme) => ({
                        fontSize: '18px',

                        [theme.breakpoints.down('sm')]: {
                          fontSize: '14px'
                        }
                      })}
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </Grid2>
              );
            })}
          </Grid2>
        </Box>

        <Box
          sx={(theme) => ({
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: '#fff',
            py: 10,
            background: `linear-gradient(265deg, rgba(10, 31, 62, 0.00) 3.18%, rgba(10, 31, 62, 0.51) 41.34%, #0A1F3E 94.74%), url(${factory.src}) lightgray -920.655px 0px / 163.934% 162.885% no-repeat`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            mb: 6,

            [theme.breakpoints.down('sm')]: {
              alignItems: 'flex-start',
              px: 2,
              textAlign: 'left',
              mb: 2
            }
          })}
        >
          <Typography
            variant="h3"
            sx={(theme) => ({
              mb: 6,
              fontWeight: 700,
              fontSize: '40px',

              [theme.breakpoints.down('sm')]: {
                fontSize: '24px',
                mb: 2
              }
            })}
          >
            Наша стратегическая цель
          </Typography>

          <Typography
            variant="h6"
            sx={(theme) => ({
              mb: 2,
              fontWeight: 700,
              fontSize: '20px',

              [theme.breakpoints.down('sm')]: {
                fontSize: '16px'
              }
            })}
          >
            Это обеспечение эффективного и безопасного функционирования Вашей техники.
          </Typography>

          <Typography
            variant="body1"
            sx={(theme) => ({
              maxWidth: '820px',
              fontSize: '16px',

              [theme.breakpoints.down('sm')]: {
                fontSize: '14px'
              }
            })}
          >
            Поэтому мы нацелены на создание премиальных и эффективных смазочных материалов, идеально работающих во всех
            агрегатах техники — в двигателях, трансмиссиях, гидравлических системах, в любых климатических
            и эксплуатационных условиях.
          </Typography>
        </Box>

        <Box
          sx={(theme) => ({
            px: 10,
            py: 10,

            [theme.breakpoints.down('md')]: {
              px: 4,
              py: 5
            },

            [theme.breakpoints.down('sm')]: {
              px: 2,
              gap: 3
            }
          })}
        >
          <Box
            sx={(theme) => ({
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              mb: 10,

              [theme.breakpoints.down('sm')]: {
                mb: 5
              }
            })}
          >
            <Typography variant="h4" fontWeight={800}>
              История развития компании
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: '800px' }}>
              За более чем 30 летнюю историю компания пережила многое, но тандем грамотных технических специалистов,
              амбициозных руководителей, сплочённого и дружного коллектива позволил зарекомендовать себя как надежного
              производителя и занять лидирующие позиции среди предприятий промышленного комплекса Республики
              Башкортостан.
            </Typography>
          </Box>

          {isMobile && (
            <Box sx={{ position: 'relative' }}>
              <IconButton
                ref={timelinePrevRef}
                color="primary"
                sx={{
                  position: 'absolute',
                  left: '20px',
                  top: '90%',
                  transform: 'translateY(-50%)',
                  zIndex: '10'
                }}
              >
                <ArrowBackIcon />
              </IconButton>

              <Swiper
                navigation={{
                  prevEl: timelinePrevRef.current,
                  nextEl: timelineNextRef.current
                }}
                pagination
                slidesPerView={1}
                spaceBetween={20}
                onInit={() => setTimelineInit(true)}
                modules={[Navigation, Pagination]}
                loop={true}
              >
                {TIMELINE.map((slide, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <Box
                        sx={{ backgroundColor: '#1E284B', color: '#fff', height: '100%', p: 3, borderRadius: '12px' }}
                      >
                        <Typography variant="h5" fontWeight={800} sx={{ mb: 2, fontSize: '32px' }}>
                          {slide.year}
                        </Typography>
                        <Typography variant="body1" sx={{ mb: 1, fontSize: '21px', fontWeight: 800 }}>
                          {slide.title}
                        </Typography>
                        <Typography variant="body2">{slide.text}</Typography>
                      </Box>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <IconButton
                ref={timelineNextRef}
                color="primary"
                sx={{
                  position: 'absolute',
                  right: '20px',
                  top: '90%',
                  transform: 'translateY(-50%)',
                  zIndex: '10'
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
            </Box>
          )}

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 8 }}>
              <Box
                sx={{
                  flex: 1,
                  maxWidth: '600px',
                  position: 'sticky',
                  top: '130px',
                  p: 2,
                  backgroundColor: '#ccc',
                  borderRadius: '12px',
                  height: '700px',
                  backgroundImage: `url(${TIMELINE[timelineActiveIndex].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  transition: '.25s ease'
                }}
              ></Box>

              <Box
                sx={{
                  position: 'relative',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3,

                  '&:before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    height: '100%',
                    width: '2px',
                    borderRadius: '50%',
                    backgroundColor: '#ccc',
                    zIndex: 10
                  }
                }}
              >
                {TIMELINE.map((item, index) => {
                  const isActive = index === timelineActiveIndex;

                  return (
                    <Box
                      onClick={() => setTimelineActiveIndex(index)}
                      sx={{
                        position: 'relative',
                        pl: 8,
                        transition: 'all .25s ease',

                        '&:before': {
                          content: '""',
                          position: 'absolute',
                          top: '50%',
                          left: '1px',

                          transform: isActive ? 'scale(2) translate(-25%, -50%)' : 'translate(-50%, -50%)',
                          height: '10px',
                          width: '10px',
                          borderRadius: '50%',
                          backgroundColor: isActive ? '#CC2828' : '#C4CDD5',
                          zIndex: 10,
                          boxShadow: 'inset 1px 4px 9px -6px;',
                          transition: '.25s ease'
                        }
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 4,
                          p: 2,
                          backgroundColor: isActive ? '#CC2828' : '#fff',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          transition: '.25s ease'
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 900, fontSize: '24px', color: isActive ? '#fff' : '#000' }}
                        >
                          {item.year}
                        </Typography>

                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                          <Typography variant="body1" sx={{ fontWeight: 800, color: isActive ? '#fff' : '#000' }}>
                            {item.title}
                          </Typography>

                          <Box
                            sx={{
                              display: 'grid',
                              gridTemplateRows: item.text && isActive ? '1fr' : '0fr',
                              overflow: 'hidden',
                              transition: 'grid-template-rows 0.25s ease'
                            }}
                          >
                            <Typography variant="body2" sx={{ color: isActive ? '#fff' : '#000', minHeight: 0 }}>
                              {item.text}
                            </Typography>
                          </Box>

                          {/* {item.text && isActive && (
                            <Typography variant="body2" sx={{ color: isActive ? '#fff' : '#000' }}>
                              {item.text}
                            </Typography>
                          )} */}
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          )}
        </Box>

        <Box
          sx={{
            px: 10,
            py: 10,

            backgroundImage: `url(${FeedbackBackground.src})`,

            [theme.breakpoints.down('md')]: {
              px: 4,
              py: 5
            },

            [theme.breakpoints.down('sm')]: {
              px: 2
            }
          }}
        >
          <Typography
            variant="h1"
            color="#fff"
            fontWeight={700}
            sx={(theme) => ({
              mb: 10,
              fontSize: '40px',

              [theme.breakpoints.down('md')]: {
                fontSize: '28px',
                mb: 5
              }
            })}
          >
            Наше производство
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {PRODUCTION.map((item, index) => {
              const isOdd = index % 2 === 0;

              return (
                <Box key={item.title}>
                  <Box
                    sx={(theme) => ({
                      display: 'flex',
                      flexDirection: !isOdd ? 'row' : 'row-reverse',
                      alignItems: 'center',
                      gap: 8,

                      [theme.breakpoints.down('md')]: {
                        flexDirection: 'column-reverse',
                        gap: 4
                      }
                    })}
                  >
                    <Box sx={{ flex: '1 1 50%', color: '#fff' }}>
                      <Typography
                        variant="h4"
                        fontWeight={800}
                        sx={() => ({
                          mb: 3,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 2,
                          fontSize: '28px',

                          [theme.breakpoints.down('md')]: {
                            fontSize: '21px'
                          }
                        })}
                      >
                        {isOdd && (
                          <ArrowBackIcon
                            sx={(theme) => ({
                              mt: 1,
                              fontSize: '32px',

                              [theme.breakpoints.down('md')]: {
                                transform: 'rotate(90deg)'
                              }
                            })}
                          />
                        )}
                        {item.title}
                        {!isOdd && (
                          <ArrowForwardIcon
                            sx={() => ({
                              mt: 1,
                              fontSize: '32px',

                              [theme.breakpoints.down('md')]: {
                                transform: 'rotate(-90deg)'
                              }
                            })}
                          />
                        )}
                      </Typography>

                      <Typography
                        variant="body1"
                        sx={() => ({
                          fontSize: '16px',

                          [theme.breakpoints.down('md')]: {
                            fontSize: '14px'
                          }
                        })}
                      >
                        {item.text}
                      </Typography>
                    </Box>

                    <Box
                      sx={(theme) => ({
                        flex: '1 1 50%',
                        backgroundImage: `url(${item.img})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: '400px',
                        borderRadius: '12px',
                        width: '100%',

                        [theme.breakpoints.down('sm')]: {
                          minHeight: '300px'
                        }
                      })}
                    ></Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box
          sx={{
            overflow: 'hidden',
            minWidth: '100%',
            height: '600px'
          }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/UtA7WnB4-tg?si=KFjkhNKJllbiaQkn&amp;modestbranding=1&amp;start=0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Box>

        <Box
          sx={{
            px: 10,
            py: 10,

            [theme.breakpoints.down('md')]: {
              px: 4,
              py: 5
            },

            [theme.breakpoints.down('sm')]: {
              px: 2
            }
          }}
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
                alignItems: 'stretch'
              }
            })}
          >
            <Typography
              variant="h4"
              fontWeight={800}
              sx={(theme) => ({
                [theme.breakpoints.down('sm')]: {
                  fontSize: '24px'
                }
              })}
            >
              Страны поставок нашей продукции
            </Typography>

            <Link href="/location">
              <Button
                fontSize="large"
                endIcon={<ArrowOutwardIcon />}
                sx={(theme) => ({
                  textTransform: 'initial',
                  backgroundColor: '#1E284B',
                  color: '#fff',
                  fontWeight: '700',
                  borderRadius: '8px',
                  px: 3,
                  py: 1,
                  fontSize: '16px',

                  [theme.breakpoints.down('sm')]: {
                    width: '100%'
                  }
                })}
              >
                Где купить
              </Button>
            </Link>
          </Box>

          <Typography variant="body1" sx={{ mb: 5 }}>
            Компания реализует свою продукцию не только на рынке России, но и успешно осваивает новые рынки сбыта
            Ближнего и Дальнего зарубежья.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', userSelect: 'none', '& img': { width: '100%' } }}>
            <img src={map.src} alt="" />
          </Box>
        </Box>
      </Box>

      <FeedbackBlock />
    </main>
  );
}
