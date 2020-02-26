import React from 'react';
import PropTypes from 'prop-types';

function getDotIndexes (slideCountOwn, slidesToScrollOwn, slidesToShowOwn, cellAlignOwn) {
  const dotIndexes = [];
  let lastDotIndex = slideCountOwn - slidesToShowOwn;

  switch (cellAlignOwn) {
    case 'center':
    case 'right':
      lastDotIndex += slidesToShowOwn - 1;
      break;
    default:
  }

  if (lastDotIndex < 0) {
    return [0];
  }

  for (let i = 0; i < lastDotIndex; i += slidesToScrollOwn) {
    dotIndexes.push(i);
  }

  dotIndexes.push(lastDotIndex);
  return dotIndexes;
}

export default function PagingDots (props) {
  const {
    currentSlide,
    goToSlide,
    slideCount,
    slidesToScroll,
    slidesToShow,
    cellAlign,
    classItems,
    buttonItems,
    ulPagingItem,
  } = props;

  const indexes = getDotIndexes(slideCount, slidesToScroll, slidesToShow, cellAlign);
  return (
    <ul className={ulPagingItem}>
      {indexes.map((index) => (
        <li
          key={index}
          className={currentSlide === index ? `${classItems} active` : classItems}
        >
          <button
            className={buttonItems}
            type="button"
            onClick={goToSlide.bind(null, index)}
            aria-label={'slide '.concat(index + 1, ' bullet')}
          >
            {index + 1}
          </button>
        </li>
      ))}
    </ul>
  )
}

PagingDots.propTypes = {
  slideCount: PropTypes.number.isRequired,
  slidesToScroll: PropTypes.number.isRequired,
  slidesToShow: PropTypes.number.isRequired,
  cellAlign: PropTypes.string.isRequired,
  currentSlide: PropTypes.number.isRequired,
  goToSlide: PropTypes.func.isRequired,
  classItems: PropTypes.string.isRequired,
  ulPagingItem: PropTypes.string.isRequired,
  buttonItems: PropTypes.string,
};

PagingDots.defaultProps = {
  buttonItems: '',
};
