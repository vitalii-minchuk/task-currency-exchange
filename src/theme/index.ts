import { extendTheme } from '@chakra-ui/react';

const activeLabelStyles = {
  fontWeight: 500,
  fontSize: '12px',
  lineHeight: '14px',
  color: '#7E7E7E',
  transform: 'translateY(-21px)',
};

export default extendTheme({
  breakpoints: {
    lgX: '1170px',
  },
  colors: {
    myColors: {
      blue: '#00BDD3',
      yellow: '#F4E041',
    },
  },
  fonts: {
    body: "'Nunito', sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        bg: 'white',
      },
    }),
  },
  components: {},
});
