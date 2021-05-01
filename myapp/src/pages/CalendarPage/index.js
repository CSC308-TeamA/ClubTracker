import React from 'react';

const calendarSourceURL = 'https://calendar.google.com/calendar/embed?src=i7jilka7plgl4bhh0sdegsigsk%40group.calendar.google.com&ctz=America%2FLos_Angeles';

function Calendar() {
  return (
    <>
      <iframe title="Calendar" src={calendarSourceURL} width="800" height="600" frameBorder="0" scrolling="no" />
      <p>Check out our other events!</p>
    </>
  );
}

export default Calendar;
