import React from 'react';
import styles from './Tables.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import TableItem from './../TableItem/TableItem';

const hoursData = [
  {
    hour: '10:00',
    tables: [
      { id: 1, status: 'booked', bookingId: 12, eventId: null },
      { id: 2, status: 'booked', bookingId: null, eventId: 76 },
      { id: 3, status: 'booked', bookingId: 16, eventId: null },
      { id: 4, status: 'free', bookingId: null, eventId: null },
      { id: 5, status: 'booked', bookingId: 75, eventId: null },
    ],
  },
  {
    hour: '10:30',
    tables: [
      { id: 1, status: 'booked', bookingId: 12, eventId: null },
      { id: 2, status: 'booked', bookingId: null, eventId: 76 },
      { id: 3, status: 'booked', bookingId: 16, eventId: null },
      { id: 4, status: 'free', bookingId: null, eventId: null },
      { id: 5, status: 'booked', bookingId: 75, eventId: null },
    ],
  },
  {
    hour: '11:00',
    tables: [
      { id: 1, status: 'booked', bookingId: 12, eventId: null },
      { id: 2, status: 'booked', bookingId: null, eventId: 76 },
      { id: 3, status: 'booked', bookingId: 16, eventId: null },
      { id: 4, status: 'free', bookingId: null, eventId: null },
      { id: 5, status: 'booked', bookingId: 75, eventId: null },
    ],
  },
  {
    hour: '11:30',
    tables: [
      { id: 1, status: 'booked', bookingId: 12, eventId: null },
      { id: 2, status: 'booked', bookingId: null, eventId: 76 },
      { id: 3, status: 'booked', bookingId: 16, eventId: null },
      { id: 4, status: 'free', bookingId: null, eventId: null },
      { id: 5, status: 'booked', bookingId: 75, eventId: null },
    ],
  },
  {
    hour: '12:00',
    tables: [
      { id: 1, status: 'booked', bookingId: 12, eventId: null },
      { id: 2, status: 'booked', bookingId: null, eventId: 76 },
      { id: 3, status: 'booked', bookingId: 16, eventId: null },
      { id: 4, status: 'free', bookingId: null, eventId: null },
      { id: 5, status: 'booked', bookingId: 75, eventId: null },
    ],
  },
];


const Tables = () => (
  <div className={styles.component}>
    <h2>Tables view</h2>

    <Paper className={styles.component}>
      <form noValidate>
        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue="2017-05-24"

          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Hour</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
            <TableCell>Table 4</TableCell>
            <TableCell>Table 5</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hoursData.map(hourData => (
            <TableRow key={hourData.hour}>

              <TableCell component="th" scope="row">
                {hourData.hour}
              </TableCell>
              {hourData.tables.map(table => (
                <TableCell key={table.id}>
                  <TableItem {...table}></TableItem>
                </TableCell>
              ))}

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>

  </div>
);



export default Tables;
