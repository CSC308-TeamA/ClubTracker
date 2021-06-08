/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Card from 'react-bootstrap/Card';
import Post from '../Post';
import {
  DescriptionText,
  Edit,
  ProfileLeft,
} from './ThreadElements';

function ThreadBody({ postData, removePost, link }) {
  const rows = postData.map((row) => (
    <>
      <Card.Body>
        <ProfileLeft>
          <Post user={row.user} link={link} />
        </ProfileLeft>
        <DescriptionText>
          {row.post}
        </DescriptionText>
        <Edit>
          <button type="button" onClick={() => removePost(row)}>Delete</button>
        </Edit>
      </Card.Body>
    </>
  ));

  return (
    <tbody>
      {rows}
    </tbody>
  );
}

export default ThreadBody;
