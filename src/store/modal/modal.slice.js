import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isOpen: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleModal } = modalSlice.actions;

export const cardsSelector = (state) => state.modal;

export default modalSlice.reducer;
