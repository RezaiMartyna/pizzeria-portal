import React from 'react';
import styles from './Kitchen.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SwitchChanger from './SwitchChanger';

const kitchenContent = [
  {id: '1', orderNumber: '321', order: ['hamburger extra'], status: 'done'},
  {id: '2', orderNumber: '654',order: ['pizza ham', 'sprite'], status: 'in preparation'},
  {id: '3', orderNumber: '876',order: ['pizza spinachi', 'colla'], status: 'in preparation'},
];

const Kitchen = () => {
  return (
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Order number</TableCell>
            <TableCell>Order Name</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {kitchenContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.orderNumber}
              </TableCell>
              <TableCell>
                {row.order}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                <SwitchChanger />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Kitchen;
