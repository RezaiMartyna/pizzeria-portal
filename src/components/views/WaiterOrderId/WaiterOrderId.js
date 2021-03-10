import React from 'react';
import styles from './WaiterOrderId.module.scss';
import PropTypes from 'prop-types';

const WaiterOrderId = (props) => (
  <div className={styles.component}>
    <h2>Waiter Order ID</h2>
    {props.match.params.id}
  </div>
);

WaiterOrderId.propTypes = {
  match: PropTypes.object,
};


export default WaiterOrderId;
