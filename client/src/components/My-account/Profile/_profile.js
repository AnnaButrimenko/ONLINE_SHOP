import { makeStyles } from '@material-ui/core/styles';

const useProfileStyles = makeStyles((theme) => ({
  container: {
    marginBottom: theme.spacing(10)
  },

  button: {
    marginBottom: theme.spacing(1),
    cursor: 'pointer',
  },
  divider: {
    position: 'absolute',
    height: theme.spacing(16),
    top: theme.spacing(0.5),
    left: theme.spacing(-2),
  },

  title: {
    marginTop: theme.spacing(3),
  },

  header: {
    marginTop: theme.spacing(1),
  },

  link: {
    textDecoration: 'none',
  },

  userData: {
    padding: theme.spacing(0.5, 1),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0.5, 1.5),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0.5, 2),
    },
    '&:hover': {
      backgroundColor: theme.palette.background.secondary
    },
  },

  linkContainer: {
    [theme.breakpoints.up('sm')]: {
      margin: theme.spacing(2, 0, 1, 6),
      alignItems: 'flex-start',
    },
    [theme.breakpoints.up('md')]: {
      margin: theme.spacing(2, 0, 1, 10),
    },
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },

  buttonsContainer: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row',
    margin: theme.spacing(1, 0)
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

  cancelSubmit: {
    display: 'block',
    margin: theme.spacing(3, 1, 2),
    padding: theme.spacing(1, 1),
    fontSize: '0.87rem',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1, 3),
    }
  },

  emailForm: {
    marginTop: theme.spacing(1)
  },

  logout: {
    color: theme.palette.error.dark
  },

  passwordInputs: {
    margin: theme.spacing(1, 1, 0)
  },

  errorText: {
    color: theme.palette.error.dark,
  },
}
));

export default useProfileStyles;
