import React from 'react';
import styles from './TablesEventsId.module.scss';
import PropTypes from 'prop-types';

const TablesEventsId = (props) => (
  <div className={styles.component}>
    <h2>Tables Events ID</h2>
    {props.match.params.id}
  </div>
);
TablesEventsId.propTypes = {
  match: PropTypes.object,
};


export default TablesEventsId;
