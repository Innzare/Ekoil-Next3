import React from 'react';

import { Box, Typography, Breadcrumbs } from '@mui/material';
import { useRouter, useParams, usePathname } from 'next/navigation';
import HeaderLogoBackground from '@/components/SvgIcons/HeaderLogoBackground';
import HeaderSectionBackground from '@/app/assets/header-section-background.png';
import Link from 'next/link';

const ROUTES_MAP = {
  company: 'О компании',
  catalog: 'Каталог',
  contacts: 'Контакты',
  location: 'Где купить',
  news: 'Новости',
  products: 'Продукция'
};

export default function HeaderSection({ title, dynamicRouteTitle }) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  const segments = pathname.split('/').filter(Boolean);

  const crumbs = segments.map((seg, index, array) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    // const name = decodeURIComponent(seg)
    //   .replace(/-/g, ' ')
    //   .replace(/\b\w/g, (l) => l.toUpperCase());

    const name = index === array.length - 1 && dynamicRouteTitle ? dynamicRouteTitle : ROUTES_MAP[seg];

    return { name, href };
  });

  console.log(segments);

  return (
    <Box
      sx={(theme) => ({
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        justifyContent: 'flex-end',
        backgroundImage: `url(${HeaderSectionBackground.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'left',
        height: '300px',
        p: 5,
        px: 10,

        [theme.breakpoints.down('md')]: {
          height: '250px',
          px: 5
        },

        [theme.breakpoints.down('sm')]: {
          p: 3
        }
      })}
    >
      <Typography
        variant="h1"
        sx={(theme) => ({
          fontSize: '48px',
          color: '#fff',
          fontWeight: 800,

          [theme.breakpoints.down('md')]: {
            fontSize: '32px'
          }
        })}
      >
        {title}
      </Typography>

      <Breadcrumbs aria-label="breadcrumb" sx={{ color: '#fff', fontSize: '14px' }}>
        <Link href="/">Главная</Link>

        {crumbs.map((crumb, idx) => (
          <span key={idx}>
            <Link href={crumb.href} className="hover:underline">
              <Typography variant="body1" noWrap maxWidth="100px" sx={{ fontSize: '14px' }}>
                {crumb.name}
              </Typography>
            </Link>
          </span>
        ))}
        {/* {dynamicRouteTitle && <Typography sx={{ color: 'text.primary' }}>{dynamicRouteTitle}</Typography>} */}
      </Breadcrumbs>

      <Box
        sx={(theme) => ({
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '439px',
          height: '500px',

          [theme.breakpoints.down('md')]: {
            width: '180px',
            height: '200px',
            fontSize: '32px'
          }
        })}
      >
        <HeaderLogoBackground></HeaderLogoBackground>
      </Box>
    </Box>
  );
}
