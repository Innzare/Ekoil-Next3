import React, { useState } from 'react';
import MapLoader from '@/components/MapLoader/MapLoader';
import { Box, Button, Paper, Typography, Accordion, AccordionDetails, AccordionSummary, Divider } from '@mui/material';
import RepresentativeItem from '../RepresentativeItem';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SellPoints(props) {
  const [expanded, setExpanded] = React.useState(props.items.map((item) => item.id));

  const mapContainerRef = React.useRef(null);

  const [items, setItems] = useState(props.items || []);
  const [mapState, setMapState] = useState(
    props.type === 'distributors'
      ? {
          center: [42.33204, 69.572021],
          zoom: 3,
          behaviors: ['default', 'scrollZoom']
        }
      : {
          center: [54.746581, 55.916111],
          zoom: 10.4,
          behaviors: ['default', 'scrollZoom']
        }
  );

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded((prev) => (isExpanded ? [...prev, panel] : prev.filter((id) => id !== panel)));
  };

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

    const elementOffset = mapContainerRef.current.offsetTop - 150;

    document.body.scrollTo({
      top: elementOffset,
      behavior: 'smooth'
    });
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
    <Box
      sx={(theme) => ({
        display: 'flex',
        gap: 4,

        [theme.breakpoints.down('md')]: {
          flexDirection: 'column',
          gap: 3
        }
      })}
    >
      <Box
        sx={{
          backgroundColor: '#F4F6F8',
          p: 2,
          borderRadius: '12px',
          flex: '0 0 500px',
          height: '660px',
          overflowY: 'auto'
        }}
      >
        {items.map((item) => {
          return (
            <Accordion
              key={item.id}
              expanded={expanded.includes(item.id)}
              onChange={handleChange(item.id)}
              elevation={0}
              sx={{
                backgroundColor: 'transparent',

                '&:before': {
                  display: 'none'
                }
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
                sx={{
                  color: ' #919EAB',
                  backgroundColor: '#00000008',
                  borderRadius: '8px',
                  mb: 1,
                  border: '1px solid #ccc'
                }}
              >
                <h2>
                  {item.region} {`(${item.places.length})`}
                </h2>
              </AccordionSummary>

              <AccordionDetails>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    mb: 2
                  }}
                >
                  {(item.isOpen ? item.places : item.places.slice(0, 3)).map((place, index, array) => {
                    return (
                      <>
                        <RepresentativeItem
                          data={place}
                          showOnMapClick={onShowOnMapClick}
                          key={`representative-${item.id}`}
                        />
                        {index < array.length - 1 && <Divider sx={{ my: 2 }} key={`divider-${item.id}`}></Divider>}
                      </>
                    );
                  })}
                </Box>

                {item.places.length > 3 && (
                  <Button
                    variant="text"
                    size="large"
                    onClick={() => onShowMoreClick(item.id)}
                    sx={{ textTransform: 'initial', fontWeight: 800 }}
                  >
                    {item.isOpen ? 'Скрыть' : 'Показать еще...'}
                  </Button>
                )}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>

      <Box
        ref={mapContainerRef}
        sx={(theme) => ({
          position: 'relative',
          minHeight: '600px',
          height: '600px',
          width: '100%',

          [theme.breakpoints.down('md')]: {
            minHeight: '400px',
            height: '400px'
          }
        })}
      >
        <Paper elevation={3} sx={{ width: '100%', height: '100%', borderRadius: '12px', overflow: 'hidden' }}>
          <MapLoader state={mapState} marks={getMarks()} />
        </Paper>
      </Box>
    </Box>
  );
}
