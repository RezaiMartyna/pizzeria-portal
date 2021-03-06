import React from 'react';
import styles from './TablesBookingId.module.scss';
import PropTypes from 'prop-types';



const TablesBookingId = (props) => {

  return (
    <div className={styles.component}>
      <h2>Tables Booking ID</h2>
      {props.match.params.id}

      - zawiera wszystkie inforacje dotyczace rezerwacjoi
      - umozliwia edycje i zapisanie zmian
    </div>
  );
};

TablesBookingId.propTypes = {
  match: PropTypes.object,
};

export default TablesBookingId;
