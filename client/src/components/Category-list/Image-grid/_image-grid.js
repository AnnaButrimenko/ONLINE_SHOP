import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => ({

  categoriesImg: {
    height: '47vh',
    width: '100%',
    flex: 'auto',
    backgroundRepeat: 'norepeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.up('lg')]: {
      height: '75vh',
    }
  }

}));

export default useStyles;