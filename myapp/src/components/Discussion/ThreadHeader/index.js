import React from 'react';
import Card from 'react-bootstrap/Card'
import Profile from '../Profile';
import {
   DescriptionText,
   Title, 
   ProfileLeft
 } from './ThreadElements';
 import pfp5 from '../../../assets/profiles/pfp5.gif';

function ThreadHeader() {
   const information = [
      {
         title: '⏲️Meeting 2/19',
         description: 'Hello all! Today, we will be meeting after school. We have some projects to get done.',
      },
   ];

   const list = information.map((row, index) => {
      return (
         <thead>
            <Card key={ index }>
               <tr>
                  <Card.Body>
                  <Card.Title>
                     <Title>      
                        { row.title } 
                     </Title>
                  </Card.Title>
                  <hr />
                  <ProfileLeft>
                     <Profile 
                        picture={ pfp5 }
                        name='Mr. Robot'
                        user='robo123'
                        role='Coach'
                     />
                  </ProfileLeft>
                  <DescriptionText>
                     <td>
                        { row.description }
                     </td>
                  </DescriptionText>
                  </Card.Body>
               </tr>
            </Card>
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