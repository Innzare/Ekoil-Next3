'use client';

import React, { useState } from 'react';
import { Box, Typography, Card, Grid, tabClasses, Divider, Tab, Tabs } from '@mui/material';

import SectionTitle from '@/components/SectionTitle/SectionTitle';
import OnlyTextLogo from '@/components/SvgIcons/OnlyTextLogo';
import TextLogo from '@/components/SvgIcons/TextLogo';
import Logo from '@/components/SvgIcons/Logo';
import AboutTab from './Tabs/AboutTab';
import NewsTab from './Tabs/NewsTab';
import ProductionTab from './Tabs/ProductionTab';
import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';
import HeaderSection from '@/components/HeaderSection';

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
    setValue(newValue);
  };

  return (
    <main>
      <Box>
        <Box>
          <HeaderSection title="О компании" />
          {/* <Box
            sx={{
              backgroundImage: 'url(https://aimol.ru/bitrix/templates/aspro_max/images/09/company_top.jpg)',
              // height: '400px',
              p: 5
            }}
          >
            <SectionTitle text="О компании" isLight />

            <Box sx={{ maxWidth: '80%', backdropFilter: 'blur(12px)', p: 2, borderRadius: '12px' }}>
              <Typography
                variant="h4"
                color="#fff"
                fontWeight="bold"
                sx={{ display: 'flex', alignItems: 'center', gap: 2 }}
              >
                <Logo color="#fff" />
                <TextLogo color="#fff" width="150" height="45" /> - качество, которому можно доверять.
              </Typography>

              <Typography variant="body1" color="#fff" fontWeight="bold" sx={{ fontSize: '18px', mt: 4 }}>
                Ekoil Lubricants один из крупных производителей смазочных материалов в Республике Башкортостан,
                обладающий собственной технологической и производственной базой для выпуска широкого ассортимента
                продукции. <br />
                <br />
                Мы объединили современные российские и иностранные технологии в сфере производства смазочных материалов
                для получения премиальных высокотехнологичных масел, закрывающих потребность во всех сферах.
                <br />
                <br />
                Использование собственных разработок вместе сырьевой базой позволяет производить продукцию,
                соответствующую требованиям ведущих мировых производителей техники и международных профессиональных
                Ассоциаций – API, ACEA, SAE, ILSAC, DIN и др.
              </Typography>
            </Box>
          </Box> */}

          <Box sx={{ p: 3 }}>
            {/* <Typography
              sx={{
                fontSize: '32px',
                fontWeight: 'bold',
                mb: 4,
                color: '#666'
              }}
            >
              Премиальные смазочные материлы высокого качества
            </Typography> */}

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
              {/* <Tab
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
              /> */}
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
        </Box>
      </Box>
    </main>
  );
}
