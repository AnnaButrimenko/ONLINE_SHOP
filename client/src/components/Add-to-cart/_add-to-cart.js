import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  containerImg: {
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left'
    }
  },
  img: {
    width: '50%',
    [theme.breakpoints.up('md')]: {
      width: '100%'
    }
  },
  title: {
    display: 'flex',
    justifyContent: 'space-between',
    // padding: '10px 0',
    fontSize: '16px'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0.5, 2),
    },
    fontWeight: 'bold'
  },
  body: {
    padding: theme.spacing(0.5, 2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1, 2),
    },
  },
  footer: {
    textAlign: 'center',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2, 2),
    },
  },
  btn: {
    width: '100%'
  },
  link: {
    textDecoration: 'none'
  },
  qtyPicker: {
    // width: '100px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  [theme.breakpoints.up('md')]: {
    qtyPicker: {
      width: '150px'
    }
  },
  sign: {
    fontSize: '36px',
    textAlign: 'center',
    padding: '5px',
    backgroundColor: 'gray',
    cursor: 'pointer'
  },
  qty: {
    textAlign: 'center',
    fontSize: '16px'
  },
  price: {
    minWidth: '20%',
    padding: '5px',
    backgroundColor: 'rgba(240,235,84,0.72)',
    textAlign: 'center',
    borderRadius: '4px',
    fontSize: '16px'
  },
  total: {
    minWidth: '20%',
    fontSize: '16px',
    textAlign: 'center'
  },
  pricingBlock: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2, 0),
    },
  }
}));

export default useStyles;