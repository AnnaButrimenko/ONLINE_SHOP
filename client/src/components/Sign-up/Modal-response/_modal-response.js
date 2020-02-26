import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  modalInfoIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    margin: '0 auto',
    [theme.breakpoints.up('md')]: {
      width: 350
    },
    [theme.breakpoints.up('lg')]: {
      width: 450
    }
  },
  modalInfoTitle: {
    position: 'relative',
    textAlign: 'center',
    margin: 0,
    padding: theme.spacing(2, 3),
    backgroundColor: '#dad7ce',
    fontSize: 20,
    fontWeight: 'normal'
  }
}));

export default useStyles;
