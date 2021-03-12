import React from 'react';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';


const TableItem = ({ status, bookingId, eventId }) => {

  if (status === 'free') {
    return (
      <>
        <Link href={`${process.env.PUBLIC_URL}/tables/booking/new`}>
          <Button>New Booking</Button>
        </Link>

        <Link href={`${process.env.PUBLIC_URL}/tables/events/new`}>
          <Button>New Event</Button>
        </Link>
      </>
    );

  }
  else {
    if (bookingId === null) {
      return (
        <Link href={`${process.env.PUBLIC_URL}/tables/events/${eventId}`}>
          <Button>Event {eventId}</Button>
        </Link>
      );
    }
    else {
      return (
        <Link href={`${process.env.PUBLIC_URL}/tables/booking/${bookingId}`}>
          <Button>Booking {bookingId}</Button>
        </Link>
      );
    }
  }


};

export default TableItem;
