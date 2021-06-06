/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Card from 'react-bootstrap/Card';
import ThreadBody from '../ThreadBody';

function Thread(props) {
  return (
    <>
      <Card>
        <ThreadBody
          postData={props.postData}
          removePost={props.removePost}
        />
      </Card>
    </>
  );
}

export default Thread;
