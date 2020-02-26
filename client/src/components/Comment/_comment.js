import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  commentBtn: {
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
  title: {
    textTransform: 'uppercase',
    fontSize: '1rem',
    marginBottom: 10
  },
  field: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '60%',
    }
  },
  commentTitle: {
    color: theme.palette.secondary.dark,
    opacity: '.8'
  },
  errorLogIn: {
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(2)
  },
  error: {
    color: theme.palette.text.secondary
  }
}));

export default useStyles;
