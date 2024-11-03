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

export default function SellPoints() {
  const [items, setItems] = useState(ITEMS);
  const [mapState, setMapState] = useState({
    center: [54.746581, 55.916111],
    zoom: 10.4,
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
