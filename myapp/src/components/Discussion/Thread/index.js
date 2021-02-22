import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import ThreadHeader from '../ThreadHeader'

import {
   CardHoover,
   UpdateText,
   DescriptionText,
   NavLink
 } from './ThreadElements';

function ThreadBody(props) {
  const rows = props.characterData.map((row, index) => {
     return (
      <>
         <CardHoover >
            <tr key={ index }>
               <Card.Body>
                  <DescriptionText>
                     <td>
                        { row.comment }
                     </td>
                  </DescriptionText>
                  <UpdateText>
                     <td>
                        <p>
                           { row.user }
                        </p>
                     </td>
                     <td>
                        <button onClick={() => props.removeCharacter(index)}>Delete</button>
                     </td>
                  </UpdateText>
               </Card.Body>
            </tr>
         </CardHoover>
      </>
     );
  });
  return (
     <tbody>
        {rows}
     </tbody>

  );
}

function Thread(props) {
return (
  <table>
     <ThreadHeader />
     <ThreadBody characterData={props.characterData} removeCharacter={props.removeCharacter} />
  </table>
);
}

export default Thread;