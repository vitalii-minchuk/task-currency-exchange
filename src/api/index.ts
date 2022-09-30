import axios, { AxiosResponse } from 'axios';
import { Currency, ResponseData } from '../types';

const baseUrl =
  'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/';

const fetchData = async (base: Currency) => {
  const response = await axios.get<AxiosResponse<ResponseData>>(
    `${baseUrl}${base}.json`
  );
  const data = await response.data;
  const result = await data;
  return result;
};

export default fetchData;
