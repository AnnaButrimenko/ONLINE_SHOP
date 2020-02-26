import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  inputs: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
  },
  error: {
    position: 'absolute',
    color: 'red',
    bottom: '55px',
    textAlign: 'justify'
  },
  input: {
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '&.MuiInput-underline::after': {
      content: 'none'
    },
    '& .MuiInputBase-inputMarginDense': {
      textAlign: 'center',
    }
  }
});

export default useStyles;