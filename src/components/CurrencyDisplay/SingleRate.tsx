import { Flex, Text } from '@chakra-ui/react';
import { Currency } from '../../types';

type ISingleRate = {
  from: Currency;
  to: Currency;
  rate: number;
};

function SingleRate({ from, to, rate }: ISingleRate) {
  return (
    <Flex gap="8px" color="rgb(0, 255, 0)" fontFamily="Orbitron">
      <Text>1 {from.toUpperCase()} :</Text>
      <Text>{rate.toFixed(2)}</Text>
      <Text>{to.toUpperCase()}</Text>
    </Flex>
  );
}

export default SingleRate;
