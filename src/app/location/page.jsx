'use client';

import React, { useEffect, useState } from 'react';
import { Box, Card, Typography, Tab, Tabs, tabClasses } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import PublicIcon from '@mui/icons-material/Public';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PlaceIcon from '@mui/icons-material/Place';
import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';
import Distributors from './Tabs/Distributors';
import Marketplace from './Tabs/Marketplace';
import SellPoints from './Tabs/SellPoints';
import HeaderSection from '@/components/HeaderSection';
import axios from 'axios';

const ITEMS = [
  {
    title: 'Точки продаж',
    icon: PlaceIcon
  },
  {
    title: 'У оффициального дистрибьютора',
    icon: PublicIcon
  },
  {
    title: 'На маркетплейсах',
    icon: ShoppingCartIcon
  }
];

const SELL_POINTS = [
  {
    id: 1,
    region: 'Республика Башкортостан',
    isOpen: false,
    places: [
      {
        name: 'Автоаура',
        type: 'Автосервис',
        address: 'г. Уфа, ул. Силикатная, д.3 к.1',
        coords: [54.746581, 55.916111],
        site: '',
        email: ''
      },
      {
        name: 'Авто-Газ.102',
        type: 'Автосервис',
        address: 'г. Уфа, ул. Адмирала Ушакова, д. 21/4',
        coords: [54.804239, 56.146089],
        site: '',
        email: ''
      },
      {
        name: 'ГрузовикЪ Уфа',
        type: 'Автосервис',
        address: 'г. Уфа, ул. Центральная, д. 59/3 к6',
        coords: [54.673424, 55.815024],
        site: '',
        email: ''
      },
      {
        name: 'ИП Боровиков А.В.',
        type: 'Автосервис',
        address: 'г. Уфа, ул. Кирова, д.65/1',
        coords: [54.728815, 55.96966],
        site: '',
        email: ''
      },
      {
        name: 'ИП Ганеев К.К.',
        type: 'Автосервис',
        address: 'г. Уфа, ул. Кирова, д. 128/1',
        coords: [54.724204, 55.980844],
        site: '',
        email: ''
      }
    ]
  }
];

const DISTRIBUTORS = [
  {
    id: 1,
    region: 'Республика Башкортостан',
    isOpen: false,
    places: [
      {
        name: 'ООО "ТрансПромОйл"',
        type: 'Дистрибьютор',
        address: '450071, Республика Башкортостан, г. Уфа, ул. Менделеева, дом 197/2, офис 9',
        coords: [54.738022, 56.026577],
        site: '',
        email: ''
      },
      {
        name: 'Сеть автомагазинов "Автостарт"',
        type: 'Дистрибьютор',
        address: 'г. Уфа, ул. Кольцевая, д.82;',
        coords: [54.821448, 56.09519],
        site: '',
        email: ''
      },
      {
        name: 'Сеть автомагазинов "Автостарт"',
        type: 'Дистрибьютор',
        address: 'г. Уфа, ул. Богдана Хмельницкого, д.134;',
        coords: [54.81984, 56.110336],
        site: '',
        email: ''
      },
      {
        name: 'Сеть автомагазинов "Автостарт"',
        type: 'Дистрибьютор',
        address: 'г. Уфа, ул. Сельская Богородская, д.51;',
        coords: [54.786944, 56.121169],
        site: '',
        email: ''
      },
      {
        name: 'Сеть автомагазинов "Автостарт"',
        type: 'Дистрибьютор',
        address: 'г. Уфа, ул. Маршала Жукова, д.39/1;',
        coords: [54.779162, 56.067818],
        site: '',
        email: ''
      },
      {
        name: 'Сеть автомагазинов "Автостарт"',
        type: 'Дистрибьютор',
        address: 'г. Уфа, ул. Пархоменко, д.153;',
        coords: [54.74417, 55.968079],
        site: '',
        email: ''
      },
      {
        name: 'Сеть автомагазинов "Автостарт"',
        type: 'Дистрибьютор',
        address: 'г. Уфа, ул. Новосибирская, д.2/1;',
        coords: [54.752043, 55.978867],
        site: '',
        email: ''
      },
      {
        name: 'Сеть автомагазинов "Автостарт"',
        type: 'Дистрибьютор',
        address: 'г. Уфа, ул. Бакалинская, д.66;',
        coords: [54.719955, 55.987904],
        site: '',
        email: ''
      },
      {
        name: 'Сеть автомагазинов "Автостарт"',
        type: 'Дистрибьютор',
        address: 'г. Уфа, ул. Надежды, 1/1;',
        coords: [54.789587, 55.948971],
        site: '',
        email: ''
      },
      {
        name: 'Сеть автомагазинов "Автостарт"',
        type: 'Дистрибьютор',
        address: 'г. Уфа, Октябрьский переулок, д.23;',
        coords: [54.806475, 55.877906],
        site: '',
        email: ''
      },
      {
        name: 'Сеть автомагазинов "Автостарт"',
        type: 'Дистрибьютор',
        address: 'г. Уфа, ул. Центральная, д.19 к1.',
        coords: [54.696298, 55.830367],
        site: '',
        email: ''
      }
    ]
  },
  {
    id: 2,
    region: 'Азербайджан',
    isOpen: false,
    places: [
      {
        name: 'ООО "Мурад ЛТД"',
        type: 'Дистрибьютор',
        address: 'AZ5000, Азербайджан, город Сумгаит, проспект Азербайджана 10/19',
        coords: [40.598064, 49.673125],
        site: '',
        email: ''
      }
    ]
  },
  {
    id: 3,
    region: 'Республика Узбекистан',
    isOpen: false,
    places: [
      {
        name: 'ООО "Камма Дигуз"',
        type: 'Дистрибьютор',
        address: '100115, Республика Узбекистан, г.Ташкент, ул.Арнасой, дом 3А',
        coords: [41.270946, 69.221355],
        site: '',
        email: ''
      }
    ]
  },
  {
    id: 4,
    region: 'Республика Казахстан',
    isOpen: false,
    places: [
      {
        name: 'ИП "Мамедова М.А."',
        type: 'Дистрибьютор',
        address: 'Республика Казахстан, г. Шымкент, ул. Темир Казык 132',
        coords: [42.33204, 69.572021],
        site: '',
        email: ''
      }
    ]
  },
  {
    id: 5,
    region: 'Кыргызская Республика',
    isOpen: false,
    places: [
      {
        name: 'ООО "АВТ"',
        type: 'Дистрибьютор',
        address: 'Кыргызская Республика, г. Бишкек,  пр. Мира, 38-3',
        coords: [42.854374, 74.587271],
        site: '',
        email: ''
      }
    ]
  },
  {
    region: 'Республика Таджикистан',
    isOpen: false,
    places: [
      {
        name: 'ООО «Тадибел»',
        type: 'Дистрибьютор',
        address: 'Республика Таджикистан, г.Душанбе,  ул.Р.Набиева, 289',
        coords: [38.538739, 68.743173],
        site: '',
        email: ''
      }
    ]
  }
];

export default function Location() {
  const [value, setValue] = useState(0);
  const [distributors, setDistributors] = useState([]);
  const [points, setPoints] = useState([]);

  useEffect(() => {
    getStores();
  }, []);

  const getStores = async () => {
    const { data } = await axios.get('/api/locations/stores/');

    const distributors = data.filter((item) => {
      return item.stores.some((store) => store.type.id === 1);
    });

    const points = data.filter((item) => {
      return item.stores.some((store) => store.type.id !== 1);
    });

    setDistributors(distributors);
    setPoints(points);
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
          <Box>
            <Box>{children}</Box>
          </Box>
        )}
      </div>
    );
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <main>
      <HeaderSection title="Где нас найти" />

      <Box>
        <Box
          sx={{
            display: 'flex',
            // justifyContent: 'center',
            gap: 8,
            color: '#CC2828'
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            variant="scrollable"
            scrollButtons="auto"
            allowScrollButtonsMobile
            sx={{
              // display: 'flex',
              width: '100%',
              borderBottom: '1px solid #ccc',
              '.MuiTabs-indicator': { backgroundColor: '#CC2828' }
            }}
          >
            {ITEMS.map((item, index) => {
              const Icon = item.icon;

              return (
                <Tab
                  id={index}
                  key={item.title}
                  label={item.title}
                  icon={<Icon />}
                  iconPosition="start"
                  sx={(theme) => ({
                    // flex: 1,
                    // minHeight: '50px',
                    maxWidth: 'none',
                    whiteSpace: 'nowrap',
                    px: 6,
                    minHeight: '54px',

                    // borderTopLeftRadius: '8px',
                    // borderTopRightRadius: '8px',
                    fontSize: '16px',
                    color: '#000',

                    [theme.breakpoints.down('md')]: {
                      px: 3,
                      fontSize: '14px'
                    },

                    [`&.${tabClasses.selected}`]: {
                      backgroundColor: '#ffe5e5',
                      color: '#CC2828'
                    }
                  })}
                />
              );
            })}
          </Tabs>
        </Box>

        <Box
          sx={{
            mb: 4,
            p: 3
          }}
        >
          <TabPanel id={0}>
            <SellPoints items={points} />
          </TabPanel>

          <TabPanel id={1}>
            <SellPoints type="distributors" items={distributors} />
          </TabPanel>

          <TabPanel id={2}>
            <Marketplace />
          </TabPanel>
        </Box>
      </Box>
      <FeedbackBlock />
    </main>
  );
}
