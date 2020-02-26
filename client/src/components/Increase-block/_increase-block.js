import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  // wrapper: {
  //   textAlign: 'right',
  //   // margin: theme.spacing(3, 0),
  // },
  qtyPicker: {
    // maxWidth: '60%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '100%',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '70%',
    }
  },
  [theme.breakpoints.up('md')]: {
    qtyPicker: {
      // width: '150px'
    }
  },
  qty: {
    textAlign: 'center',
    fontSize: '16px',
    // minWidth: '50px',
  },
  input: {
    '& .MuiInputBase-input': {
      maxWidth: '50px',

      textAlign: 'center',
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '&.MuiInput-underline::after': {
      content: 'none'
    },
  }
}));

export default useStyles;
