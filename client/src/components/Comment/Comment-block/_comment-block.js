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
  commentTitle: {
    color: theme.palette.secondary.dark,
    opacity: '.8'
  },
  comment: {
    borderRadius: 3,
    display: 'inline-block',
    width: '100%',
    padding: theme.spacing(1, 0),
    [theme.breakpoints.up('md')]: {
      width: '80%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%',
      borderTop: '1px solid rgba(0, 0, 0, 0.12)'
    },
  },
  commentBody: {
    borderRadius: 5,
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.primary
  }
}));

export default useStyles;
