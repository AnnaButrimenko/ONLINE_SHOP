import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  infoIcon: {
    marginLeft: '10px',
    color: theme.palette.primary.main,
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.dark
    }
  },
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
  paperInfoIcon: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 1),
  },
  modalInfoTitle: {
    position: 'relative',
    margin: 0,
    padding: theme.spacing(2, 3),
    backgroundColor: '#dad7ce',
    fontSize: 20,
    fontWeight: 'normal'
  },
  modalInfoClose: {
    position: 'absolute',
    right: 15,
    fontSize: '1.8rem',
    opacity: '0.8',
    cursor: 'pointer'
  },
  modalInfoText: {
    padding: theme.spacing(2, 3),
    textAlign: 'justify'
  }
}));

export default useStyles;
