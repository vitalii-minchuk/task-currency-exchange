import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Switch,
  Text,
} from '@chakra-ui/react';
import NavLink from '../common/NavLink';

function Header() {
  return (
    <Box as="header">
      <Container maxW="2xl">
        <Flex w="full" h="70px" align="center" justify="space-between">
          <Text>CurEx</Text>
          <Flex gap="20px">
            <NavLink to="">Home</NavLink>
            <NavLink to="settings">Settings</NavLink>
          </Flex>
          <Box>
            <FormControl display="flex" alignItems="center">
              <Switch size="sm" colorScheme="teal" />
            </FormControl>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
}

export default Header;
