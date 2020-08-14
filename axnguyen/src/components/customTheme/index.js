import {createMuiTheme} from '@material-ui/core/styles';

// Assumes default font size = 16px
export const CustomTheme = createMuiTheme({
  typography: {
    fontFamily: [
      'Karla',
      'Martel',
      'sans-serif'
    ].join(','),

    h1: {
      fontSize: '4rem', //64px
      fontWeight: 'bold',
    },

    h2: {
      fontSize: '2.25rem', //36px
      fontWeight: 'bold',
    },

    button: {
      fontSize: '1.5rem', //24px
      fontWeight: '700',
    },

    subtitle1: {
      fontSize: '1.125rem', //18px
      fontWeight: 'normal',
    },
    
    body1: {
      fontFamily: 'Martel',
      fontSize: '1.25rem', //20px
      fontWeight: 'normal',
    },
  },
});