import React, { useState } from 'react';
import MapLoader from '@/components/MapLoader/MapLoader';
import { Box, Button, Typography } from '@mui/material';
import RepresentativeItem from '../RepresentativeItem';

const ITEMS = [
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

export default function Distributors() {
  const [items, setItems] = useState(ITEMS);
  const [mapState, setMapState] = useState({
    center: [42.33204, 69.572021],
    zoom: 3,
    behaviors: ['default', 'scrollZoom']
  });

  const getMarks = () => {
    const places = items.map((item) => item.places).flat();
    return places.map((place) => place.coords);
  };

  const onShowOnMapClick = (coords) => {
    setMapState((prevState) => {
      return {
        ...prevState,
        center: coords,
        zoom: 14
      };
    });

    document.body.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onShowMoreClick = (id) => {
    setItems((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            isOpen: !item.isOpen
          };
        }
        return item;
      });
    });
  };

  return (
    <Box>
      <Box
        sx={{
          position: 'relative',
          height: '400px',
          mb: 4
        }}
      >
        <MapLoader state={mapState} marks={getMarks()} />
      </Box>

      <Box>
        {items.map((item) => {
          return (
            <Box sx={{ mb: 6 }}>
              <Box sx={{ mb: 2 }}>
                <h2>{item.region}</h2>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  mb: 2
                }}
              >
                {(item.isOpen ? item.places : item.places.slice(0, 3)).map((place) => {
                  return <RepresentativeItem data={place} showOnMapClick={onShowOnMapClick} />;
                })}
              </Box>

              {item.places.length > 3 && (
                <Button variant="outlined" size="large" onClick={() => onShowMoreClick(item.id)}>
                  {item.isOpen ? 'Скрыть' : 'Показать еще...'}
                </Button>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
