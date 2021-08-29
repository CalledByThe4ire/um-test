import { combineReducers } from 'redux';

import cardsReducer from './cards/cards.slice';
import modalReducer from './modal/modal.slice';

const rootReducer = combineReducers({
  cards: cardsReducer,
  modal: modalReducer,
});

export default rootReducer;
