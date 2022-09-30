import { put, select, takeEvery } from '@redux-saga/core/effects';
import fetchData from '../../api';
import { Currency, ResponseData } from '../../types';
import {
  fetchCurrency,
  fetchCurrencyFailure,
  fetchCurrencySuccess,
} from '../Slices/currencySlice';

export function* fetchCurrencySaga() {
  try {
    const from: Currency = yield select((store) => store.currency.from);

    const data: ResponseData = yield fetchData(from);
    yield put(fetchCurrencySuccess(data));
  } catch (error: any) {
    yield put(fetchCurrencyFailure(error.message));
  }
}

export function* rootCurrencySaga() {
  yield takeEvery(fetchCurrency.type, fetchCurrencySaga);
}
