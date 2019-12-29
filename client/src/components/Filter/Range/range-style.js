import { makeStyles } from '@material-ui/core/styles';
import Variables from '../../Variables/variables';

const useStyles = makeStyles({
  root: {
    '& .PrivateValueLabel-circle-397': {
      transform: 'none',
      borderRadius: 0,
      backgroundColor: 'inherit'
    },
    '& .PrivateValueLabel-label-398': {
      color: Variables.colors.btnMainBg,
      transform: 'none'
    },
    '& .PrivateValueLabel-offset-396': {
      fontSize: '1rem',
      top: '25px',
      fontWeight: 'bold'
    },
    '& .MuiSlider-thumb': {
      marginLeft: 0
    },
  },
});

export default useStyles;