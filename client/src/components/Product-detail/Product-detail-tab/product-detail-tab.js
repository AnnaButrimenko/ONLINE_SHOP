import React from 'react';
import { useSelector } from 'react-redux';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Badge } from '@material-ui/core';
import PropTypes from 'prop-types';

import TableSpecification from '../Table-specification/table-specifications';
import Comment from '../../Comment/comment';
import useStyles from './_product-detail-tab';

export default function ProductDetailTab({ currentProduct }) {
  const { myCustomParams } = currentProduct;
  const { productDescription, productHighlights } = myCustomParams;
  const classes = useStyles();
  const commentsLength = useSelector(
    (state) => state.commentsReducer.commentsList.length.toString()
  );

  return (
    <>
      <Tabs>
        <TabList>
          <Tab><h4>Highlights</h4></Tab>
          <Tab><h4>Product Description</h4></Tab>
          <Tab><h4>Specifications</h4></Tab>
          <Tab>
            <h4>
              Comments
              <Badge badgeContent={commentsLength} color="error" className={classes.badge} />
            </h4>
          </Tab>
        </TabList>

        <TabPanel>
          <ul className={classes.highlights}>
            {productHighlights.map((text) => (<li key={text}>{text}</li>))}
          </ul>
        </TabPanel>
        <TabPanel>
          <div className={classes.description}>
            {productDescription.map((text) => (<p key={text}>{text}</p>))}
          </div>
        </TabPanel>
        <TabPanel>
          <TableSpecification data={currentProduct} />
        </TabPanel>
        <TabPanel>
          <Comment currentProduct={currentProduct} />
        </TabPanel>

      </Tabs>
    </>
  )
}

ProductDetailTab.propTypes = {
  currentProduct: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.symbol,
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ])).isRequired,
};
