import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormGroup-root': {
      textAlign: 'left'
    },
    '& .MuiCollapse-container': {
      paddingRight: '17px'
    },
    '& .MuiCheckbox-root': {
      color: theme.palette.secondary.main
    },
    '& .Mui-checked': {
      color: theme.palette.primary.main
    },
    '& .MuiExpansionPanelDetails-root': {
      flexDirection: 'column'
    }
  },
  title: {
    fontWeight: 'bold'
  }
}));

export default useStyles;