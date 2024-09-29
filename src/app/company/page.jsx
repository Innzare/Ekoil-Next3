'use client';

import React, { useState } from 'react';
import { Box, Typography, Card, Grid, tabClasses, Divider } from '@mui/material';

import { Tab, Tabs } from '@mui/material';

import SectionTitle from '@/components/SectionTitle/SectionTitle';
import OnlyTextLogo from '@/components/SvgIcons/OnlyTextLogo';
import AboutTab from './Tabs/AboutTab';
import NewsTab from './Tabs/NewsTab';
import ProductionTab from './Tabs/ProductionTab';
import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';

// import BaseTabs from '@mui/material/Tabs';
// import BaseTabsList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import TabContext from '@mui/lab/TabContext';
// import BaseTab from '@mui/material/Tab';
import styled from '@emotion/styled';

// export const Tabs = styled(BaseTabs)({
//   marginBottom: '32px'
// });

// export const Tabs = styled(BaseTabs)({
//   display: 'flex',
//   gap: '42px',
//   marginBottom: '40px'
// });

// export const Tab = styled(BaseTab)({
//   display: 'inline-block',
//   padding: '8px 32px',
//   backgroundColor: 'transparent',
//   border: '1px solid #ccc',
//   borderRadius: '4px',
//   cursor: 'pointer',
//   textAlign: 'left',

//   [`&.${tabClasses.selected}`]: {
//     backgroundColor: '#fff',
//     border: '1px solid #0072E5',
//     color: '#0072E5'
//   }
// });

export default function Production() {
  const [value, setValue] = useState(0);

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
          <Box sx={{ p: 3 }}>
            <Box>{children}</Box>
          </Box>
        )}
      </div>
    );
  }

  const TabItem = ({ id, title, subTitle }) => {
    return (
      <Tab
        id={id}
        label={title}
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
        {/* <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>{title}</Typography>
        <Typography>{subTitle}</Typography> */}
      </Tab>
    );
  };

  const handleChange = (event, newValue) => {
    console.log(123);

    setValue(newValue);
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

            <Tabs value={value} onChange={handleChange} sx={{}}>
              <Tab
                sx={{
                  display: 'inline-block',
                  mr: 2,
                  padding: '8px 32px',
                  backgroundColor: 'transparent',
                  border: '1px solid #ccc',
                  borderBottom: 0,
                  borderTopLeftRadius: '6px',
                  borderTopRightRadius: '6px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '18px',
                  fontWeight: 700

                  // [`&.${tabClasses.selected}`]: {
                  //   backgroundColor: '#fff',
                  //   border: '1px solid #0072E5',
                  //   color: '#0072E5'
                  // }
                }}
                id={0}
                label="О компании"
              />
              <Tab
                sx={{
                  display: 'inline-block',
                  mr: 2,
                  padding: '8px 32px',
                  backgroundColor: 'transparent',
                  border: '1px solid #ccc',
                  borderBottom: 0,
                  borderTopLeftRadius: '6px',
                  borderTopRightRadius: '6px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '18px',
                  fontWeight: 700

                  // [`&.${tabClasses.selected}`]: {
                  //   backgroundColor: '#fff',
                  //   border: '1px solid #0072E5',
                  //   color: '#0072E5'
                  // }
                }}
                id={1}
                label="Производство"
              />
              <Tab
                sx={{
                  display: 'inline-block',
                  mr: 2,
                  padding: '8px 32px',
                  backgroundColor: 'transparent',
                  border: '1px solid #ccc',
                  borderBottom: 0,
                  borderTopLeftRadius: '6px',
                  borderTopRightRadius: '6px',
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontSize: '18px',
                  fontWeight: 700

                  // [`&.${tabClasses.selected}`]: {
                  //   backgroundColor: '#fff',
                  //   border: '1px solid #0072E5',
                  //   color: '#0072E5'
                  // }
                }}
                id={2}
                label="Новости"
              />
            </Tabs>

            <Divider color="#ccc" sx={{ mb: 2 }}></Divider>

            <TabPanel id={0}>
              <AboutTab />
            </TabPanel>

            <TabPanel id={1}>
              <ProductionTab />
            </TabPanel>

            <TabPanel id={2}>
              <NewsTab />
            </TabPanel>

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
