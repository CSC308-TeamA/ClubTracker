import React from 'react';
import Table from 'react-bootstrap/Table'

export const TableCalendar = () => (
    <Table responsive>
        <thead>
            <tr>
            <th>#</th>
            {Array.from({ length: 7 }).map((_, index) => (
                <th key={index}>Days of the Week</th>
            ))}
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            {Array.from({ length: 7 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
            ))}
            </tr>
            <tr>
            <td>2</td>
            {Array.from({ length: 7 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
            ))}
            </tr>
            <tr>
            <td>3</td>
            {Array.from({ length: 7 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
            ))}
            </tr>
            <tr>
            <td>3</td>
            {Array.from({ length: 7 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
            ))}
            </tr>
            <tr>
            <td>3</td>
            {Array.from({ length: 7 }).map((_, index) => (
                <td key={index}>Table cell {index}</td>
            ))}
            </tr>
        </tbody>
    </Table>
)