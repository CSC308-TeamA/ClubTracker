import React from 'react';
import ThreadHeader from '../ThreadHeader'
import ThreadBody from '../ThreadBody'
import Card from 'react-bootstrap/Card'

function Thread(props) {
    console.log(props.characterData)
    return (
        <>
            <Card>
                <ThreadHeader />
                <ThreadBody 
                    characterData={props.characterData} 
                    removeCharacter={props.removeCharacter} 
                />
            </Card>
        </>
    );
}
    
export default Thread;