import React from 'react'
import { TableCalendar } from '../components/Table';

const calendarSourceURL = "https://calendar.google.com/calendar/embed?src=i7jilka7plgl4bhh0sdegsigsk%40group.calendar.google.com&ctz=America%2FLos_Angeles";

export const Calendar = () => (
        <>
                <iframe src={calendarSourceURL} width="800" height="600" frameborder="0" scrolling="no"> </iframe>
                <TableCalendar />
        </>
        
)