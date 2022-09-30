import { Box, Container, Flex } from '@chakra-ui/react';
import Marquee from 'react-fast-marquee';

function CurrencyDisplay() {
  return (
    <Container maxW="2xl">
      <Box>
        {isShown ? (
          <Marquee speed={20}>
            <Flex>p</Flex>
          </Marquee>
        ) : (
          <Box />
        )}
      </Box>
    </Container>
  );
}

export default CurrencyDisplay;
