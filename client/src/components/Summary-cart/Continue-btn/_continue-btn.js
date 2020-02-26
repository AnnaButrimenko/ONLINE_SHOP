import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: `1px solid ${theme.palette.background.primary}`,
    borderBottom: `1px solid ${theme.palette.background.primary}`,
    padding: '15px 0',
    marginBottom: '15px'

  },
  icon: {
    verticalAlign: 'middle',
  },
  link: {
    color: theme.palette.secondary.main,
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 'bold',
    '&:hover': {
      color: theme.palette.secondary.dark,
    }
  },
  text: {
  }
}));

export default useStyles;