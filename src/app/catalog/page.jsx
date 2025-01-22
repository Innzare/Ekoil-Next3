'use client';

import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  Grid2 as Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import ProductItem from './ProductItem/ProductItem';
import ProductItemLine from './ProductItem/ProductItemLine';
import SectionTitle from '@/components/SectionTitle/SectionTitle';
import Categories from './Categories/Categories';
import Filters from './Filters/Filters';
import ViewModeButtons from './ViewModeButtons/ViewModeButtons';
import FeedbackBlock from '@/components/FeedbackBlock/FeedbackBlock';
import CircularProgress from '@mui/material/CircularProgress';
import HideImageOutlinedIcon from '@mui/icons-material/HideImageOutlined';
import Pagination from '@mui/material/Pagination';
import axios from 'axios';

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

import { ITEMS, CATEGORIES } from '@/consts/products';
import { useRouter } from 'next/navigation';

const LIMIT = 10;

export default function Catalog() {
  const router = useRouter();

  const [items, setItems] = useState([]);
  const [itemsCount, setItemsCount] = useState(0);
  const [page, setPage] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [categoryId, setCategoryId] = useState(4);
  const [viewMode, setViewMode] = useState('grid');
  const [gridViewMode, setGridViewMode] = useState('grid-three-line');

  useEffect(() => {
    loadOils(page, categoryId);
  }, []);

  const loadOils = async (page, categoryId) => {
    setIsLoading(true);

    const offsetCalculated = page * LIMIT;

    const { data } = await axios.get(
      `api/products/all?limit=${LIMIT}&offset=${offsetCalculated}&filter_category=${categoryId}`
    );
    await axios.get(`api/products/search/M19`);
    const response = await axios.get('api/products/filters');

    const { results, count, next, previous } = data;

    const countFormatted = Math.ceil(count / LIMIT);

    setItemsCount(countFormatted);

    const dataFormatted = results.map((item) => {
      return {
        id: item.id,
        name: item.name,
        subtitle: item.viscosity?.name,
        img: item.images.first,
        specifications: item.specifications,
        tare: item.tare,
        product_number: item.product_number,
        description: item.description
      };
    });

    setItems(dataFormatted);
    setIsLoading(false);
  };

  const onCategoryChange = (event, newCategoryId) => {
    if (newCategoryId === null) {
      return;
    }

    setCategoryId(newCategoryId);
    loadOils(0, newCategoryId);
  };

  const onViewModeChange = (event, newMode) => {
    if (newMode === null) {
      return;
    }

    setViewMode(newMode);
  };

  const onGridViewModeChange = (event, newMode) => {
    if (newMode === null) {
      return;
    }

    setGridViewMode(newMode);
  };

  const handleNavigate = () => {
    router.push(`/catalog/${selectedProduct.id}`);
  };

  const onCloseProductDialogClick = () => {
    setIsDialogOpen(false);
    // setSelectedProduct(null);
  };

  const onProductPreviewClick = (product) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const renderTares = () => {
    if (selectedProduct) {
      return selectedProduct.tare.map((tare) => tare.name).join(' / ');
    }

    return '';
  };

  return (
    <div>
      <Card elevation={3}>
        <Box
          sx={{
            backgroundImage: 'url(https://aimol.ru/bitrix/templates/aspro_max/images/09/company_top.jpg)',
            height: '300px',
            p: 5
          }}
        >
          <SectionTitle text="Каталог" isLight className="scroll" />
        </Box>

        <Box sx={{ p: 3 }}>
          <Categories list={CATEGORIES} value={categoryId} change={onCategoryChange} />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              // flexWrap: 'wrap',
              gap: '24px',
              marginTop: '40px'
            }}
          >
            <Filters />
            <Box sx={{ flex: 1 }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '24px'
                }}
              >
                <h1>{CATEGORIES.find((item) => item.id === categoryId)?.fullTitle || ''}</h1>

                <ViewModeButtons
                  viewMode={viewMode}
                  gridViewMode={gridViewMode}
                  onGridViewModeChange={onGridViewModeChange}
                  onViewModeChange={onViewModeChange}
                />
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                {isLoading ? (
                  <Grid container spacing={4} sx={{ marginTop: '24px', width: '100%' }}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
                      return (
                        <Grid size={4}>
                          <Stack spacing={1}>
                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                            <Skeleton variant="rounded" width="100%" height={285} />
                            {/* <Skeleton variant="circular" width={40} height={40} />
                          <Skeleton variant="rectangular" width={210} height={60} />
                          <Skeleton variant="rounded" width={210} height={60} /> */}
                          </Stack>
                        </Grid>
                      );
                    })}
                  </Grid>
                ) : (
                  // <CircularProgress />
                  <Grid container spacing={4} sx={{ marginTop: '24px', width: '100%' }}>
                    {items.map((item, index) => {
                      return viewMode === 'grid' ? (
                        <Grid
                          key={index}
                          size={{
                            xs: 12,
                            sm: 12,
                            md: 6,
                            lg: gridViewMode === 'grid-three-line' ? 4 : 3
                          }}
                        >
                          <ProductItem data={item} onProductPreviewClick={onProductPreviewClick} />
                        </Grid>
                      ) : (
                        <Grid key={index} size={{ md: 12 }}>
                          <ProductItemLine data={item} onProductPreviewClick={onProductPreviewClick} />
                        </Grid>
                      );
                    })}
                  </Grid>
                )}
              </Box>

              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Pagination
                  sx={{ mt: 4 }}
                  page={page + 1}
                  count={itemsCount}
                  onChange={(event, page) => {
                    setPage(page - 1);
                    loadOils(page - 1, categoryId);

                    document.querySelector('.scroll')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  color="primary"
                  variant="outlined"
                  shape="rounded"
                  size="large"
                />
              </Box>
            </Box>
            ,
          </Box>
          <Box sx={{ mt: 8 }}>
            <FeedbackBlock />
          </Box>
        </Box>
      </Card>

      <Dialog
        open={isDialogOpen}
        onClose={onCloseProductDialogClick}
        scroll="paper"
        maxWidth="md"
        disableScrollLock
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle
          id="scroll-dialog-title"
          sx={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontWeight: '900',
            textTransform: 'uppercase',
            fontSize: '32px'
          }}
        >
          {`${selectedProduct?.name} ${selectedProduct?.subtitle}`}

          <IconButton onClick={onCloseProductDialogClick}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent dividers>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '48px',
              position: 'relative',
              pr: 4
            }}
          >
            <Box
              sx={{
                position: 'sticky',
                top: 0,
                left: 0
                // transform: 'translateY(-50%)'
              }}
            >
              {selectedProduct?.img ? (
                <img src={selectedProduct?.img} alt={selectedProduct?.name} width="300" height="300" />
              ) : (
                <Box
                  sx={{
                    width: '300px',
                    height: '300px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#f5f5f5',
                    borderRadius: '6px',
                    marginBottom: '32px'
                  }}
                >
                  <HideImageOutlinedIcon sx={{ color: '#ccc', fontSize: '46px' }} />
                </Box>
              )}
            </Box>

            <Box>
              <h2>Описание</h2>
              <Box sx={{ mb: 3, mt: 1 }} dangerouslySetInnerHTML={{ __html: selectedProduct?.description }} />

              {/* <h2>Область прменения</h2>
              <Box sx={{ mb: 3, mt: 1 }}>{selectedProduct?.description}</Box> */}

              <h2>Спецификации</h2>
              <Box sx={{ mb: 3, mt: 1 }} dangerouslySetInnerHTML={{ __html: selectedProduct?.specifications }} />

              <h2>Варианты фасовки</h2>
              <Box sx={{ mb: 3, mt: 1 }}>{renderTares()}</Box>
            </Box>
          </Box>
        </DialogContent>

        <DialogActions
          sx={{
            p: 2,
            gap: '16px',
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              gap: '16px',
              display: 'flex'
            }}
          >
            <Button
              sx={{ textTransform: 'initial' }}
              size="large"
              variant="contained"
              disableElevation
              onClick={onCloseProductDialogClick}
            >
              Скачать TDS
              <DescriptionOutlinedIcon sx={{ ml: 2 }} />
            </Button>
            <Button
              sx={{ textTransform: 'initial' }}
              size="large"
              variant="contained"
              disableElevation
              startIcon={<SubjectOutlinedIcon />}
              onClick={handleNavigate}
            >
              Подробнее
            </Button>
          </Box>

          <Button sx={{ textTransform: 'initial' }} size="large" variant="outlined" onClick={onCloseProductDialogClick}>
            Закрыть
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
