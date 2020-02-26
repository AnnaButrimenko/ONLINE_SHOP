import React from 'react';
import Carousel from 'nuka-carousel';
import PropTypes from 'prop-types';

export default function Carousels (props) {
  const {
    autoPlay,
    autoplayInterval,
    wrapAround,
    slidesToShow,
    slidesToScroll,
    cellSpacing,
    transitionMode,
    dragging,
    children,
    renderCenterLeftControls,
    renderCenterRightControls,
    renderBottomCenterControls,
    className,
  } = props;

  return (
    <Carousel
      autoplay={autoPlay}
      autoplayInterval={autoplayInterval}
      wrapAround={wrapAround}
      cellSpacing={cellSpacing}
      slidesToScroll={slidesToScroll}
      slidesToShow={slidesToShow}
      transitionMode={transitionMode}
      dragging={dragging}
      className={className}
      renderCenterLeftControls={renderCenterLeftControls}
      renderCenterRightControls={renderCenterRightControls}
      renderBottomCenterControls={renderBottomCenterControls}
    >
      {children}
    </Carousel>
  );
}

Carousels.propTypes = {
  autoPlay: PropTypes.bool,
  autoplayInterval: PropTypes.number,
  wrapAround: PropTypes.bool,
  slidesToShow: PropTypes.number.isRequired,
  transitionMode: PropTypes.string,
  dragging: PropTypes.bool,
  children: PropTypes.node,
  renderCenterLeftControls: PropTypes.func,
  renderCenterRightControls: PropTypes.func,
  renderBottomCenterControls: PropTypes.func,
  className: PropTypes.string,
  slidesToScroll: PropTypes.oneOfType([PropTypes.number, PropTypes.oneOf(['auto'])]),
  cellSpacing: PropTypes.number
};

Carousels.defaultProps = {
  children: <div />,
  autoPlay: false,
  transitionMode: 'fade',
  dragging: true,
  autoplayInterval: 2000,
  wrapAround: true,
  className: '',
  slidesToScroll: 'auto',
  cellSpacing: 2,
  renderBottomCenterControls: () => {},
  renderCenterLeftControls: () => {},
  renderCenterRightControls: () => {}
};
