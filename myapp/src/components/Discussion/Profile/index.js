import React from 'react';
import {
   UserInfo,
   Name,
   Username,
   Role
 } from './ProfileElements';
 import pfp1 from '../../../assets/pfp1.gif';

function Profile() {
   const information = [
      {
         picture: pfp1,
         name: 'Mr. Robot',
         username: 'robo123',
         role: 'Coach'
      },
   ];

   const list = information.map((row, index) => {
      return (
         <UserInfo key={ index }>
            <img src={ row.picture }/>                        
            <Name>
               { row.name }
            </Name>
            <Username>
            👤{ row.username }
            </Username>
            <Role>
               { row.role }
            </Role>
         </UserInfo>
      );
   });

return (
   <>
       {list}
   </>
 );
}

export default Profile;