import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    // maxWidth: '260px',
  },
  card: {
    width: '100%',
    paddingBottom: '20px',
    // margin: '0 auto',
    '&:hover': {
      zIndex: '1',
      boxShadow: '0px 0 1px 0px #aaa, 0px 5px 11px #909090',
      cursor: 'pointer',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '232px',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '260px',
    }
  },
  itemNo: {
    paddingLeft: theme.spacing(1),
  },
  iconWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    fontWeight: '300',
  },
  link: {
    textDecoration: 'none'
  },
  imgWrapper: {
    width: '96%',
    maxWidth: '720px',
    margin: '0 auto',
    paddingTop: '10px',
  },
  img: {
    width: '100%',
    height: 'auto',
  },
  title: {
    height: '80px',
    paddingBottom: '20px',
    // overflow: 'hidden',
    color: theme.palette.text.primary,
    fontWeight: '300',
    fontSize: '18px',
    // textOverflow: 'ellipsis',
    // whiteSpace: 'nowrap',
    textDecoration: 'none',
  },
  priceBox: {
    position: 'relative',
    textAlign: 'right',
  },
  oldPrice: {
    position: 'absolute',
    left: '0',
    display: 'inline-block',
    paddingBottom: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: '400',
    fontSize: '20px',
    // text-align: right;
    textDecoration: 'line-through',
    verticalAlign: 'bottom',
  },
  specialPrice: {
    display: 'inline-block',
    paddingBottom: theme.spacing(3),
    color: theme.palette.text.secondary,
    fontWeight: '700',
    fontSize: '26px',
    textAlign: 'right',
    verticalAlign: 'bottom',
  },
  regularPrice: {
    display: 'inline-block',
    paddingBottom: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: '700',
    fontSize: '26px',
    textAlign: 'right',
    verticalAlign: 'bottom',
  }
}));

export default useStyles;
