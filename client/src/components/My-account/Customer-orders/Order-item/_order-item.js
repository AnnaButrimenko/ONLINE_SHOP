import { makeStyles } from '@material-ui/core';

const useStylesOrderItem = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.default,
    borderRadius: theme.spacing(1),
    border: '1px solid #e2e2e2',
    marginBottom: theme.spacing(2),
    boxShadow: '0px 0px 27px 5px rgba(179,179,179,0.27)',
    padding: 0,
    '&:hover': {
      border: '1px solid #71b430',
      boxShadow: '0px 0px 8px 4px rgba(179,179,179,0.27)',
      transition: '400ms',
    },
  },
  mainBlock: {
    alignItems: 'center',
    borderRadius: theme.spacing(1),
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    fontSize: '0.7rem',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'baseline',
      flexDirection: 'row',
      fontSize: '0.6rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '0.9rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.1rem',
    },

    '&:hover': {
      border: 'none',
      backgroundColor: 'rgba(0, 0, 0, .0)',
    },
  },
  nested: {
    padding: '0 16px',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.03)',
    },
  },
  imgContainer: {
    justifyContent: 'flex-start',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  img: {
    width: '70px',
    [theme.breakpoints.down('sm')]: {
      width: '90px',
    },
    [theme.breakpoints.up('md')]: {
      width: '85px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '100px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '120px',
    },
  },
  title: {
    fontWeight: 'bold',
  },
  itemNum: {
    fontSize: '0.8rem',
    margin: '0'
  },
  fontBold: {
    fontWeight: 'bolder',
  },
  deleteBtn: {
    '&:hover': {
      color: theme.palette.secondary.dark,
      cursor: 'pointer'
    }
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.secondary.main,
  },
  textCenter: {
    textAlign: 'center',
    width: '70px',
  },
  amoutContainer: {
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  textRight: {
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-end',
    },
  },
  productContainer: {
    fontSize: '1rem',
    [theme.breakpoints.up('md')]: {
      fontSize: '1.2rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '1.5rem',
    },
    '& div': {
      fontSize: '0.7em',
    },
  },
  orderInfo: {
    textAlign: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
  },
  moreOrderInfo: {
    fontSize: '1em',
  },
}));

export default useStylesOrderItem;