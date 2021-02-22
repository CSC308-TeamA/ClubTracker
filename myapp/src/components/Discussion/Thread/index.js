import React from 'react';
import Card from 'react-bootstrap/Card'
import ThreadHeader from '../ThreadHeader'
import Profile from '../Profile';
import {
   CardHoover,
   ProfileLeft,
   DescriptionText,
   Edit,
 } from './ThreadElements';

function ThreadBody(props) {
  const rows = props.characterData.map((row, index) => {
     return (
      <>
         <CardHoover >
            <tr key={ index }>
               <Card.Body>
                  <ProfileLeft>
                     <Profile />
                     <p>
                        { row.user }
                     </p>                     
                  </ProfileLeft>
                  <DescriptionText>
                     { row.comment }
                  </DescriptionText>
                  <Edit>
                     <button onClick={() => props.removeCharacter(index)}>Delete</button>
                  </Edit>
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