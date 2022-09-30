import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from '@chakra-ui/react';
import { useAppSelector } from '../hooks';
import { Currency } from '../types';

function Home() {
  const { currencies, results } = useAppSelector((state) => state.currency);
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState<Currency>('usd');
  const [to, setTo] = useState<Currency>('uah');

  const base = results.find((el) => el[from]);
  console.log(base);
  const exchangeRate = amount * base[from][to];

  return (
    <Box>
      <Flex>
        <FormControl>
          <FormLabel>Amount</FormLabel>
          <Input
            onChange={(e) => setAmount(Number(e.target.value))}
            value={amount}
            type="number"
          />
        </FormControl>
        <Select onChange={(e) => setFrom(e.target.value)}>
          {currencies.map((el) => (
            <option key={el} value={el}>
              {el.toUpperCase()}
            </option>
          ))}
        </Select>
        <Select onChange={(e) => setTo(e.target.value)}>
          {currencies.map((el) => (
            <option key={el} value={el}>
              {el.toUpperCase()}
            </option>
          ))}
        </Select>
      </Flex>
      <Button onClick={() => {}}>go</Button>
      <Text>{exchangeRate}</Text>
    </Box>
  );
}

export default Home;
