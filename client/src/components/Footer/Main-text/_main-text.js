import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: 0
  },
  text: {
    margin: 0
  },
  img: {
    paddingRight: theme.spacing(2),
    width: '80px'
  },
}));

export default useStyles;