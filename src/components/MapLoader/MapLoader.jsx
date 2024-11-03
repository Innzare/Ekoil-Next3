import React, { useState } from 'react';
import { styled } from '@mui/system';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import { Box } from '@mui/material';

export const MapWrapper = styled(Map)(({ theme }) => ({
  position: 'relative',
  borderRadius: '8px',
  overflow: 'hidden',
  width: '100%',
  height: '100%'
}));

const defaultState = {
  center: [54.738022, 56.026577],
  zoom: 14.4,
  behaviors: ['default', 'scrollZoom']
};

const defaultMarks = [[54.738022, 56.026577]];

export default function MapLoader(props) {
  const { state = defaultState, marks = defaultMarks } = props;

  // const [mapState, setMapState] = useState({
  //   center: [54.738022, 56.026577],
  //   zoom: 14.4,
  //   behaviors: ['default', 'scrollZoom']
  // });

  return (
    <YMaps
      query={{
        // load: 'package.full',
        apikey: 'e419efa4-26ff-449c-bbb3-5d21a3216406'
      }}
      scrollZoom={false}
    >
      <MapWrapper width="100%" height="500px" state={state}>
        {marks.map((coords) => {
          return <Placemark geometry={coords}></Placemark>;
        })}
        {/* <Box
          onClick={() => {
            setMapState({ ...mapState, center: [55.751574, 37.573856] });
          }}
          sx={{
            position: 'absolute',
            zIndex: 1,
            p: 4,
            top: '50%',
            left: '40px',
            transform: 'translateY(-50%)',
            borderRadius: '8px',
            backgroundColor: '#ccc'
          }}
        >
          Test
        </Box> */}
      </MapWrapper>
    </YMaps>
  );
}
