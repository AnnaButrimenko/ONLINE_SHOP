import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '28px',
    fontWeight: '400',
  },
  itemNo: {
    textAlign: 'right',
  },
  productFeatures: {
    height: '100%',
    padding: theme.spacing(1, 0),
    marginBottom: theme.spacing(1),
    border: '1px dashed',
    borderColor: theme.palette.background.primary,
  },
  MuiListRoot: {
    listStyleType: 'disc',
  },
  disableBlock: {
    marginBottom: theme.spacing(1),
  },
  addToCart: {
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    padding: theme.spacing(2, 2, 1),
    zIndex: '1000',
    backgroundColor: theme.palette.background.primary,
    [theme.breakpoints.up('md')]: {
      position: 'static',
      zIndex: '0',
      padding: theme.spacing(0),
    },
  },
  productShopArea: {
    padding: theme.spacing(2, 0),
    backgroundColor: theme.palette.background.primary,
    borderRadius: '3px',
  },
  priceBox: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  oldPrice: {
    position: 'absolute',
    top: '10px',
    left: '0',
    display: 'inline-block',
    paddingBottom: theme.spacing(1),
    color: theme.palette.text.primary,
    fontWeight: '400',
    fontSize: '24px',
    textDecoration: 'line-through',
    verticalAlign: 'bottom'
  },
  regularPrice: {
    display: 'inlineBlock',
    paddingBottom: theme.spacing(1),
    color: theme.palette.text.primary,
    fontWeight: '500',
    fontSize: '26px',
    textAlign: 'right',
    [theme.breakpoints.up('md')]: {
      fontSize: '32px',
    },
  },
  specialPrice: {
    display: 'inlineBlock',
    paddingBottom: theme.spacing(2),
    color: theme.palette.text.secondary,
    fontWeight: '500',
    fontSize: '32px',
    textAlign: 'right',
    verticalAlign: 'bottom',
  },
  fact: {
    textAlign: 'right',
  },
  lowStock: {
    position: 'relative',
    color: theme.palette.error.main,
    top: '7px'
  },
  inStock: {
    position: 'relative',
    color: theme.palette.primary.main,
    top: '7px'
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: '500',
    paddingTop: theme.spacing(3)
  },
  property: {
    fontWeight: 'bold',
  },
  increaseWrapper: {
    padding: '20px 0',
    textAlign: 'right',
  }
}));

export default useStyles;