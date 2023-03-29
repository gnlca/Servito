const size = {
  huge: '1440px',
  large: '1170px',
  medium: '768px',
  small: '450px',
}

const device = {
  small: `(min-width: ${size.small})`,
  medium: `(min-width: ${size.medium})`,
  large: `(min-width: ${size.large})`,
  huge: `(min-width: ${size.huge})`,
}

const media = {
  small: `@media only screen and ${device.small}`,
  medium: `@media only screen and ${device.medium}`,
  large: `@media only screen and ${device.large}`,
  huge: `@media only screen and ${device.huge}`,
  tabletOnly: `@media only screen and ${device.small} and (max-width: ${size.large})`,
}

const colors = {
  black: '#000000',
  darkGrey: '#131313',
  lightGrey: '#a1a1a1',
  lighterGrey: '#f6f6f6',
  white: '#ffffff',
  greenOfBhabua: '#cafd50',
}

export const theme = {
  typography: {},

  zIndex: {
    navbar: 2,
    header: 3,
    modal: 4,
  },
  colors: colors,

  scheme: {
    light: {},
    dark: {},
  },

  palette: {
    primary: {
      main: colors.white,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.greenOfBhabua,
      contrastText: colors.white,
    },
    success: {
      main: '#50fd61',
      contrastText: '#ffffff',
    },
    error: {
      main: '#fd5050',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
    },
  },
  //   fonts: {},

  breakpoints: {
    size,
    device,
    media,
  },

  duration: {
    long: 500,
    standard: 300,
    short: 250,
    shorter: 200,
    shortest: 150,
  },
}

export type ColorsKeys = keyof typeof theme.colors

export type Theme = typeof theme
