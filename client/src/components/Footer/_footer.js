import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  footerWrapper: {
    padding: theme.spacing(2, 0),
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    position: 'absolute',
    right: '0',
    left: '0',
    [theme.breakpoints.up('sm')]: {
      bottom: 0
    }

  },
  container: {
    marginTop: theme.spacing(2)
  },
}));

export default useStyles;