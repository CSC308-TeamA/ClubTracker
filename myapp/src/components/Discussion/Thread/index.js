import React from 'react';
import ThreadHeader from '../ThreadHeader'
import ThreadBody from '../ThreadBody'
import Card from 'react-bootstrap/Card'

function Thread(props) {
    console.log(props.postData)
    return (
        <>
            <Card>
                <ThreadHeader />
                <ThreadBody 
                    postData={props.postData}
                    removePost={props.removePost}
                />
            </Card>
        </>
    );
}
    
export default Thread;
