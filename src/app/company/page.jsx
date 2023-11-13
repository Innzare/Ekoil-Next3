'use client';

import React from 'react';
import { Box, Typography, Card, Grid, Tab, Tabs } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import OnlyTextLogo from '@/components/SvgIcons/OnlyTextLogo';

export default function Production() {
  const AboutBlock = ({ title, subTitle }) => {
    return (
      <Box
        sx={{
          display: 'inline-block',
          p: 4,
          border: '1px solid #dfebfd',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{title}</Typography>
        <Typography>{subTitle}</Typography>
      </Box>
    );
  };

  return (
    <main>
      <Box>
        <Card elevation={3}>
          <Box
            sx={{
              backgroundImage: 'url(https://aimol.ru/bitrix/templates/aspro_max/images/09/company_top.jpg)',
              height: '300px',
              p: 5
            }}
          >
            <SectionTitle text="О компании" isLight />
          </Box>

          <Box sx={{ p: 3 }}>
            <OnlyTextLogo color="red" width="180" height="50" />
            <Typography
              sx={{
                fontSize: '32px',
                fontWeight: 'bold',
                mb: 4
              }}
            >
              Премиальные смазочные материлы высокого качества
            </Typography>

            <Grid container spacing={2} alignItems="center">
              <Grid item col={4}>
                <AboutBlock title="О компании" subTitle="Узнайте больше о нашей истории" />
              </Grid>
              <Grid item col={4}>
                <AboutBlock title="О компании" />
              </Grid>
              <Grid item col={4}>
                <AboutBlock title="О компании" />
              </Grid>
            </Grid>
          </Box>

          {/* {renderTabs()}

          <Box>{renderTabsContent()}</Box> */}
        </Card>
      </Box>
    </main>
  );
}
