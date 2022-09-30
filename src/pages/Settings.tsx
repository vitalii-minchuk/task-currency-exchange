import {
  Box,
  Checkbox,
  Container,
  Flex,
  Radio,
  RadioGroup,
  Text,
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
    dispatch(addRemoveCurrency(currency as Currency));
  };
  return (
    <Box my="50px">
      <Container maxW="2xl">
        <Flex direction="column" gap="30px">
          <Flex
            direction="column"
            margin="0 auto"
            w={{ base: '324px', md: '380px' }}
          >
            <Text mb="20px" fontWeight="bold">
              Select available currencies
            </Text>
            {availableCurrencies.map((el) => (
              <Checkbox
                onChange={handleAddRemoveCurrency}
                key={el}
                value={el}
                defaultChecked={currencies.includes(el as Currency)}
                isDisabled={el === 'uah' || el === 'usd'}
              >
                {el.toUpperCase()}
              </Checkbox>
            ))}
          </Flex>
          <RadioGroup margin="0 auto" w={{ base: '324px', md: '380px' }}>
            <Flex direction="column" gap="10px">
              <Text mb="20px" fontWeight="bold">
                Select base currency
              </Text>
              {currencies.map((el) => (
                <Radio
                  defaultChecked={el === baseCurrency}
                  onChange={handleChangeBaseRate}
                  key={el}
                  value={el}
                >
                  {el.toUpperCase()}
                </Radio>
              ))}
            </Flex>
          </RadioGroup>
        </Flex>
      </Container>
    </Box>
  );
}

export default Settings;
