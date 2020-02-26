import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: '0 auto',
    marginBottom: 10,
    width: 250,
    [theme.breakpoints.up('lg')]: {
      marginRight: 0
    }
  },
  input: {
    padding: '10.5px 15px'
  },
  label: {
    transform: 'translate(15px, 14px) scale(1)',
    color: theme.palette.primary.dark,
  }
}));

export default useStyles;
