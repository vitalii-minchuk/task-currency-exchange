import { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import { useAppSelector } from '../hooks';
import { Currency } from '../types';

function Home() {
  const { currencies, results } = useAppSelector((state) => state.currency);
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState<Currency>('usd');
  const [to, setTo] = useState<Currency>('uah');

  const obj = results.find((el) => el[from]);
  const exchangeRate = obj?.[from]?.[to] ? obj?.[from]?.[to] : 1;
  const display = amount * exchangeRate!;

  return (
    <Box my="50px">
      <Container maxW="2xl">
        <Flex mb="30px" direction="column" gap="60px">
          <Box>
            <FormControl>
              <FormLabel>Amount</FormLabel>
              <Input
                onChange={(e) => setAmount(Number(e.target.value))}
                value={amount}
                type="number"
              />
            </FormControl>
          </Box>
          <Box>
            <Select onChange={(e) => setFrom(e.target.value as Currency)}>
              {currencies.map((el) => (
                <option key={el} value={el}>
                  {el.toUpperCase()}
                </option>
              ))}
            </Select>
          </Box>
          <Box>
            <Select onChange={(e) => setTo(e.target.value as Currency)}>
              {currencies.map((el) => (
                <option key={el} value={el}>
                  {el.toUpperCase()}
                </option>
              ))}
            </Select>
          </Box>
        </Flex>
        <Text fontSize="xl" align="center">
          {amount} {from.toUpperCase()} = {display?.toFixed(2)}{' '}
          {to.toUpperCase()}
        </Text>
      </Container>
    </Box>
  );
}

export default Home;
