/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Currency, CurrencyState, ResponseData } from '../../types';

const initialState: CurrencyState = {
  isShown: false,
  isLoading: false,
  fetchError: '',
  currencies: ['uah', 'usd'],
  results: [],
  baseCurrency: 'usd',
  from: 'usd',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    showCurrencyDisplay(state) {
      state.isShown = !state.isShown;
    },
    fetchCurrency(state, action: PayloadAction<Currency>) {
      state.from = action.payload;
      state.isLoading = true;
    },
    fetchCurrencySuccess(state, action: PayloadAction<ResponseData>) {
      state.results.push(action.payload);
      state.isLoading = false;
    },
    fetchCurrencyFailure(state, action: PayloadAction<string>) {
      state.fetchError = action.payload;
      state.isLoading = false;
    },
    changeBaseCurrency(state, action: PayloadAction<Currency>) {
      state.baseCurrency = action.payload;
    },
    addRemoveCurrency(state, action: PayloadAction<Currency>) {
      if (state.currencies.includes(action.payload)) {
        state.currencies = state.currencies.filter(
          (el) => el !== action.payload
        );
      } else {
        state.currencies.push(action.payload);
      }
    },
  },
});

export const {
  showCurrencyDisplay,
  fetchCurrency,
  fetchCurrencySuccess,
  fetchCurrencyFailure,
  changeBaseCurrency,
  addRemoveCurrency,
} = currencySlice.actions;

export default currencySlice.reducer;
