import React from 'react';
import {
   UserInfo, NewLI, NewB, NewUL
 } from './ProfilePreviewElements';
 
function ProfilePreview(props) {
    const rows = props.characterData.map((row, index) => {
   return (
         <>
            <img src={ row.picture }/>  
            <NewUL>
                <NewLI><NewB>Name</NewB>: { row.first } { row.last }</NewLI>
                <NewLI><NewB>User👤</NewB>: { row.user }</NewLI>
                <NewLI><NewB>Email</NewB>: { row.email }</NewLI>
                <NewLI><NewB>Password</NewB>: { row.password }</NewLI>
                <NewLI><NewB>Phone</NewB>: { row.phone }</NewLI>
                <NewLI><NewB>Role</NewB>: { row.role }</NewLI>
                <NewLI><NewB>Position</NewB>: { row.position }</NewLI>
                <NewLI><NewB>Specialization</NewB>: { row.specialization }</NewLI>
            </NewUL>

            </>
        );
    });
  return (
    <>
        {rows}
    </>
  );
}

export default ProfilePreview;