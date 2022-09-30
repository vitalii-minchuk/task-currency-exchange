import { Box, Container, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCurrency } from '../../store/Slices/currencySlice';

function CurrencyDisplay() {
  const { isShown, currencies, baseCurrency, results } = useAppSelector(
    (state) => state.currency
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    currencies.map((el) => dispatch(fetchCurrency(el)));
  }, [currencies, dispatch]);
  return (
    <Container maxW="2xl">
      <Box>
        {isShown ? (
          <Marquee speed={20}>
            <Flex>
              {currencies
                .filter((el) => el !== baseCurrency)
                .map((el, i) => {
                  const obj = results.find((item) => item[baseCurrency]);
                  const rate = obj ? obj[baseCurrency][el] : i;
                  return (
                    <p key={rate}>
                      1 {baseCurrency.toUpperCase()} = {rate.toFixed(2)}{' '}
                      {el.toUpperCase()}
                      <br />
                    </p>
                  );
                })}
            </Flex>
          </Marquee>
        ) : (
          <Box />
        )}
      </Box>
    </Container>
  );
}

export default CurrencyDisplay;
