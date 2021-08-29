import { combineReducers } from 'redux';

import cardsReducer from './cards/cards.slice';
import modalReducer from './modal/modal.slice';
import linkingProcessReducer from './linkingProcess/linkingProcess.slice';

const rootReducer = combineReducers({
  cards: cardsReducer,
  modal: modalReducer,
  linkingProcess: linkingProcessReducer,
});

export default rootReducer;
