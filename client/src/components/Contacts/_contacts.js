import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2)
  },
  block: {
    display: 'block'
  },
  img: {
    width: '25px'
  }
}));

export default useStyles;