import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  radioLabel: {
    color: theme.palette.secondary.dark,
  },
  root: {
    '& .MuiRadio-colorSecondary.Mui-checked': {
      color: theme.palette.primary.main
    },
    '& .MuiCheckbox-colorSecondary.Mui-checked': {
      color: theme.palette.primary.main
    },
    '& .MuiFormLabel-root': {
      color: theme.palette.secondary.dark
    },
    '&.MuiFormLabel-root.Mui-error ': {
      color: theme.palette.error.dark
    },
    '& .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.error.dark,
    },
    '& .MuiFormHelperText-root.Mui-error ': {
      color: theme.palette.error.dark
    }
  },
  labelText: {
    color: theme.palette.secondary.dark
  },
  blockTitle: {
    backgroundColor: theme.palette.background.dark,
    color: theme.palette.primary.contrastText,
    padding: '10px 20px',
    marginBottom: '10px'
  },
  confirmationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '5px 0',
    fontSize: '18px'
  },
  terms: {
    padding: theme.spacing(2, 0)
  },
  cardIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardIcon: {
    height: '24px',
    padding: '0px 5px'
  }
}));

export default useStyles;
