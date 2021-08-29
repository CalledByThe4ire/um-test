import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { toggleModal } from '../../store/modal/modal.slice';
import { resetProcess } from '../../store/linkingProcess/linkingProcess.slice';
import { cardsSelector } from '../../store/cards/cards.slice';
import { modalSelector } from '../../store/modal/modal.slice';
import { linkingProcessSelector } from '../../store/linkingProcess/linkingProcess.slice';
import CreditCardList from '../CreditCardList/CreditCardList.jsx';
import NewCreditCard from '../NewCreditCard/NewCreditCard.jsx';
import CreditCardForm from '../CreditCardForm/CreditCardForm.jsx';
import { CreditCards as CreditCardsStyled } from './CreditCards.styles.jsx';
import { CreditCard as NewCreditCardInner } from '../CreditCard/CreditCard.styles.jsx';

const CreditCards = () => {
  const dispatch = useDispatch();

  const { cards } = useSelector(cardsSelector);
  const { isOpen } = useSelector(modalSelector);
  const { isSuccess } = useSelector(linkingProcessSelector);

  const handleClick = () => {
    dispatch(toggleModal());
  };

  const renderContent = () => {
    if (isOpen && !isSuccess) {
      return (
        <NewCreditCard>
          <NewCreditCardInner
            className="new-credit-card__inner"
            square={true}
            elevation={6}
          ></NewCreditCardInner>
          <CreditCardForm />
        </NewCreditCard>
      );
    }
    if (isOpen && isSuccess) {
      return (
        <>
          <Typography variant="h5" component="h5">
            Всё получилось!
          </Typography>

          <Typography variant="body1" component="p">
            Через минуту ваша карта появится в&nbsp;кошельке&nbsp;&mdash;
            <br />
            вы&nbsp;увидите ее&nbsp;в&nbsp;разделе &laquo;Банковские
            карты&raquo;
          </Typography>

          <Button
            variant="contained"
            color="success"
            onClick={() => {
              dispatch(resetProcess());
              dispatch(toggleModal());
            }}
          >
            Обратно к&nbsp;картам
          </Button>
        </>
      );
    }

    return (
      <>
        <CreditCardList className="credit-cards__list" />
        <Button
          variant="contained"
          color="primary"
          className="credit-cards__button"
          onClick={handleClick}
        >
          {cards.length ? 'Привязать еще одну' : 'Привязать карту'}
        </Button>
      </>
    );
  };

  return (
    <>
      <CreditCardsStyled className="credit-cards">
        <Typography variant="h3" component="h3" className="credit-cards__title">
          {isOpen ? 'Привязка банковской карты' : 'Мои карты'}
        </Typography>
        {renderContent()}
      </CreditCardsStyled>
    </>
  );
};

export default CreditCards;
