import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VerifiedIcon from '@mui/icons-material/Verified';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import FactoryIcon from '@mui/icons-material/Factory';

export const sidenav = [
  {
    title: 'Главная',
    path: '/',
    icon: HomeIcon
  },
  {
    title: 'Компания',
    path: '/company',
    icon: FactoryIcon
  },
  {
    title: 'Продукция',
    path: '/products',
    icon: OilBarrelIcon
  },
  // {
  //   title: 'Подбор',
  //   path: '/search',
  //   icon: FilterAltIcon
  // },
  // {
  //   title: 'Сертификаты',
  //   path: '/sertificates',
  //   icon: VerifiedIcon
  // },
  {
    title: 'Где купить',
    path: '/location',
    icon: LocationOnIcon
  },
  {
    title: 'Контакты',
    path: '/contacts',
    icon: CallIcon
  }
];
