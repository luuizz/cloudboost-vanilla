import { createGlobalTheme } from '@vanilla-extract/css';

export const variable = createGlobalTheme(':root', {
  purple: {
    10: '#653DF5',
    20: '#4E32B5',
    30: '#2C1B6A',
  },
  gray: {
    100: '#F5F6FA',
    200: '#DFE1E8',
    300: '#C0C3CC',
    400: '#ABAFBA',
    500: '#979BA6',
    600: '#787C87',
    700: '#5C5F69',
    800: '#393B42',
    900: '#0A0B0D',
  },
  white: '#fff',
  black: '#000',
  headerHeight: '7.2rem',
  fontTitle: '"Space Grotesk", sans-serif',
  fontTexts: '"Inter", sans-serif',
  lineHeight: {
    short: '120%',
    base: '150%',
  },
});
