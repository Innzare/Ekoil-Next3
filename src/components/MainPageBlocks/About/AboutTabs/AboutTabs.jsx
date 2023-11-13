'use client';

import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box, Tab, Tabs } from '@mui/material';
import Assortment from './Tabs/Assortment';
import Specialisation from './Tabs/Specialisation';
import WhyWe from './Tabs/WhyWe';
import Company from './Tabs/Company';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import EngineeringOutlinedIcon from '@mui/icons-material/EngineeringOutlined';
import AdsClickOutlinedIcon from '@mui/icons-material/AdsClickOutlined';

const TABS = [
  {
    text: 'Компания',
    value: 'company',
    icon: EngineeringOutlinedIcon
  },
  {
    text: 'Специализация',
    value: 'specialization',
    icon: AdsClickOutlinedIcon
  },
  {
    text: 'Ассортимент',
    value: 'assortment',
    icon: CategoryOutlinedIcon
  },
  {
    text: 'Почему мы?',
    value: 'whyWe',
    icon: QuestionMarkOutlinedIcon
  }
];

export default function AboutTabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const theme = useTheme();

  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Box>{children}</Box>
          </Box>
        )}
      </div>
    );
  };

  const renderTabs = () => {
    return (
      <Tabs
        orientation={isMobile ? 'horizontal' : 'vertical'}
        variant="scrollable"
        value={activeTabIndex}
        onChange={(event, newValue) => setActiveTabIndex(newValue)}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', width: isMobile ? '100%' : '250px', flexShrink: 0 }}
      >
        {TABS.map((tab) => {
          const { text, value, icon: Icon } = tab;

          return (
            <Tab
              icon={<Icon />}
              label={text}
              key={value}
              sx={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 3,
                color: theme.palette.text.primary,
                '& svg': { mb: '0 !important' }
              }}
            />
          );
        })}
      </Tabs>
    );
  };

  const renderTabsContent = () => {
    return TABS.map((tab, index) => {
      const { value } = tab;
      let tabContent;

      switch (true) {
        case value === 'company':
          tabContent = <Company />;
          break;

        case value === 'specialization':
          tabContent = <Specialisation />;
          break;

        case value === 'assortment':
          tabContent = <Assortment />;
          break;

        case value === 'whyWe':
          tabContent = <WhyWe />;
          break;

        default:
          tabContent = '';
          break;
      }

      return (
        <TabPanel value={activeTabIndex} index={index} key={value}>
          {tabContent}
        </TabPanel>
      );
    });
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row'
      }}
    >
      {renderTabs()}

      <Box>{renderTabsContent()}</Box>
    </Box>
  );
}
