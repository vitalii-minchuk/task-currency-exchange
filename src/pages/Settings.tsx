import {
  Box,
  Checkbox,
  Container,
  Flex,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react';
import { ChangeEvent } from 'react';
import availableCurrencies from '../constants';
import { useAppDispatch, useAppSelector } from '../hooks';
import {
  addRemoveCurrency,
  changeBaseCurrency,
} from '../store/Slices/currencySlice';
import { Currency } from '../types';

function Settings() {
  const { currencies, baseCurrency } = useAppSelector(
    (state) => state.currency
  );
  const dispatch = useAppDispatch();

  const handleChangeBaseRate = (e: ChangeEvent<HTMLInputElement>) => {
    const base = e.currentTarget.value;
    dispatch(changeBaseCurrency(base as Currency));
  };
  const handleAddRemoveCurrency = (e: ChangeEvent<HTMLInputElement>) => {
    const currency = e.currentTarget.value;
    console.log(currency);
    dispatch(addRemoveCurrency(currency as Currency));
  };
  return (
    <Box>
      <Container maxW="2xl">
        <RadioGroup margin="0 auto" w={{ base: '324px', md: '380px' }}>
          <Flex direction="column" gap="9px" color="rgba(0, 0, 0, 0.87)">
            {currencies.map((el) => (
              <Radio
                defaultChecked={el === baseCurrency}
                onChange={handleChangeBaseRate}
                key={el}
                variant="myRadio"
                value={el}
              >
                {el}
              </Radio>
            ))}
          </Flex>
        </RadioGroup>
        <Stack spacing={5} direction="row">
          {availableCurrencies.map((el) => (
            <Checkbox
              onChange={handleAddRemoveCurrency}
              key={el}
              value={el}
              defaultChecked={el === 'usd' || el === 'uah'}
              isDisabled={el === 'uah' || el === 'usd'}
            >
              {el.toUpperCase()}
            </Checkbox>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default Settings;
