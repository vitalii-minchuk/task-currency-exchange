import {
  Box,
  Container,
  Flex,
  FormControl,
  Switch,
  Text,
} from '@chakra-ui/react';
import { useAppDispatch } from '../../hooks';
import { showCurrencyDisplay } from '../../store/Slices/currencySlice';
import NavLink from '../common/NavLink';

function Header() {
  const dispatch = useAppDispatch();
  const showCurrencyBarHandler = () => {
    dispatch(showCurrencyDisplay());
  };
  return (
    <Box as="header">
      <Container maxW="2xl">
        <Flex w="full" h="70px" align="center" justify="space-between">
          <Text>CurEx</Text>
          <Flex justify="space-between" w="120px">
            <NavLink to="">Home</NavLink>
            <NavLink to="settings">Settings</NavLink>
          </Flex>
          <Box>
            <FormControl display="flex" alignItems="center">
              <Switch
                onChange={showCurrencyBarHandler}
                size="sm"
                colorScheme="teal"
              />
            </FormControl>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
