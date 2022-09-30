import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from '@redux-saga/core';
import logger from 'redux-logger';
import { all, fork } from '@redux-saga/core/effects';
import currencyReducer from './Slices/currencySlice';
import { rootCurrencySaga } from './Sagas/currencySaga';

const combinedReducer = combineReducers({
  currency: currencyReducer,
});

const rootSaga = function* rootGenerator() {
  yield all([fork(rootCurrencySaga)]);
};

const sagaMMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware();
    return [...defaultMiddleware, sagaMMiddleware, logger];
  },
});

sagaMMiddleware.run(rootSaga);

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
