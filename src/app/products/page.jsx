'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Box,
  Card,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Tab,
  Tabs,
  Typography
} from '@mui/material';
import MotorOilsTab from './Tabs/MotorOilsTab';
import TransmissionOilsTab from './Tabs/TransmissionOilsTab';
import IndustrialOilsTab from './Tabs/IndustrialOilsTab';
import ProductItem from '@/app/catalog/ProductItem/ProductItem';
import WeProduceBlock from '@/components/MainPageBlocks/WeProduce/WeProduceBlock/WeProduceBlock';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';

import Car from '@/components/SvgIcons/Car';
import CommercialCar from '@/components/SvgIcons/CommercialCar';
import SpecialCar from '@/components/SvgIcons/SpecialCar';
import IndustryIcon from '@/components/SvgIcons/IndustryIcon';
import AntiFreezeIcon from '@/components/SvgIcons/AntiFreezeIcon';

import ekoilTara from '@/app/assets/ekoil-tara.png';
import ekoilTara2 from '@/app/assets/ekoil-tara2.png';
import ekoilTara3 from '@/app/assets/ekoil-tara3.png';
import ekoilTara4 from '@/app/assets/ekoil-tara4.png';
import motorOil from '@/app/assets/motor-oil.jpg';

export default function Products() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const weProduceItems = [
    {
      title: 'Для легкового транспорта',
      // description: 'Passenger Vehicle Lubricants – масла для легкового транспорта',
      icon: Car
    },
    {
      title: 'Для коммерческого транспорта',
      // description: 'Commercial Vehicle Lubricants – масла для коммерческого транспорта',
      icon: CommercialCar
    },
    {
      title: 'Для специальной техники',
      // description:
      //   'Industrial Lubricants – масла, предназначенные для применения в различном промышленном оборудовании',
      icon: SpecialCar
    },
    {
      title: 'Для индустрии',
      // description:
      //   'Industrial Lubricants – масла, предназначенные для применения в различном промышленном оборудовании',
      icon: IndustryIcon
    },
    {
      title: 'Антифризы',
      // description:
      //   'Industrial Lubricants – масла, предназначенные для применения в различном промышленном оборудовании',
      icon: AntiFreezeIcon
    }
  ];

  const ITEMS = [
    {
      name: 'Ekoil Asura',
      subtitle: 'RX 5W-30 ILSAC GF 5',
      img: ekoilTara
    },
    {
      name: 'Ekoil Sprinter',
      subtitle: '5W-30 C3',
      img: ekoilTara2
    },
    {
      name: 'Ekoil Diesel Ultra',
      subtitle: '5W-30 C2/C3',
      img: ekoilTara3
    },
    {
      name: 'Ekoil Ulatra Premium',
      subtitle: '5W-40 SN/CF',
      img: ekoilTara4
    }
  ];

  const renderWeProduceBlocks = () => {
    return weProduceItems.map((item) => {
      return (
        <Grid item xs={12} sm={3} key={item.title}>
          <Link href="/catalog">
            <WeProduceBlock item={item} />
          </Link>
        </Grid>
      );
    });
  };

  function TabPanel(props) {
    const { children, id, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== id}
        id={`vertical-tabpanel-${id}`}
        aria-labelledby={`vertical-tab-${id}`}
        {...other}
      >
        {value === id && (
          <Box sx={{ px: 3 }}>
            <Box>{children}</Box>
          </Box>
        )}
      </div>
    );
  }

  return (
    <main>
      <Box>
        <Card elevation={3}>
          <Box
            sx={{
              backgroundImage: `url(${motorOil.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '300px',
              p: 5
            }}
          >
            <SectionTitle text="Продукция" isLight />
          </Box>

          <Box sx={{ p: 3 }}>
            <h2>Мы производим:</h2>

            <Box sx={{ display: 'flex', mb: 4, mt: 2 }}>
              <Tabs
                value={value}
                onChange={handleChange}
                orientation="vertical"
                sx={{
                  backgroundColor: '#f5f5f5',
                  borderRadius: '4px',
                  '& .Mui-selected': {
                    backgroundColor: '#0052cc1c'
                  }
                }}
              >
                <Tab
                  id={0}
                  sx={{ alignItems: 'flex-start', textTransform: 'initial', fontSize: '18px', fontWeight: 700 }}
                  label="Моторные масла"
                />
                <Tab
                  id={1}
                  sx={{ alignItems: 'flex-start', textTransform: 'initial', fontSize: '18px', fontWeight: 700 }}
                  label="Трансмиссионные масла"
                />
                <Tab
                  id={2}
                  sx={{ alignItems: 'flex-start', textTransform: 'initial', fontSize: '18px', fontWeight: 700 }}
                  label="Индустриальные масла"
                />
              </Tabs>

              <Divider color="#ccc" sx={{ mb: 2 }}></Divider>

              <TabPanel id={0}>
                <MotorOilsTab />
              </TabPanel>

              <TabPanel id={1}>
                <TransmissionOilsTab />
              </TabPanel>

              <TabPanel id={2}>
                <IndustrialOilsTab />
              </TabPanel>
            </Box>

            {/* <Grid container spacing={4} sx={{ mb: 8 }}>
              {renderWeProduceBlocks()}
            </Grid>

            <SectionTitle text="Популярные товары" />

            <Grid container spacing={4} rowSpacing={8} sx={{ mt: 1, mb: 4 }}>
              {ITEMS.map((item) => {
                return (
                  <Grid item xs={12} sm={6} md={3}>
                    <ProductItem data={item} />
                  </Grid>
                );
              })}
            </Grid> */}

            <FeedbackBlock />
          </Box>
        </Card>
      </Box>
    </main>
  );
}
