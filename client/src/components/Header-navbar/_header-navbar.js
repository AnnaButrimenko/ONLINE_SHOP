import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  headerMenuWrapper: {
    // display: 'none',
    // [theme.breakpoints.up('md')]: {
    display: 'flex',
    // }
  },
  headerMenuCatalog: {
    display: 'flex'
  },
  headerMenuList: {
    position: 'relative',
    display: 'inline-flex',
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  headerMenuListItem: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    fontSize: '16px'
  },
  headerMenuListHyperlink: {
    padding: '10px',
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': {
      color: theme.palette.secondary.dark
    }
  },
  catalogWrapper: {
    boxShadow: '-1.5px 0 7px 0 #d4d4d4',
    position: 'absolute',
    // left: '0px',
    top: '45px',
    marginTop: '10px',
    zIndex: 100
  },
  catalogList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    // height: '160px'
  },
  catalogListItem: {
    display: 'block',
    padding: '20px 20px',
    background: theme.palette.background.secondary,
    cursor: 'pointer',
    textDecoration: 'none',
    color: theme.palette.text.primary,
  },
  categoryHover: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.primary.main,
    fontWeight: 'bold'
  },
  subCategoryList: {
    width: '200px',
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    // height: '160px'
  },
  subCategoryListItem: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '20px 20px',
    color: theme.palette.text.primary,
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main,
      fontWeight: 'bold'
    }
  },
  subCategoryItemContent: {
    display: 'flex',
    alignItems: 'center'
  },
  subCategoryItemImg: {
    width: '30px',
    height: '30px',
    marginRight: '10px'
  }
}));

export default useStyles;