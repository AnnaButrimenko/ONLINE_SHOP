import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  filterDesktop: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  filterMobile: {
    position: 'fixed',
    bottom: 0,
    zIndex: 5,
    backgroundColor: theme.palette.background.primary,
    width: '100%',
    left: 0,
    padding: theme.spacing(2, 2, 1),
  },
  filterButton: {
    backgroundColor: theme.palette.background.primary,
    padding: theme.spacing(2, 2, 1),
  },
  button: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.contrastText,
    width: '100%',
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    }
  }
}));

export default useStyles;