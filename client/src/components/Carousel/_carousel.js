import { makeStyles } from '@material-ui/core';

const useStylesCarousel = makeStyles((theme) => ({
  carouselContainer: {
    // height: 'calc(100vh - 364px)',
    // [theme.breakpoints.up('sm')]: {
    //   height: 'calc(100vh - 284px)',
    // },
    // [theme.breakpoints.up('md')]: {
    //   height: 'calc(100vh - 170px)',
    // },
    // [theme.breakpoints.up('lg')]: {
    //   height: 'calc(100vh - 100px)',
    // },
    // [theme.breakpoints.up('xl')]: {
    //   height: 'calc(100vh - 200px)',
    // },
  },

  mainPagingItem: {
    '&::after': {
      display: 'none',
    },
  },

  pagingItem: {
    position: 'relative',
    margin: '0 3px',
    '&::after': {
      position: 'absolute',
      top: '13px',
      right: 0,
      zIndex: -1,
      width: '45px',
      borderBottom: '2px solid #4b4747',
      content: '',
    },
  },

  pagingItemActive: {
    '&::after': {
      borderBottom: '4px solid black',
      content: '',
    },
  },

  buttonPagingItem: {
    position: 'relative',
    padding: '0 20px',
    opacity: 0,
  },

  ulPagingItem: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 'inherit',
    listStyleType: 'none',
  },

  arrowsTopBottom: {
    background: theme.palette.text.primary,
    transform: 'rotate(-135deg)',
    transformOrigin: 'top right',
  },

  arrowNext: {
    position: 'relative',
    padding: '18px 13px',
    cursor: 'pointer',
    '&:hover .arrow-next-top::after': {
      left: 0,
      transitionDelay: '.15s',
    },
    '&:hover .arrow-next-bottom::after': {
      right: 0,
      transitionDelay: '0s',
    },
  },

  arrowNextTopBottom: {
    position: 'absolute',
    right: '5px',
    width: '26px',
    height: '2px',
    background: theme.palette.text.primary,
    '&::after': {
      position: 'absolute',
      top: 0,
      height: '100%',
      background: theme.palette.primary.main,
      transition: 'all .15s',
      content: '',
    },
  },

  arrowNextTop: {
    transform: 'rotate(45deg)',
    transformOrigin: 'bottom right',
    '&::after': {
      right: 0,
      left: '100%',
      transitionDelay: '0s',
    },
  },

  arrowNextBottom: {
    transform: 'rotate(-45deg)',
    transformOrigin: 'top right',
    '&::after': {
      right: '100%',
      left: 0,
      transitionDelay: '.15s',
    },
  },

  arrowPrev: {
    position: 'relative',
    padding: '18px 13px',
    cursor: 'pointer',
    '&:hover .arrow-prev-top::after': {
      left: 0,
      transitionDelay: '.15s',
    },
    '&:hover .arrow-prev-bottom::after': {
      right: 0,
      transitionDelay: '0s',
    },
  },

  arrowPrevTopBottom: {
    position: 'absolute',
    right: theme.spacing(4),
    width: '26px',
    height: '2px',
    background: theme.palette.text.primary,
    '&::after': {
      position: 'absolute',
      top: 0,
      height: '100%',
      background: theme.palette.primary.main,
      transition: 'all .15s',
      content: '',
    },
  },

  arrowPrevTop: {
    top: theme.spacing(2),
    transform: 'rotate(135deg)',
    transformOrigin: 'bottom right',
    '&::after': {
      right: 0,
      left: '100%',
      transitionDelay: '0s',
    },
  },

  arrowPrevBottom: {
    transform: 'rotate(-135deg)',
    transformOrigin: 'top right',
    '&::after': {
      right: '100%',
      left: 0,
      transitionDelay: '.15s',
    },
  },

}));

export default useStylesCarousel;
