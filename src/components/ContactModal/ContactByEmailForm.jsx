import React, { useState } from 'react';
import { useStore } from '@/store';
import { Box, TextField, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { IMaskInput } from 'react-imask';
import axios from 'axios';

const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="+7 (###) ###-##-##"
      definitions={{
        '#': /[1-9]/
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

const schema = z.object({
  name: z.string().nonempty('Поле обязательно для заполнения'),
  email: z.string().nonempty('Поле обязательно для заполнения').email('Некорректный email'),
  phone: z
    .string()
    .nonempty('Поле обязательно для заполнения')
    .transform((val) => val.replace(/\D/g, '')) // удаляем всё кроме цифр
    .refine((val) => val.length === 11 && val.startsWith('7'), {
      message: 'Введите корректный номер телефона'
    }),
  message: z.string()
});

export default function ContactByEmailForm({ close }) {
  const [isLoading, setIsLoading] = useState(false);
  const { openSnackbar } = useStore();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'all',
    resolver: zodResolver(schema)
  });

  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      await axios.post('api/feedback/application', {
        ...data,
        feedback_type: 'email'
      });

      openSnackbar('success', 'Ваше сообщение успешно отправлено!');
      onClose();
    } catch (error) {
      console.error(error);
      openSnackbar('error', 'Произошла ошибка при отправке сообщения. Пожалуйста, попробуйте позже.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSnackbarClose = () => {
    setIsSnackbarOpen(false);
  };

  const onClose = () => {
    close();
    reset();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        py: 2
      }}
    >
      <TextField
        {...register('name')}
        error={!!errors.name}
        helperText={errors.name ? errors.name.message : ''}
        fullWidth
        id="filled-required"
        label="Имя"
        variant="outlined"
        sx={{
          position: 'relative',

          '& .MuiFormHelperText-root': {
            position: 'absolute',
            bottom: '-20px'
          }
        }}
      />
      <TextField
        {...register('phone')}
        error={!!errors.phone}
        helperText={errors.phone ? errors.phone.message : ''}
        label="Телефон"
        placeholder="+7 (###) ###-##-##"
        slotProps={{
          input: {
            inputComponent: TextMaskCustom
          }
        }}
        sx={{
          position: 'relative',

          '& .MuiFormHelperText-root': {
            position: 'absolute',
            bottom: '-20px'
          }
        }}
      />
      <TextField
        {...register('email')}
        error={!!errors.email}
        helperText={errors.email ? errors.email.message : ''}
        fullWidth
        id="filled-required"
        label="Email"
        variant="outlined"
        sx={{
          position: 'relative',

          '& .MuiFormHelperText-root': {
            position: 'absolute',
            bottom: '-20px'
          }
        }}
      />

      <TextField
        {...register('message')}
        fullWidth
        id="outlined-multiline-static"
        multiline
        rows={4}
        label="Введите ваше сообщение"
        variant="outlined"
      />

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          mt: 4
        }}
      >
        <Button
          sx={{ textTransform: 'initial' }}
          disabled={isLoading}
          size="large"
          variant="outlined"
          disableElevation
          onClick={onClose}
        >
          Закрыть
        </Button>

        <Button
          sx={{ textTransform: 'initial' }}
          loading={isLoading}
          type="submit"
          size="large"
          variant="contained"
          disableElevation
        >
          Отправить
        </Button>
      </Box>
    </Box>
  );
}
