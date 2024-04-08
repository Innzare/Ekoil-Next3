import React from 'react';
import { Box, Typography } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';

export default function ProductionTab() {
  return (
    <Box>
      <SectionTitle text="Производство" />

      <Box>
        <Typography variant="h6" sx={{ mb: 2 }} color="initial">
          Компания имеет собственную производственную площадку с развитой складской и транспортной инфраструктурой,
          расположенную в г. Уфе (Республика Башкортостан). Производственная мощность завода – более 25 тысяч тонн в
          год.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2 }} color="initial">
          Наряду с маслами Ekoil на заводе Ekoil Lubricants выпускается продукция известных российских и зарубежных
          марок моторных масел.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2 }} color="initial">
          При производстве смазочных материалов мы используем исключительно качественное сырье: как базовые масла (VHVI,
          PAO), так и пакеты присадок ведущих мировых производителей.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2 }} color="initial">
          Все производимые масла Ekoil соответствуют требованиям качества ведущих автопроизводителей.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2 }} color="initial">
          Ekoil Lubricants предлагает широкий ассортимент моторных и трансмиссионных масел для легковых автомобилей и
          коммерческой техники, масел для малой техники, гидравлических масел, компрессорных масел, а также антифризов.
        </Typography>

        <Typography variant="h6" sx={{ mb: 2 }} color="initial">
          В собственной лаборатории наши инженеры постоянно работают над развитием и расширением ассортимента
          выпускаемой продукции.
        </Typography>
      </Box>
    </Box>
  );
}
