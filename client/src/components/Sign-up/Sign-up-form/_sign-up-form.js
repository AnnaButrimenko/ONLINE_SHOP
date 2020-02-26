import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  rightTitle: {
    fontStyle: 'italic',
  },
  radioGender: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  radioLabel: {
    color: theme.palette.secondary.dark,
  },
  root: {
    '& .MuiRadio-colorSecondary.Mui-checked': {
      color: theme.palette.primary.main
    },
    '&.MuiFormControlLabel-root': {
      textAlign: 'justify'
    },
    '& .MuiCheckbox-colorSecondary.Mui-checked': {
      color: theme.palette.primary.main
    },
    '&.MuiFormLabel-root': {
      color: theme.palette.secondary.dark
    },
    '&.MuiFormLabel-root.Mui-error ': {
      color: theme.palette.error.dark
    },
    '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.error.dark
    },
    '& .MuiFormHelperText-root.Mui-error ': {
      color: theme.palette.error.dark
    }
  },
  input: {
    '& .MuiOutlinedInput-input': {
      textAlign: 'center'
    },
    '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.error.dark,
    },
    '& .MuiFormHelperText-root.Mui-error': {
      color: theme.palette.error.dark,
      textAlign: 'center'
    }
  },
  labelText: {
    color: theme.palette.secondary.dark
  },
  labelBirthday: {
    margin: theme.spacing(3, 0, 2, 0),
    fontStyle: 'italic'
  },
  inputBirthDay: {
    width: '50%',
    textAlign: 'center',

    '&:not(:last-child)': {
      width: '25%',
      paddingRight: '15px',
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0
    }
  },
  helperBirth: {
    display: 'block',
    margin: 0,
    textAlign: 'center',
    color: theme.palette.primary.dark
  },
  eye: {
    cursor: 'pointer'
  },
  invalidPassword: {
    color: theme.palette.error.dark
  }
}));

export default useStyles;
