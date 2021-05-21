import React from 'react';
import Card from 'react-bootstrap/Card';
import Post from '../Post';
import {
  DescriptionText,
  Edit,
  CardHoover,
  ProfileLeft,
} from './ThreadElements';

function ThreadBody(props) {
  const rows = props.postData.map((row, index) => {
    return (
      <>
        <Card.Body>
          <ProfileLeft>
            <Post user={row.user} />
          </ProfileLeft>
          <DescriptionText>
            {row.post}
          </DescriptionText>
          <Edit>
            <button onClick={() => props.removePost(index)}>Delete</button>
          </Edit>
        </Card.Body>
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
