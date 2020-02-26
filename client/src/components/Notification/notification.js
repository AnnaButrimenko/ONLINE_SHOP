import React, { useMemo } from 'react'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as notificationActions from '../../redux/actions/notification'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Notification() {
  const { type, message, fading, open } = useSelector((state) => state.notification);
  const dispatch = useDispatch()
  const actions = useMemo(
    () => bindActionCreators(notificationActions, dispatch),
    [dispatch]
  )

  if (fading) {
    return (
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open}
        autoHideDuration={6000}
        onClose={actions.closeNotification}
      >
        <Alert onClose={actions.closeNotification} severity={type}>
          {message}
        </Alert>
      </Snackbar>
    );
  }
  return (
    <Alert severity={type}>{message}</Alert>
  );
}