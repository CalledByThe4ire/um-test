import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isSuccess: false,
};

const linkingProcessSlice = createSlice({
  name: 'linkingProcess',
  initialState,
  reducers: {
    resetProcess: (state) => {
      state.isSuccess = false;
    },
    completeProcess: (state) => {
      state.isSuccess = true;
    },
  },
});

export const { resetProcess, completeProcess } = linkingProcessSlice.actions;

export const linkingProcessSelector = (state) => state.linkingProcess;

export default linkingProcessSlice.reducer;
