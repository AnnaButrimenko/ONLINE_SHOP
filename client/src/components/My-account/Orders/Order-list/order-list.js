import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getOrders from '../../../../services/get-orders';
import { orders as ordersAction } from '../../../../redux/actions/user';
import Spinner from '../../../Spinner/spinner';
import Order from '../Order/order';

const OrderList = () => {
  const { orders } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    getOrders()
      .then((response) => {
        dispatch(ordersAction(response));
        setLoading(false);
      })
  }, [dispatch]);

  return (
    <>
      {loading && <Spinner />}
      {!loading && orders.length && orders.map((item) => (
        <Order key={item.orderNo} item={item} />
      ))}
      {!loading && !orders.length && (
        <div>
          <p>So far, here is no orders, move on to the catalog and place your order.</p>
          <strong>Best wishes, your WMF</strong>
        </div>
      )}
    </>
  )
};

export default OrderList;
