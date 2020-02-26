import { makeStyles } from '@material-ui/core/styles';

const useNoMatchStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
  },
  noFoundBlock: {
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '520px',
    width: '100%',
    lineHeight: '1.4',
    textAlign: 'center',
    position: 'relative',
    height: '100vh',
  },
  errorText: {
    position: 'relative',
    height: '200px',
    margin: '0px auto 20px',
    zIndex: '-1',
    [theme.breakpoints.down('sm')]: {
      height: '148px',
      margin: '0px auto 10px',
    }
  },
  errorTitle: {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: '200',
    margin: '0px',
    color: theme.palette.secondary.main,
    textTransform: 'uppercase',
    position: 'absolute',
    left: '50%',
    top: '50%',
    WebkitTransform: 'translate(-50%, -50%)',
    msTransform: 'translate(-50%, -50%)',
    transform: 'translate(-50%, -50%)',
    [theme.breakpoints.up('sm')]: {
      fontSize: theme.spacing(18),
    },
    [theme.breakpoints.up('md')]: {
      fontSize: theme.spacing(26),
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(10.7),
    },
  },
  secondErrorTitle: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: theme.spacing(3.5),
    fontWeight: '400',
    textTransform: 'uppercase',
    color: theme.palette.secondary.main,
    background: theme.palette.background.default,
    padding: '10px 5px',
    margin: 'auto',
    display: 'inline-block',
    position: 'absolute',
    bottom: '0px',
    left: '0',
    right: '0',
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(2),
    },
  },
  link: {
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(2),
      padding: theme.spacing(1, 2)
    },
  },
}));

export default useNoMatchStyles;
