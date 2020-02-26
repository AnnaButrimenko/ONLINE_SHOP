import React, { useState } from 'react';
import {
  Backdrop,
  Fade,
  Modal
} from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import CloseIcon from '@material-ui/icons/Close';

import useStyles from './_modal-birthday-info';

const ModalBirthdayInfo = () => {
  const [openInfo, setOpenInfo] = useState(false);
  const handleOpenInfo = () => {
    setOpenInfo(true);
  };
  const handleCloseInfo = () => {
    setOpenInfo(false);
  };

  const classes = useStyles();

  return (
    <>
      <InfoOutlinedIcon fontSize="small" className={classes.infoIcon} type="button" onClick={handleOpenInfo} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modalInfoIcon}
        open={openInfo}
        onClose={handleCloseInfo}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openInfo}>
          <div className={classes.paperInfoIcon}>
            <h2 id="transition-modal-title" className={classes.modalInfoTitle}>
              Birthday gift
              <CloseIcon
                className={classes.modalInfoClose}
                color="action"
                onClick={handleCloseInfo}
              />
            </h2>
            <p id="transition-modal-description" className={classes.modalInfoText}>
              Let us surprise you – with a WMF gift on your birthday. Let us know
              your date of birth and you will receive an e-mail every year
              containing a birthday voucher, which you can then redeem in the
              online shop or in one of our stores.
            </p>
          </div>
        </Fade>
      </Modal>
    </>
  )
};

export default ModalBirthdayInfo;
