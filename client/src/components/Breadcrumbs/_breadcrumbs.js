import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: '5px 0'
  },
  item: {
    textDecoration: 'none',
    color: theme.palette.text.primary,
    fontWeight: 'bold'
  },
  menuItem: {
    borderRadius: '10px',
    color: theme.palette.text.primary,
  }
}));

export default useStyles;