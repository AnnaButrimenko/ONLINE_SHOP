import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  accountContentLeft: {
    fontSize: '13px',
  },
  benefitText: {
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(2)
    }
  },
  list: {
    listStyle: 'disc',
    paddingLeft: '15px'
  },
  listItem: {
    display: 'list-item'
  },
  helperBonus: {
    color: theme.palette.secondary.dark,
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(2)
    }
  }
}));

export default useStyles;
