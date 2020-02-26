import { createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => createStyles({
  drawerPaper: {
    width: '82%',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  nestedMenuItem: {
    display: 'flex',
    justifyContent: 'space-between',
    // padding: '10px',
  },
  root: {
    textTransform: 'uppercase',
    color: theme.palette.text.primary,
    '& li > a': {
      // fontSize: '14px',
      textDecoration: 'none',
      textTransform: 'uppercase',
      color: theme.palette.text.primary,
      '&:hover': {
        color: theme.palette.background.primary,
        paddingLeft: theme.spacing(1),
      }
    },
  },
  headerMenuList: {
    position: 'relative',
    display: 'inline-flex',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  headerMenuListHyperlink: {
    width: '100%',
    display: 'flex',
    justifyContent: 'start',
    padding: '10px',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    textTransform: 'capitalize',
    '&:hover': {
      color: theme.palette.secondary.dark
    }
  },
  headerMenuListItem: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    fontSize: '16px'
  },
  menuItem: {
    boxSizing: 'border-box',
  },
  category: {
    color: 'red',
    fontWeight: '500',
  },
}));

export default useStyles
