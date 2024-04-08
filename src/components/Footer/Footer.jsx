import React from 'react';
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography
} from '@mui/material';
import FullLogoIcon from '@/components/SvgIcons/FullLogoIcon';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';

export default function Footer() {
  return (
    <footer>
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
          flex: '0 0 auto',
          px: 6,
          py: 2,
          borderRadius: '6px',
          backgroundColor: '#fff',
          boxShadow: 'rgba(0, 0, 0, 0.07) 0rem 1.25rem 1.6875rem 0rem'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 4,
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            <FullLogoIcon />

            <Button
              sx={{ textTransform: 'initial' }}
              variant="text"
              color="primary"
              startIcon={<CallIcon sx={{ mr: 1 }} />}
            >
              Обратная связь
            </Button>
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: 6
            }}
          >
            <List
              component="nav"
              dense
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Компания
                </ListSubheader>
              }
            >
              <ListItemButton>
                <ListItemText primary="О нас" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Новости" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Документы" />
              </ListItemButton>
            </List>

            <List
              component="nav"
              dense
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Продукция
                </ListSubheader>
              }
            >
              <ListItemButton>
                <ListItemText primary="Для легкового транспорта" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Для коммерческого транспорта" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Для специальной техники" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Для индустрии" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Антифризы" />
              </ListItemButton>
            </List>

            <List
              component="nav"
              dense
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Информация
                </ListSubheader>
              }
            >
              <ListItemButton>
                <ListItemText primary="Каталог" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Точки продаж" />
              </ListItemButton>

              <ListItemButton>
                <ListItemText primary="Контакты" />
              </ListItemButton>
            </List>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              mt: 2
            }}
          >
            {/* <Typography variant="h6" fontWeight="700" sx={{ color: '#666' }}>
              Контакты
            </Typography> */}
            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <LocationOnOutlinedIcon color="primary" />
              <Typography variant="span" fontWeight="700" sx={{ fontSize: '14px', color: '#666' }}>
                г. Уфа, 450071, <br /> ул. Менделеева, д. 197/2
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <MailOutlineIcon color="primary" />
              <Typography variant="span" fontWeight="700" sx={{ fontSize: '14px', color: '#666' }}>
                oil@td-ekoil.ru
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
              <LocalPhoneOutlinedIcon color="primary" />
              <Typography variant="span" fontWeight="700" sx={{ fontSize: '14px', color: '#666' }}>
                (347) 248-50-53
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography color="#999" sx={{ fontSize: '14px', mt: 2 }}>
          © 2015 - 2024, Все права защищены.{' '}
          <Typography variant="span" fontWeight="900">
            EKOIL
          </Typography>{' '}
          - смазочные материалы.
        </Typography>
      </Box>
    </footer>
  );
}
