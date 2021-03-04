import React from 'react';
//import styles from './MyComponent.scss';
import PageNav from './../PageNav/PageNav';
import PropTypes from 'prop-types';

const MainLayout = ({children}) => (

  <div>
    <PageNav/>
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;


