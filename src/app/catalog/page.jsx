'use client';

import React, { useState } from 'react';
import {
  Box,
  Card,
  Grid,
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

import { ITEMS, CATEGORIES } from '@/consts/products';
import { useRouter } from 'next/navigation';

export default function Catalog() {
  const router = useRouter();

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [category, setCategory] = useState('passenger');
  const [viewMode, setViewMode] = useState('grid');
  const [gridViewMode, setGridViewMode] = useState('grid-three-line');

  const onCategoryChange = (event, newCategory) => {
    if (newCategory === null) {
      return;
    }

    setCategory(newCategory);
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
          <SectionTitle text="Каталог" isLight />
        </Box>

        <Box sx={{ p: 3 }}>
          <Categories list={CATEGORIES} value={category} change={onCategoryChange} />
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

            <Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '24px'
                }}
              >
                <h1>{CATEGORIES.find((item) => item.value === category)?.fullTitle || ''}</h1>

                <ViewModeButtons
                  viewMode={viewMode}
                  gridViewMode={gridViewMode}
                  onGridViewModeChange={onGridViewModeChange}
                  onViewModeChange={onViewModeChange}
                />
              </Box>

              <Grid container spacing={4} sx={{ marginTop: '0px' }}>
                {ITEMS.map((item, index) => {
                  return viewMode === 'grid' ? (
                    <Grid key={index} item xs={12} sm={12} md={6} lg={gridViewMode === 'grid-three-line' ? 4 : 3}>
                      <ProductItem data={item} onProductPreviewClick={onProductPreviewClick} />
                    </Grid>
                  ) : (
                    <Grid key={index} item md={12}>
                      <ProductItemLine data={item} onProductPreviewClick={onProductPreviewClick} />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
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
              position: 'relative'
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
              <img src={selectedProduct?.img.src} alt={selectedProduct?.name} width="300" height="300" />
            </Box>

            <Box>
              <h2>Описание</h2>
              <Box sx={{ mb: 3, mt: 1 }}>{selectedProduct?.description}</Box>

              {/* <h2>Область прменения</h2>
              <Box sx={{ mb: 3, mt: 1 }}>{selectedProduct?.description}</Box> */}

              <h2>Спецификации</h2>
              <Box sx={{ mb: 3, mt: 1 }}>API SP, ILSAC GF-6B</Box>

              <h2>Варианты фасовки</h2>
              <Box sx={{ mb: 3, mt: 1 }}>1 Л, 4 Л, 5 Л, 205 Л</Box>
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
