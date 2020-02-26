import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '14px 30px',
  },
  item: {
    fontSize: '1rem',
    borderBottom: '1px solid #ffffff',
    '&:last-item': {
      textAlign: 'right',
    }

  },
  title: {
    fontSize: '1.2rem',
    borderBottom: '1px solid #ffffff',
  },
  total: {
    fontWeight: 'bold',
    fontSize: '1.2rem',
    [theme.breakpoints.up('sm')]: {
      margin: '10px 0',
    }
  },
  alignRight: {
    textAlign: 'right',
  }
}));

export default useStyles