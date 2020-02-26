import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    margin: 0
  },
  links: {
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
    },
    textDecoration: 'none'
  }
}))

export default useStyles;