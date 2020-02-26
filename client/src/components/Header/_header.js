import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    boxShadow: '0 0 16px rgba(0, 0, 0, 0.15)',
  },
  delivery: {
    backgroundColor: theme.palette.secondary.main,
    padding: theme.spacing(1, 0)
  },
  deliveryTitle: {
    color: theme.palette.primary.contrastText,
    textAlign: 'center',
    textTransform: 'uppercase',
    margin: '0',
  },
  grow: {
    padding: theme.spacing(1, 0),
    flexGrow: 1,
  },
  justify: {
    justifyContent: 'space-between'
  },
  menuButton: {
    marginRight: theme.spacing(1),
    color: theme.palette.background.dark,
    fontSize: '27px',
    opacity: '.7',
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(2),
    },
    [theme.breakpoints.up('lg')]: {
      display: 'none',
    }

  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  inputRoot: {
    color: 'inherit',
    [theme.breakpoints.up('sm')]: {
      width: '85%'
    },
    [theme.breakpoints.up('md')]: {
      width: '90%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '95%'
    }
  },
  inputInput: {
    padding: theme.spacing(1, 2, 1, 2),
    transition: theme.transitions.create('width'),
    width: '100%'
  },
  headerMenuItem: {
    flexDirection: 'column',
    padding: '0 5px',
    overflow: 'visible',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  iconsStyle: {
    color: theme.palette.text.primary,
    fontSize: theme.spacing(3.3),
    opacity: '.7'
  },
  iconLoggedIn: {
    color: theme.palette.primary.main,
    fontSize: theme.spacing(3.3),
  },
  iconButtonBox: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    [theme.breakpoints.up('md')]: {
      minWidth: '20%'
    },
    [theme.breakpoints.up('lg')]: {
      minWidth: '15%'
    },
    '& #customized-menu': {
      display: 'none'
    },
    '& a': {
      textDecoration: 'none',
    }
  },
  iconButton: {
    [theme.breakpoints.up('lg')]: {
      margin: '0 13px 0 13px',
      paddingBottom: '0',
      '&:hover': {
        backgroundColor: 'transparent'
      },
      '& .MuiIconButton-label': {
        flexDirection: 'column'
      }
    },
  },
  dividerStyle: {
    [theme.breakpoints.up('lg')]: {
      width: '1px',
      height: '55px',
    }
  },
  menuLink: {
    textDecoration: 'none',
    textAlign: 'center',
    color: theme.palette.text.primary,
  },
  menuTitle: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
      fontSize: '14px',
      textAlign: 'center',
      color: theme.palette.text.primary,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  },
  mainHeaderLogo: {
    width: '210px',
    marginRight: '20px'
  },
  mainHeaderLogoImg: {
    width: theme.spacing(10)
  },
  mainBoxLogo: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'flex',
      alignItems: 'center'
    }
  },
  boxLogo: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('lg')]: {
    }
  },
  logoIcon: {
    [theme.breakpoints.up('lg')]: {
      padding: '12px 15px'
    }
  },
  wishlistMessege: {
    fontSize: theme.spacing(3),
  },
  logInLink: {
    textDecoration: 'none',
    color: theme.palette.error.main,
    paddingTop: theme.spacing(1),
    fontWeight: 700,
    '&:hover': {
      textDecoration: 'underline'
    }
  },
  toolTipContainer: {
    fontSize: theme.spacing(2)
  },
  iconLove: {
    color: theme.palette.text.primary,
    fontSize: theme.spacing(3.3),
    opacity: '.7'
  }
}));

export default useStyles
