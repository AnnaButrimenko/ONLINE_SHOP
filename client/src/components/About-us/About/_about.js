import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/img/wmf_about.jpg)`,
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    // width: '100%'
  },
  container: {
    position: 'relative',
    height: '300px',
    [theme.breakpoints.up('sm')]: {
      height: '400px'
    },
    [theme.breakpoints.up('lg')]: {
      height: '500px'
    }
  },
  textImage: {
    backgroundColor: 'white',
    opacity: 0.8,
    position: 'absolute',
    bottom: '10%',
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      padding: '27px',
    }
  },
  imageTitle: {
    fontSize: '16px',
    [theme.breakpoints.only('sm')]: {
      fontSize: '24px',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '19px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '26px',
    }
  },
  imageParagraph: {
    fontSize: '14px',
    [theme.breakpoints.only('sm')]: {
      fontSize: '19px',
    },
    [theme.breakpoints.only('md')]: {
      fontSize: '16px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '20px',
    }
  },
  text: {
    textAlign: 'justify',
    paddingBottom: theme.spacing(3),
  },
}));

export default useStyles;