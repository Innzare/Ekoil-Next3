import React from 'react';
import { useRouter } from 'next/navigation';
import { Box, Typography } from '@mui/material';
import NewspaperIcon from '@mui/icons-material/Newspaper';

export default function NewsItem(props) {
  const { data } = props;

  const router = useRouter();

  const handleNavigate = () => {
    router.push(`/news/${data.id}`);
  };

  return (
    <Box
      onClick={handleNavigate}
      sx={{
        cursor: 'pointer',
        height: '320px',
        maxHeight: '320px',

        '&:hover': {
          '.news-icon': {
            fontSize: '48px'
          }
        },

        '&:hover': {
          '.news-image': {
            transform: 'translateY(-5px)'
          }
        },

        '&:hover': {
          '.news-title': {
            color: '#CC2828'
          }
        }
      }}
    >
      <Box
        sx={(theme) => ({
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '250px',
          borderRadius: '8px',
          // transition: '0.25s ease',
          mb: 2,
          backgroundColor: '#F9FAFB',
          // backgroundImage: `url(${data.image})`,
          // backgroundPosition: 'center',
          // backgroundSize: 'cover',

          overflow: 'hidden',

          '.news-image': {
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            transition: '0.35s'
          },

          [theme.breakpoints.down('sm')]: {
            height: '200px',
            mb: 1
          }
        })}
      >
        {!data.image ? (
          <NewspaperIcon className="news-icon" fontSize="large" sx={{ color: '#666', transition: 'font-size .25s' }} />
        ) : (
          <img className="news-image" src={data.image}></img>
        )}
      </Box>

      <Typography
        variant="h6"
        fontWeight="700"
        color="initial"
        noWrap
        className="news-title"
        sx={(theme) => ({
          mb: 2,
          // textTransform: 'uppercase',
          lineHeight: '1.5',
          transition: 'color .25s',

          [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
            mb: 1
          }
        })}
      >
        {data.title}
      </Typography>

      <Typography
        variant="body"
        sx={(theme) => ({
          color: '#666',
          [theme.breakpoints.down('sm')]: {
            fontSize: '14px'
          }
        })}
      >
        {data.published_at}
      </Typography>
    </Box>
  );
}
