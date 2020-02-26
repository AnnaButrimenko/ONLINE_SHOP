import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => createStyles({
  buttonLeft: {
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '1',
    left: '-14%',
    position: 'absolute'
  },
  buttonRight: {
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '1',
    left: '95%',
    position: 'absolute'
  },
  fullScreen: {
    position: 'absolute',
    bottom: '0',
    right: '0',
    color: theme.palette.text.primary,
    '& active': {
      color: 'white'
    }
  },
}));

export default useStyles;
