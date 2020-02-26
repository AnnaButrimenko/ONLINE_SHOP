import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  paper: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4)
  },
  title: {
    fontSize: '32px',
    [theme.breakpoints.up('md')]: {
      marginBottom: 15
    }
  },
  dividerSignUp: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'inline',
      backgroundColor: 'rgba(0, 0, 0, 0.2)',
      height: 528,
      alignSelf: 'flex-end'
    }
  },
  paperInfoIcon: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 1),
    border: `4px solid ${theme.palette.primary.main}`
  },
  paperInfoError: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 1),
    border: `4px solid ${theme.palette.error.dark}`
  },
  submit: {
    display: 'block',
    margin: '0 auto',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1, 1),
    fontSize: '0.87rem',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1, 3),
    }
  },
  btn: {

  }
}));

export default useStyles;
