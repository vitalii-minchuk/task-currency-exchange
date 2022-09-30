export type ServerCurrencyRate = {
  usd: number;
  uah: number;
  eur: number;
  pln: number;
};

export type ResponseData = {
  uah?: ServerCurrencyRate;
  usd?: ServerCurrencyRate;
  eur?: ServerCurrencyRate;
  pln?: ServerCurrencyRate;
};

export type Currency = 'uah' | 'usd' | 'eur' | 'pln';

export type CurrencyState = {
  isShown: boolean;
  isLoading: boolean;
  fetchError: string;
  currencies: Array<Currency>;
  results: Array<ResponseData>;
  baseCurrency: Currency;
  from: Currency;
};
