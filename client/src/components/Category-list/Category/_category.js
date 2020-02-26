import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({
  categoriesBtn: {
    width: '100%',
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    textTransform: 'lowercase',
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  categoriesTitle: {
    fontSize: '2.1rem',
    paddingBottom: theme.spacing(5),
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left',
    }

  },
  categoriesDesc: {
    paddingBottom: theme.spacing(3),
    // maxHeight: '160px',
    overflow: 'hidden',

  },
  categoriesDescription: {
    margin: theme.spacing(6, 0, 6, 0),
    [theme.breakpoints.down('md')]: {
      margin: 0,
      paddingTop: theme.spacing(2)
    }
  },
  p_b_30: {
    paddingBottom: '3rem'
  },
  p_r_4: {
    paddingRight: '2rem'
  },
  p_l_4: {
    paddingLeft: '2rem'
  },
  link: {
    textDecoration: 'none',
  },
  categoriesItem: {
    [theme.breakpoints.up('lg')]: {
      marginBottom: theme.spacing(1),
    }
  }
}));

export default useStyles;