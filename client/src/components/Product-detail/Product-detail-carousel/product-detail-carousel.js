import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon/SvgIcon';
import IconButton from '@material-ui/core/IconButton';
import ImageGallery from 'react-image-gallery';
import useStyles from './_product-detail-carousel'

const ProductDetailCarousel = ({ images }) => {
  const classes = useStyles();

  return (
    <ImageGallery
      renderLeftNav={(onClick, disabled) => (
        <IconButton
          className={classes.buttonLeft}
          disabled={disabled}
          onClick={onClick}
        >
          <SvgIcon>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" /></svg>
          </SvgIcon>
        </IconButton>
      )}
      renderRightNav={(onClick, disabled) => (
        <IconButton
          className={classes.buttonRight}
          disabled={disabled}
          onClick={onClick}
        >
          <SvgIcon>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" /></svg>
          </SvgIcon>
        </IconButton>
      )}
      renderFullscreenButton={
        (onClick, isFullscreen) => (
          <IconButton
            className={classes.fullScreen}
            onClick={onClick}
          >
            {isFullscreen
              ? (
                <SvgIcon className="active" color="default" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 2h2v5h7v2h-9v-7zm9 13v2h-7v5h-2v-7h9zm-15 7h-2v-5h-7v-2h9v7zm-9-13v-2h7v-5h2v7h-9z" /></svg>
                </SvgIcon>
              )
              : (
                <SvgIcon >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 9h-2v-5h-7v-2h9v7zm-9 13v-2h7v-5h2v7h-9zm-15-7h2v5h7v2h-9v-7zm9-13v2h-7v5h-2v-7h9z" /></svg>
                </SvgIcon>
              )}
          </IconButton>
        )
      }

      items={images}
      showThumbnails
      showPlayButton={false}
      disableThumbnailScroll
    />
  )
};

export default ProductDetailCarousel;

ProductDetailCarousel.propTypes = {
  images: PropTypes.oneOfType([PropTypes.array]).isRequired
};
