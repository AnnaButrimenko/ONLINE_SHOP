import { makeStyles } from '@material-ui/styles';

const useHeaderStyles = makeStyles((theme) => ({
  root: {
    padding: '20px 0 10px',
    fontSize: '1.1rem',
  },
  alignFlexible: {
    textAlign: 'right',
    [theme.breakpoints.up('md')]: {
      textAlign: 'center'
    }
  },
  alignCenter: {
    textAlign: 'center'
  },
  alignRight: {
    textAlign: 'right'
  },
  underline: {
    borderBottom: `1px solid ${theme.palette.background.primary}`
  }
}));

export default useHeaderStyles;