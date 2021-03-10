import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';


const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/:id`} activeClassName='active'>Table Booking ID</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>Table Booking New</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/:id`} activeClassName='active'>Table Events ID</Link>
    <Link to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>Table Events New</Link>
  </div>
);



export default Tables;
