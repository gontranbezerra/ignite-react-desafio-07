import {
  extendTheme,
  ColorMode,
  DeepPartial,
  ThemeConfig,
  ThemeTypings,
  ChakraTheme,
} from '@chakra-ui/react';

// export interface ChakraConfig {
//   initialColorMode: ColorMode;
//   useSystemColorMode: boolean;
//   color: Object;
// }

// const config = {
//   // initialColorMode: 'light',
//   // useSystemColorMode: false,
//   colors: {
//     highlight: '#FFBA08',
//     dark: {
//       black: '#000000',
//       text: '#47585B',
//       info: '#999999',
//       info50: 'rgba(153, 153, 153, 0.5)',
//     },
//     light: {
//       white: '#FFFFFF',
//       text: '#FFBA08', //'#F5F8FA',
//       info: '#DADADA',
//     },
//   },
//   fonts: {
//     heading: 'Poppins',
//     body: 'Poppins',
//   },
//   styles: {
//     // golbal: (props: any) => ({
//     //   body: {
//     //     bg: 'dark.text', //mode('dark.text', 'light.text')(props),
//     //     // color: mode('dark.text', 'light.text')(props),
//     //   },
//     // }),
//     global: {
//       body: {
//         bg: 'highlight',
//         color: 'dark.text',
//       },
//     },
//   },
// };

// const theme = extendTheme({ config });

// export default theme;

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  colors: {
    highlight: '#FFBA08',
    dark: {
      black: '#000000',
      text: '#47585B',
      info: '#999999',
      info50: 'rgba(153, 153, 153, 0.5)',
    },
    light: {
      white: '#FFFFFF',
      text: '#F5F8FA',
      info: '#DADADA',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  divider: {
    size: '60px',
  },
  styles: {
    global: (props: any) => ({
      body: {
        color: props.colorMode === 'light' ? 'dark.text' : 'light.text',
        bg: props.colorMode === 'light' ? 'light.text' : 'dark.text',
      },
    }),
  },
};

const theme = extendTheme(config);

export default theme;
