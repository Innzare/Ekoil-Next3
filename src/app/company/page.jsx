'use client';

import React from 'react';
import { Box, Typography, Card, Grid, tabClasses, Divider } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import OnlyTextLogo from '@/components/SvgIcons/OnlyTextLogo';
import AboutTab from './Tabs/AboutTab';
import NewsTab from './Tabs/NewsTab';
import ProductionTab from './Tabs/ProductionTab';
import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';

import BaseTabs from '@mui/base/Tabs';
import BaseTabsList from '@mui/base/TabsList';
import TabPanel from '@mui/base/TabPanel';
import BaseTab from '@mui/base/Tab';
import styled from '@emotion/styled';

export const Tabs = styled(BaseTabs)({
  marginBottom: '32px'
});

export const TabsList = styled(BaseTabsList)({
  display: 'flex',
  gap: '42px',
  marginBottom: '40px'
});

export const Tab = styled(BaseTab)({
  display: 'inline-block',
  padding: '8px 32px',
  backgroundColor: 'transparent',
  border: '1px solid #ccc',
  borderRadius: '4px',
  cursor: 'pointer',
  textAlign: 'left',

  [`&.${tabClasses.selected}`]: {
    backgroundColor: '#fff',
    border: '1px solid #0072E5',
    color: '#0072E5'
  }
});

export default function Production() {
  const TabItem = ({ value, title, subTitle }) => {
    return (
      <Tab
        value={value}
        sx={{
          display: 'inline-block',
          p: 4,
          backgroundColor: 'transparent',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          textAlign: 'left'
        }}
      >
        <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{title}</Typography>
        <Typography>{subTitle}</Typography>
      </Tab>
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
                mb: 4,
                color: '#666'
              }}
            >
              Премиальные смазочные материлы высокого качества
            </Typography>

            <Tabs defaultValue={1} sx={{ mb: 4 }}>
              <TabsList>
                <TabItem value={1} title="О компании" subTitle="Наша история" />
                <TabItem value={2} title="Производство" subTitle="Наши технологии" />
                <TabItem value={3} title="Новости" subTitle="Последние события" />
              </TabsList>

              <Divider sx={{ mb: 2 }}></Divider>

              <TabPanel value={1}>
                <AboutTab />
              </TabPanel>

              <TabPanel value={2}>
                <ProductionTab />
              </TabPanel>

              <TabPanel value={3}>
                <NewsTab />
              </TabPanel>
            </Tabs>

            <FeedbackBlock />

            {/* <Grid container spacing={2} alignItems="center">
              <Grid item col={4}>
                <AboutBlock title="О компании" subTitle="Узнайте больше о нашей истории" />
              </Grid>
              <Grid item col={4}>
                <AboutBlock title="О компании" />
              </Grid>
              <Grid item col={4}>
                <AboutBlock title="О компании" />
              </Grid>
            </Grid> */}
          </Box>

          {/* {renderTabs()}

          <Box>{renderTabsContent()}</Box> */}
        </Card>
      </Box>
    </main>
  );
}
