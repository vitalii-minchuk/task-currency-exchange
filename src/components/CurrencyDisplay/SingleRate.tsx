import { Flex, Text } from '@chakra-ui/react';
import { Currency } from '../../types';

type ISingleRate = {
  from: Currency;
  to: Currency;
  rate: number;
};

function SingleRate({ from, to, rate }: ISingleRate) {
  return (
    <Flex gap="8px">
      <Text>1 {from.toUpperCase()} :</Text>
      <Text>{rate}</Text>
      <Text>{to.toUpperCase()}</Text>
    </Flex>
  );
}

export default SingleRate;
