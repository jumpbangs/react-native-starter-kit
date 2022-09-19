import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  user: {},
  errMsg: '',
  isLoading: false,
};

export const loginPending = createAction('logging/pending');
export const loginFailed = createAction('logging/failed');
export const loginSuccess = createAction('logging/success');

const userReduceSlice = createReducer(INITIAL_STATE, builder => {
  builder
    .addCase(loginPending, state => {
      state.isLoading = true;
    })
    .addCase(loginFailed, (state, actions) => {
      state.isLoading = false;
      state.errMsg = actions.payload;
    })
    .addCase(loginSuccess, (state, actions) => {
      state.isLoading = false;
      state.errMsg = '';
      state.user = actions.payload;
    });
});

export default userReduceSlice;
