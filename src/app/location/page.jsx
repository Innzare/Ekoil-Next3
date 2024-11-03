'use client';

import React, { useState } from 'react';
import { Box, Card, Typography, Tab, Tabs, tabClasses } from '@mui/material';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import PublicIcon from '@mui/icons-material/Public';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PlaceIcon from '@mui/icons-material/Place';
import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';
import Distributors from './Tabs/Distributors';
import Marketplace from './Tabs/Marketplace';
import SellPoints from './Tabs/SellPoints';

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

export default function Location() {
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
      <Box>
        <Card sx={{ p: 3 }} elevation={3}>
          <SectionTitle text="Где нас найти" />

          <Box
            sx={{
              display: 'flex',
              // justifyContent: 'center',
              gap: 8,
              mb: 4
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              sx={{ display: 'flex', width: '100%', borderBottom: '1px solid #ccc' }}
            >
              {ITEMS.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Tab
                    id={index}
                    label={item.title}
                    icon={<Icon />}
                    iconPosition="start"
                    sx={{
                      // flex: 1,
                      // minHeight: '50px',
                      maxWidth: 'none',
                      whiteSpace: 'nowrap',
                      px: 6,
                      borderTopLeftRadius: '8px',
                      borderTopRightRadius: '8px',
                      fontSize: '16px',

                      [`&.${tabClasses.selected}`]: {
                        backgroundColor: '#0072e526'
                      }
                    }}
                  />
                );
              })}
            </Tabs>
          </Box>

          <Box
            sx={{
              mb: 4
            }}
          >
            <TabPanel id={0}>
              <SellPoints />
            </TabPanel>

            <TabPanel id={1}>
              <Distributors />
            </TabPanel>

            <TabPanel id={2}>
              <Marketplace />
            </TabPanel>
          </Box>

          <FeedbackBlock />
        </Card>
      </Box>
    </main>
  );
}
