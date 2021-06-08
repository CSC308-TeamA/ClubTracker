/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Card from 'react-bootstrap/Card';
import ThreadBody from '../ThreadBody';

function Thread({
  postData,
  removePost,
  logInStatus,
  link,
}) {
  return (
    <>
      <Card>
        <ThreadBody
          postData={postData}
          removePost={removePost}
          logInStatus={logInStatus}
          link={link}
        />
      </Card>
    </>
  );
}

export default Thread;
