import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  commentBtn: {
    display: 'inline-block',
    margin: '0 auto',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1, 1),
    fontSize: '0.87rem',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1, 3),
    }
  },
  cancelBtn: {
    marginLeft: 20
  },
  field: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '60%',
    }
  }
}));

export default useStyles;
