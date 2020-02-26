import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  radioErrorMsg: {
    textAlign: 'center',
    marginTop: 0,
    marginBottom: '15px'
  },
  gender: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  paymentMethod: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  delivery: {
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
}));

export default useStyles;