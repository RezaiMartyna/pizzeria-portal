import React from 'react';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/new`} activeClassName='active'>Waiter Order New</Link>
    <Link to={`${process.env.PUBLIC_URL}/waiter/order/:id`} activeClassName='active'>Waiter Order ID</Link>
  </div>
);

export default Waiter;