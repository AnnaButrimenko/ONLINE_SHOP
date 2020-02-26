import { makeStyles } from '@material-ui/core';

const useStylesMainCarousel = makeStyles((theme) => ({
  background: {
    height: 'calc(100vh - 130px)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  itemContainer: {
    position: 'relative',
  },

  img: {
    width: '100%',
  },

  title: {
    margin: theme.spacing(0.5),
    fontSize: '5em',
  },

  description: {
    fontSize: '2.9em',
    margin: theme.spacing(0.5),
  },

  showMore: {
    padding: theme.spacing(0.5, 1),
    fontSize: '2.3em',
  },

  textBlock: {
    // [theme.breakpoints.up('xs')]: {
    //   top: '30%',
    //   maxWidth: '194px',
    //   fontSize: '0.19rem',
    //   right: 39,
    //   padding: '2px',
    // },
    [theme.breakpoints.up('sm')]: {
      top: '12%',
      maxWidth: '400px',
      fontSize: '0.3rem',
    },
    [theme.breakpoints.up('md')]: {
      top: '25%',
      maxWidth: '450px',
      fontSize: '0.32rem',
      padding: theme.spacing(2),
    },
    [theme.breakpoints.up('lg')]: {
      top: '20%',
      maxWidth: '550px',
      fontSize: '0.39rem',
      right: 150,
      padding: theme.spacing(3),
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'justify',
    top: '30%',
    fontSize: '0.19rem',
    right: 40,
    padding: theme.spacing(1),
    // borderRadius: theme.spacing(1),
    maxWidth: '200px',
    color: theme.palette.text.primary,
    position: 'absolute',
    backgroundColor: theme.palette.background.carousel,
    boxShadow: 'inset -187px 33px 51px 21px rgba(235,235,235,0.5)',
  },

  mainArrowsControl: {
    position: 'relative',
    padding: '22px 18px',
    background: theme.palette.background.default,
    opacity: 0.8,
    cursor: 'pointer',
  },

  mainArrowNext: {
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
  },

  mainArrowPrev: {
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
    left: '1px',
  },

  mainArrowPrevTop: {
    position: 'absolute',
    right: '32px',
    width: '26px',
    height: '2px',
    top: '19px',
    transform: 'rotate(135deg)',
    transformOrigin: 'bottom right',
  },

  ulMainPagingItem: {
    position: 'relative',
    top: '45px',
    display: 'flex',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
    listStyleType: 'none',
  },

  liMainPagingItem: {
    position: 'relative',
    bottom: '30px',
    display: 'inline-block',
    margin: '0 5px',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.default,
    borderRadius: '8px',
    boxShadow: '0 2px 3px 0 rgba(0, 0, 0, .41)',
    cursor: 'pointer',
    '&.active': {
      backgroundColor: theme.palette.secondary.main,
      '& button': {
        color: 'white'
      },
    },
  },

  buttonMainPagingItem: {
    padding: theme.spacing(0.5, 1),
    display: 'inline-block',
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0.7, 1.3),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1.2, 1.5),
    },
    background: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    opacity: 1,
  },
  displayCarousel: {
    display: 'none',
    [theme.breakpoints.up('lg')]: {
      display: 'block',
    }
  },
  link: {
    textDecoration: 'none',
  },

}));

export default useStylesMainCarousel;