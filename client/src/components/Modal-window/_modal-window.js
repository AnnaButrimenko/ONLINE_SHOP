import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto'
  },
  paper: {
    // minWidth: '60%',
    maxWidth: '80%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    outline: 'none'
  },
  [theme.breakpoints.up('md')]: {
    paper: {
      maxWidth: '60%'
    }
  },
  [theme.breakpoints.up('lg')]: {
    paper: {
      maxWidth: '50%'
    }
  }
}));

export default useStyles;
