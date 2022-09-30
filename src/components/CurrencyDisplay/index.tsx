import { Box, Flex } from '@chakra-ui/react';
import { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchCurrency } from '../../store/Slices/currencySlice';
import SingleRate from './SingleRate';

function CurrencyDisplay() {
  const { isShown, currencies, baseCurrency, results } = useAppSelector(
    (state) => state.currency
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    currencies.map((el) => dispatch(fetchCurrency(el)));
  }, [currencies, dispatch]);
  return (
    <Box bg="black" height="40px">
      {isShown && (
        <Marquee gradientWidth="15%" gradientColor={[15, 15, 15]} speed={120}>
          <Flex align="center" height="40px" gap="30px">
            {currencies
              .filter((el) => el !== baseCurrency)
              .map((el, i) => {
                const obj = results.find((item) => item[baseCurrency]);
                const rate = obj![baseCurrency]![el];
                return (
                  <SingleRate
                    rate={rate}
                    from={baseCurrency}
                    to={el}
                    key={rate}
                  />
                );
              })}
          </Flex>
        </Marquee>
      )}
    </Box>
  );
}

export default CurrencyDisplay;
