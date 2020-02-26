import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: '0!important',
    paddingRight: '0!important',
    backgroundColor: theme.palette.background.primary,
    [theme.breakpoints.down('xs')]: {
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      paddingTop: '0!important',
      paddingBottom: '0!important',
    },
  },
  link: {
    textDecoration: 'none'
  },
  button: {
    margin: '20px 0',
    [theme.breakpoints.down('xs')]: {
      margin: 0,
      padding: '12px',
      width: '100vw',
    }
  },
}));

export default useStyles;