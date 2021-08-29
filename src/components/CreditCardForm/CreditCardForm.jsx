import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import IMask from 'imask';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles';

import { CreditCardForm as CreditCardFormStyled } from './CreditCardForm.styles.jsx';
import { PaletteTheme } from '../../themes/palette.theme';
import { toggleModal } from '../../store/modal/modal.slice';
import {
  completeProcess,
} from '../../store/linkingProcess/linkingProcess.slice';
import { addCard } from '../../store/cards/cards.slice';

const CreditCardForm = () => {
  const dispatch = useDispatch();

  const inputCardNumberRef = useRef();

  const inputReleaseDateRef = useRef();

  useEffect(() => {
    inputCardNumberRef?.current?.focus();

    IMask(inputReleaseDateRef?.current, {
      mask: '00/00',
    });
  }, []);

  const handleClick = () => {
    dispatch(toggleModal());
  };

  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      releaseDate: '',
      cvc: '',
    },
    validationSchema: Yup.object({
      cardNumber: Yup.string()
        .matches(/^[0-9]{16}$/, 'Введено Недопустимое значение')
        .required('Поле не может быть пустым'),
      releaseDate: Yup.string()
        .matches(/^[0-9]{2}\/[0-9]{2}$/, 'Введено Недопустимое значение')
        .required('Поле не может быть пустым'),
      cvc: Yup.string()
        .matches(/^[0-9]{3}$/, 'Введено Недопустимое значение')
        .required('Поле не может быть пустым'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(false);
      dispatch(
        addCard({
          ...Object.keys(values).reduce((acc, val) => {
            const newAcc = {
              ...acc,
              [val]: parseInt(values[val]),
              id: uuidv4(),
            };

            return newAcc;
          }, {}),
        })
      );
      resetForm();
      dispatch(completeProcess());
    },
  });

  return (
    <CreditCardFormStyled
      className="credit-card-form"
      onSubmit={formik.handleSubmit}
    >
      <Box className="credit-card-form__field credit-card-form-field">
        <TextField
          inputRef={inputCardNumberRef}
          className="credit-card-form-field__input"
          id="cardNumber"
          type="text"
          label="Номер карты"
          placeholder="Номер карты"
          size="small"
          error={!!(formik.touched.cardNumber && formik.errors.cardNumber)}
          {...formik.getFieldProps('cardNumber')}
        />

        {formik.touched.cardNumber && formik.errors.cardNumber ? (
          <Box className="credit-card-form-field__error-message">
            {formik.errors.cardNumber}
          </Box>
        ) : null}
      </Box>

      <Box className="credit-card-form__field credit-card-form-field">
        <TextField
          inputRef={inputReleaseDateRef}
          className="credit-card-form-field__input"
          id="releaseDate"
          type="text"
          label="Дата выпуска"
          placeholder="ММ/ГГ"
          size="small"
          error={!!(formik.touched.releaseDate && formik.errors.releaseDate)}
          {...formik.getFieldProps('releaseDate')}
        />
        {formik.touched.cardNumber && formik.errors.releaseDate ? (
          <Box className="credit-card-form-field__error-message">
            {formik.errors.releaseDate}
          </Box>
        ) : null}
      </Box>
      <Box className="credit-card-form__field credit-card-form-field">
        <TextField
          className="credit-card-form-field__input"
          id="cvc"
          type="text"
          label="CVC"
          size="small"
          error={!!(formik.touched.cvc && formik.errors.cvc)}
          {...formik.getFieldProps('cvc')}
        />
        {formik.touched.cardNumber && formik.errors.cvc ? (
          <Box className="credit-card-form-field__error-message">
            {formik.errors.cvc}
          </Box>
        ) : null}
      </Box>

      <ThemeProvider theme={PaletteTheme}>
        <Box className="credit-card-form__controls">
          <Button
            className="credit-card-form__button credit-card-form__button--cancel"
            variant="contained"
            color="neutral"
            onClick={handleClick}
          >
            Отменить
          </Button>
          <Button
            className="credit-card-form__button credit-card-form__button--submit"
            variant="contained"
            color={
              Object.keys(formik.errors).length === 0 ? 'primary' : 'error'
            }
            disabled={Object.keys(formik.errors).length !== 0}
            type="submit"
          >
            Продолжить
          </Button>
        </Box>
      </ThemeProvider>
    </CreditCardFormStyled>
  );
};

export default CreditCardForm;
