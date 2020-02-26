import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  accountContentFooter: {
    marginTop: '30px',
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      textAlign: 'left'
    }
  },
  root: {
    '&.MuiFormControlLabel-root': {
      textAlign: 'justify',
      marginRight: 0,
      alignItems: 'flex-start'
    },
    '& .MuiCheckbox-colorSecondary.Mui-checked': {
      color: theme.palette.primary.main
    }
  },
  radioLabel: {
    color: theme.palette.secondary.dark,
  },
  labelAgreement: {
    fontSize: '0.875rem',
    color: 'black'
  },
  submit: {
    display: 'block',
    margin: '0 auto',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    padding: theme.spacing(1, 1),
    fontSize: '0.87rem',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1, 3),
      marginLeft: 0
    }
  },
  linkSignIn: {
    cursor: 'pointer',
    color: theme.palette.secondary.main
  },
  link: {
    textDecoration: 'underline',
    cursor: 'pointer'
  }
}));

export default useStyles;

// import { makeStyles } from '@material-ui/core/styles';
//
// const useStyles = makeStyles((theme) => ({
//   accountContentFooter: {
//     marginTop: '30px',
//     textAlign: 'center',
//     [theme.breakpoints.up('md')]: {
//       textAlign: 'left'
//     }
//   },
//   root: {
//     '&.MuiFormControlLabel-root': {
//       textAlign: 'justify',
//       marginRight: 0,
//       alignItems: 'flex-start'
//     },
//     '& .MuiCheckbox-colorSecondary.Mui-checked': {
//       color: theme.palette.primary.main
//     }
//   },
//   radioLabel: {
//     color: theme.palette.secondary.dark,
//   },
//   labelAgreement: {
//     fontSize: '0.875rem',
//     color: 'black'
//   },
//   submit: {
//     display: 'block',
//     margin: '0 auto',
//     marginTop: theme.spacing(3),
//     marginBottom: theme.spacing(2),
//     padding: theme.spacing(1, 1),
//     fontSize: '0.87rem',
//     [theme.breakpoints.up('md')]: {
//       padding: theme.spacing(1, 3),
//       marginLeft: 0
//     }
//   },
//   linkSignIn: {
//     cursor: 'pointer',
//     color: theme.palette.secondary.main
//   }
// }));
//
// export default useStyles;
