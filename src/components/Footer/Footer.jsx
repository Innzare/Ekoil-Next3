import React from 'react';
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  Link as LinkMui,
  ListItemButton,
  ListItemText,
  ListSubheader,
  Typography
} from '@mui/material';
import FullLogoIcon from '@/components/SvgIcons/FullLogoIcon';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Link from 'next/link';
import CallIcon from '@mui/icons-material/Call';
import { useStore } from '@/store';

export default function Footer() {
  const { openContactModal } = useStore();

  return (
    <footer>
      <Box
        sx={(theme) => ({
          position: 'relative',
          zIndex: 1,
          flex: '0 0 auto',
          px: 10,
          pt: 6,
          pb: 2,
          borderRadius: '6px',
          backgroundColor: '#F4F6F8',
          boxShadow: 'rgba(0, 0, 0, 0.07) 0rem 1.25rem 1.6875rem 0rem',

          [theme.breakpoints.down('sm')]: {
            px: 2,
            py: 2
          }
        })}
      >
        <Box
          sx={(theme) => ({
            display: 'flex',
            gap: 4,
            justifyContent: 'space-between',

            [theme.breakpoints.down('md')]: {
              flexWrap: 'wrap',
              gap: 1
            },

            '@media(max-width: 500px)': {
              flexDirection: 'column'
            }
          })}
        >
          <Box
            sx={(theme) => ({
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: '230px',
              height: '180px',

              [theme.breakpoints.down('sm')]: {
                width: '180px',
                height: '130px',
                alignSelf: 'center'
              }
            })}
          >
            <Link href="/">
              <FullLogoIcon width="100%" height="100%" />
            </Link>
          </Box>

          <Box
            sx={(theme) => ({
              display: 'flex',
              gap: 8,

              [theme.breakpoints.down('md')]: {
                flex: 1,
                order: '1'
              },

              '@media(max-width: 500px)': {
                flexDirection: 'column'
              },

              [theme.breakpoints.down('sm')]: {
                gap: 2
              }
            })}
          >
            <List
              component="nav"
              dense
              subheader={
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  sx={{
                    background: 'transparent',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: '#1E284B'
                  }}
                >
                  Информация
                </ListSubheader>
              }
            >
              <ListItemButton sx={{ borderRadius: '8px' }}>
                <Link href="/company">
                  <ListItemText primary="О компании" />
                </Link>
              </ListItemButton>

              <ListItemButton sx={{ borderRadius: '8px' }}>
                <Link href="/catalog">
                  <ListItemText primary="Каталог" />
                </Link>
              </ListItemButton>

              <ListItemButton sx={{ borderRadius: '8px' }}>
                <Link href="/news">
                  <ListItemText primary="Новости" />
                </Link>
              </ListItemButton>

              <ListItemButton sx={{ borderRadius: '8px' }}>
                <Link href="/location">
                  <ListItemText primary="Где купить" />
                </Link>
              </ListItemButton>

              <ListItemButton sx={{ borderRadius: '8px' }}>
                <Link href="/contacts">
                  <ListItemText primary="Контакты" />
                </Link>
              </ListItemButton>
            </List>

            <List
              component="nav"
              dense
              subheader={
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  sx={{
                    background: 'transparent',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: '#1E284B'
                  }}
                >
                  Продукция
                </ListSubheader>
              }
            >
              <ListItemButton sx={{ borderRadius: '8px' }}>
                <Link href="/catalog">
                  <ListItemText primary="Моторные масла" />
                </Link>
              </ListItemButton>

              <ListItemButton sx={{ borderRadius: '8px' }}>
                <Link href="/catalog">
                  <ListItemText primary="Трансмиссионные масла" />
                </Link>
              </ListItemButton>

              <ListItemButton sx={{ borderRadius: '8px' }}>
                <Link href="/catalog">
                  <ListItemText primary="Индустриальные масла" />
                </Link>
              </ListItemButton>

              <ListItemButton sx={{ borderRadius: '8px' }}>
                <Link href="/catalog">
                  <ListItemText primary="Антифризы" />
                </Link>
              </ListItemButton>
            </List>

            <List
              component="nav"
              dense
              subheader={
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  sx={{
                    background: 'transparent',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    color: '#1E284B'
                  }}
                >
                  Контакты
                </ListSubheader>
              }
            >
              <ListItemButton sx={{ gap: 1, borderRadius: '8px', mb: 1 }}>
                <LocationOnOutlinedIcon color="primary" />
                <Typography variant="span" fontWeight="700" sx={{ fontSize: '14px', color: '#666' }}>
                  г. Уфа, 450071, <br /> ул. Менделеева, д. 197/2
                </Typography>
              </ListItemButton>

              <ListItemButton sx={{ gap: 1, borderRadius: '8px', mb: 1 }}>
                <LinkMui
                  variant="body1"
                  href={`mailto:oil@td-ekoil.ru`}
                  sx={(theme) => ({
                    display: 'flex',
                    gap: 1,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color: '#000',

                    [theme.breakpoints.down('sm')]: {
                      gap: 1
                    }
                  })}
                >
                  <MailOutlineIcon color="primary" />
                  <Typography variant="span" fontWeight="700" sx={{ fontSize: '14px', color: '#666' }}>
                    oil@td-ekoil.ru
                  </Typography>
                </LinkMui>
              </ListItemButton>

              <ListItemButton sx={{ gap: 1, borderRadius: '8px' }}>
                <LinkMui
                  variant="body1"
                  href={`tel:+7(347) 248-50-53`}
                  sx={(theme) => ({
                    display: 'flex',
                    // flexDirection: 'column',
                    gap: 1,
                    cursor: 'pointer',
                    textDecoration: 'none',
                    color: '#000',

                    [theme.breakpoints.down('sm')]: {
                      gap: 1
                    }
                  })}
                >
                  <LocalPhoneOutlinedIcon color="primary" />
                  <Typography variant="span" fontWeight="700" sx={{ fontSize: '14px', color: '#666' }}>
                    (347) 248-50-53
                  </Typography>
                </LinkMui>
              </ListItemButton>
            </List>
          </Box>
        </Box>

        <Typography
          color="#999"
          sx={{
            fontSize: '14px',
            mt: 2,
            '@media(max-width: 500px)': {
              textAlign: 'center'
            }
          }}
        >
          © 2015 - 2025, Все права защищены.{' '}
          <Typography variant="span" fontWeight="900">
            EKOIL
          </Typography>{' '}
          - смазочные материалы.
        </Typography>
      </Box>
    </footer>
  );
}
