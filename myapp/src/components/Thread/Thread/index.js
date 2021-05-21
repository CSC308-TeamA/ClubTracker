import React from 'react';
import ThreadBody from '../ThreadBody'
import Card from 'react-bootstrap/Card'

function Thread(props) {
    return (
      <>
        <Card>
          <ThreadBody 
            postData={props.postData}
            removePost={props.removePost} />
        </Card>
      </>
    );
}

export default Thread;
