import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: '28px',
    color: theme.palette.primary.main,
  },
  text: {
    fontSize: '13px',
  },
  li: {
    paddingTop: theme.spacing(0),
  },

}),);

export default useStyles;