import React from 'react';
import {
   DescriptionText,
   Edit,
   CardHoover,
   ProfileLeft,
 } from './ThreadElements';
 import Card from 'react-bootstrap/Card'
 import Profile from '../Profile'


function ThreadBody(props) {
  const rows = props.postData.map((row, index) => {
     return (
      <>
         <CardHoover >
            <Card.Body>
               <ProfileLeft>
                  <Profile 
                  picture={ row.picture }
                     name={ row.name } 
                     user={ row.user } 
                     role={ row.role }
                  />             
               </ProfileLeft>
               <DescriptionText>
                  { row.comment }
               </DescriptionText>
               <Edit>
                  <button onClick={() => props.removePost(index)}>Delete</button>
               </Edit>
            </Card.Body>
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

export default ThreadBody;
