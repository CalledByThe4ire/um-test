import { createSlice } from '@reduxjs/toolkit';

export const initialState = [];

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
