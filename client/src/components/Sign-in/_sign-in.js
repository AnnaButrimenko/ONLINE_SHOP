import { makeStyles } from '@material-ui/core';

const useStylesSingIn = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.contrastText,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  labelText: {
    color: theme.palette.secondary.dark,
  },
  checkBox: {
    color: theme.palette.primary.main,
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
    display: 'flex',
    justifyContent: 'center',
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing(0.8),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.default,
    fontWeight: 'bold',
    cursor: 'pointer',
    '&:hover': {
      opacity: '.85',
    },
    '& input': {
      cursor: 'pointer',
    },
  },
  text: {
    color: theme.palette.secondary.dark,
    display: 'block',
    textAlign: 'center',
    cursor: 'pointer',
  },
  errorText: {
    color: theme.palette.error.dark,
  },
  closeBtn: {
    display: 'flex',
    alignSelf: 'flex-end',
    position: 'absolute'
  }

}));

export default useStylesSingIn;
