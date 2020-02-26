import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux'
import RoutesName from '../../routes-list';

import ModalWindow from '../Modal-window/modal-window';
import SignIn from '../Sign-in/sign-in';

export default function LoginModal({ open, onModalClose }) {
  const { loggedIn } = useSelector((state) => state.user);

  return (
    <>
      <ModalWindow open={open} onModalClose={onModalClose}>
        <SignIn onClose={onModalClose} />
      </ModalWindow>
      {loggedIn && <Redirect to={RoutesName.home} />}
    </>
  )
}

LoginModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired,
};
