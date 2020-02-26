import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'absolute',
    top: '113%',
    backgroundColor: 'white',
    width: '100%',
    left: '0',
  },
  searchIcon: {
    zIndex: '1',
    height: '100%',
    width: '50px',
    padding: '5px',
    opacity: 1,
    cursor: 'pointer',
    position: 'absolute',
  },
  [theme.breakpoints.up('md')]: {
    search: {
      zIndex: '5',
      left: '20%',
      top: '25%',
      maxWidth: '50%',
      position: 'absolute'
    },
  },
  [theme.breakpoints.up('lg')]: {
    search: {
      left: '7%',
      maxWidth: '58%',
      padding: theme.spacing(3, 3, 1, 0),
      top: '-13%',
    },
    searchIcon: {
      bottom: '15px',
      padding: 0,
      height: '1em'
    }
  },
  [theme.breakpoints.up('xl')]: {
    search: {
      maxWidth: '800px',
    },
  },
  inputRoot: {
    border: '1px solid black',
    width: '100%',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 6),
    width: '100%'
  }
}));

export default useStyles