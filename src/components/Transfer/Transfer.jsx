import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import _ from 'lodash';
import {
  FormControl,
  InputLabel,
  InputAdornment,
  MenuItem,
  Select,
  TextField,
  Button,
  Box,
  Typography,
  Modal,
  Alert,
  AlertTitle,
} from '@material-ui/core';

import { mapRange, format } from '../../utils/helpers/number.helpers';
import { cardsSelector } from '../../store/cards/cards.slice';

const Transfer = () => {
  const [open, setOpen] = useState(false);

  const [error, setError] = useState(false);

  const [values, setValues] = useState(null);

  const handleClose = () => setOpen(false);

  const { cards } = useSelector(cardsSelector);

  const renderContent = () => {
    if (cards.length > 1) {
      return (
        <>
          <Typography variant="h3" component="h3" sx={{ mb: 2 }}>
            Перевод на&nbsp;кошелёк
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Box>
              <FormControl sx={{ width: '50%' }}>
                <InputLabel id="receiver">Куда перевести</InputLabel>
                <Select
                  labelId="receiver"
                  id="receiver-id"
                  value=""
                  label="Куда перевести"
                  error={!!(formik.touched.receiver && formik.errors.receiver)}
                  {...formik.getFieldProps('receiver')}
                >
                  {cards.map((card) => (
                    <MenuItem key={card.id} value={card.cardNumber}>
                      {mapRange(format(card.cardNumber), '•', 6, 4)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {formik.touched.receiver && formik.errors.receiver ? (
                <Box fontSize="small" sx={{ mt: 1, color: 'error.main' }}>
                  {formik.errors.receiver}
                </Box>
              ) : null}
            </Box>

            <Box
              sx={{
                marginTop: '24px',
                marginBottom: '24px',
              }}
            >
              <TextField
                id="sum"
                type="text"
                label="Сколько"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="end">
                      &#8381;&nbsp;
                    </InputAdornment>
                  ),
                }}
                error={!!(formik.touched.sum && formik.errors.sum)}
                {...formik.getFieldProps('sum')}
              />
              {formik.touched.sum && formik.errors.sum ? (
                <Box fontSize="small" sx={{ mt: 1, color: 'error.main' }}>
                  {formik.errors.sum}
                </Box>
              ) : null}
            </Box>

            <Box>
              <FormControl
                error={!!(formik.touched.sender && formik.errors.sender)}
                sx={{ width: '50%' }}
              >
                <InputLabel id="receiver">Откуда</InputLabel>
                <Select
                  labelId="receiver"
                  id="receiver-id"
                  value=""
                  label="Откуда"
                  {...formik.getFieldProps('sender')}
                >
                  {cards.map((card) => (
                    <MenuItem key={card.id} value={card.cardNumber}>
                      {mapRange(format(card.cardNumber), '•', 6, 4)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {formik.touched.sender && formik.errors.sender ? (
                <Box fontSize="small" sx={{ mt: 1, color: 'error.main' }}>
                  {formik.errors.sender}
                </Box>
              ) : null}
            </Box>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={Object.keys(formik.errors).length !== 0}
              sx={{
                marginTop: '24px',
                '&:disabled': {
                  cursor: 'not-allowed',
                  pointerEvents: 'all',
                },
              }}
            >
              Сделать перевод
            </Button>
          </form>
          <ModalAlert
            open={open}
            handleClose={handleClose}
            error={error}
            data={values}
          />
        </>
      );
    }

    return null;
  };

  const formik = useFormik({
    initialValues: {
      sender: '',
      receiver: '',
      sum: '',
    },
    validationSchema: Yup.object({
      sender: Yup.string().required('Выберите значение из списка'),
      sum: Yup.string()
        .matches(/^[0-9]*$/, 'Введено Недопустимое значение')
        .required('Поле не может быть пустым'),
      receiver: Yup.string().required('Выберите значение из списка'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(false);
      setError(_.isEqual(values.sender, values.receiver));
      setValues(JSON.stringify(values, null, 2));
      setOpen(true);
    },
  });

  return renderContent();
};

const ModalAlert = ({ open, handleClose, error, data }) => {
  console.log(error);
  const renderBody = () => {
    if (!error) {
      console.log('.');
      return (
        <>
          <AlertTitle>Успех!</AlertTitle>
          {data}
        </>
      );
    }

    return (
      <>
        <AlertTitle>Ошибка!</AlertTitle>
        Отправитель и получатель совпадают.
      </>
    );
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div>
        <Alert
          severity={error ? 'error' : 'success'}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
        >
          {renderBody()}
        </Alert>
      </div>
    </Modal>
  );
};

export default Transfer;
