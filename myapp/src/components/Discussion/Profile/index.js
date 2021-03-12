import React from 'react';
import {
   UserInfo,
   Name,
   Username,
   Role
 } from './ProfileElements';

function Profile(props) {
   return (
         <>
            <UserInfo>
               <img src={ props.picture }/>  
               <Name>
                  { props.name }
               </Name>
               <Username>
               👤{ props.user }
               </Username>
               <Role>
                  { props.role }
               </Role>
            </UserInfo>
         </>
      );
   }

export default Profile;