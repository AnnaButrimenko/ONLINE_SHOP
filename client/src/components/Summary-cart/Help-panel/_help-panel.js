import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    boxShadow: 'none',
  },
  heading: {
    padding: '0',
  },
  bold: {
    fontWeight: 'bold'
  },
  detail: {
    fontSize: '1.1rem',
    display: 'block',
    '&>*': {
      padding: '5px 0',
    }
  }
});

export default useStyles;