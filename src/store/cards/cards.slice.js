import { createSlice } from '@reduxjs/toolkit';
// import { genRandom } from '../../utils/helpers/number.helpers';
// import { v4 as uuidv4 } from 'uuid';

// const initialState = {
//   cards: Array.from({ length: 6 }).map((val) => ({
//     cardNumber: genRandom(16),
//     releaseDate: genRandom(4),
//     cvc: genRandom(3),
//     id: uuidv4(),
//   })),
// };

export const initialState = {
  cards: [],
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, { payload }) => {
      state.cards.push(payload);
    },
  },
});

export const { addCard } = cardsSlice.actions;

export const cardsSelector = (state) => state.cards;

export default cardsSlice.reducer;
