import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import {
   CardHoover,
   UpdateText,
   DescriptionText,
   NavLink
 } from './ThreadElements';

function ThreadHeader() {
   const information = [
      {
         title: 'Meeting 2/19',
         description: 'Hello all! Today, we will be meeting after school. We have some projects to get done.',
         user: 'Mr. Robot'
      },
   ];

   const list = information.map((row, index)  => {
      return (
         <thead>
            <CardHoover key={ index }>
               <tr>
                  <Card.Body>
                  <Card.Title>   
                     <td>     
                        { row.title }
                     </td>   
                  </Card.Title>
                  <DescriptionText>
                     <td>
                        { row.description }
                     </td>
                  </DescriptionText>
                  <UpdateText>
                     <td>
                        <p>
                           { row.user }
                        </p>
                     </td>
                  </UpdateText>
                  </Card.Body>
               </tr>
            </CardHoover>
         </thead>
      );
   });

return (
   <>
       {list}
   </>
 );
}

export default ThreadHeader;