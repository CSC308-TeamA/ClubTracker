import React from 'react';
import Padding from './CalendarPageElements';

const calendarSourceURL = 'https://calendar.google.com/calendar/embed?src=i7jilka7plgl4bhh0sdegsigsk%40group.calendar.google.com&ctz=America%2FLos_Angeles';

function Calendar() {
  return (
    <Padding>
      <iframe title="Calendar" src={calendarSourceURL} width="800" height="600" frameBorder="0" scrolling="no" />
      <p>Check out our other events!</p>
    </Padding>
  );
}

export default Calendar;
