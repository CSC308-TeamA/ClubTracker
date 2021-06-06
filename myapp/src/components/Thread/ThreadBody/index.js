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

function ThreadBody(props) {
  const rows = props.postData.map((row) => (
    <>
      <Card.Body>
        <ProfileLeft>
          <Post user={row.user} />
        </ProfileLeft>
        <DescriptionText>
          {row.post}
        </DescriptionText>
        <Edit>
          <button type="button" onClick={() => props.removePost(row)}>Delete</button>
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
