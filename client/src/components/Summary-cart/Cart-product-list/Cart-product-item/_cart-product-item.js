import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: '1rem',
    padding: '10px 0 20px',
  },
  img_block: {
    justifyContent: 'flex-start',
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'center',
    }
  },
  img: {
    width: '150px'
  },
  marginTop: {
    marginTop: '16px',
  },
  title: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  itemNum: {
    fontSize: '0.8rem',
    margin: '0'
  },
  price: {
    fontWeight: 'bold',
  },
  deleteBtn: {
    marginTop: '16px',
    '&:hover': {
      color: theme.palette.secondary.dark,
      cursor: 'pointer'
    }
  }
}));

export default useStyles;