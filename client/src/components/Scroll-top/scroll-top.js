import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import IconButton from '@material-ui/core/Button';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: '105px',
    right: theme.spacing(2),
  },

  scroll_icon: {
    fontSize: '2rem'
  },
  scroll_btn: {
    padding: theme.spacing(1),
    borderRadius: theme.spacing(1),
    minWidth: 55,
    border: '1px solid white',
  }

}));

function ScrollTop(props) {
  const { window } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        <IconButton variant="contained" color="secondary" size="medium" aria-label="scroll back to top" className={classes.scroll_btn}>
          <KeyboardArrowUpIcon className={classes.scroll_icon} />
        </IconButton>
      </div>
    </Zoom>
  );
}

export function ScrollToAnchor() {
  return (
    <div id="back-to-top-anchor" />
  )
}

ScrollTop.defaultProps = {
  window: () => {}
};

ScrollTop.propTypes = {
  window: PropTypes.func,
};

export default ScrollTop
