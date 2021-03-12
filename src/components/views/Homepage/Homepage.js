import React from 'react';
import styles from './Homepage.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const Homepage = () => (
  <div className={styles.component}>
    <h2>Homepage view</h2>

    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Order on place</TableCell>
          <TableCell>Order online</TableCell>
          <TableCell>Reservations Summary</TableCell>
          <TableCell>Events Summary</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableCell>10</TableCell>
        <TableCell>15</TableCell>
        <TableCell>3</TableCell>
        <TableCell>6</TableCell>
      </TableBody>
    </Table>
  </div>
);

export default Homepage;
