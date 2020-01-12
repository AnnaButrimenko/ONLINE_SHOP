import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  product: {
    width: '50%',
    display: 'flex',
    margin: '0 auto',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      width: '100%',
    }
  },
  image: {
    padding: theme.spacing(1, 0),
    height: '200px',
  },
  text: {
    textAlign: 'center'
  },
  title: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      height: '3rem'
    }
  },
  price: {
    fontWeight: 'bold',
    paddingLeft: theme.spacing(1)
  }
}));

export default useStyles;