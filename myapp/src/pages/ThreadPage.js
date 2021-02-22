import React, { useState } from 'react';
import Thread from '../components/Discussion/Thread';
import Form from '../components/Discussion/Form'
import Padding from '../components/Padding';
import '../styles/thread.css';


function ThreadPage() {
  const [characters, setCharacters] = useState([
    {
      comment: 'Sounds great! I will be there.',
      user: 'Parent'
    },
    {
      comment: 'Cool.',
      user: 'Game Master'
    },
    {
      comment: 'We can check out the new serve drive code.',
      user: 'Head Coder'
    },
  ]);

  function removeOneCharacter (index) {
    const updated = characters.filter((character, i) => {
        return i !== index
    });
    setCharacters(updated);
  }

  function updateList(person) {
    setCharacters([...characters, person]);
  }

  return (
    <>
      <Padding />
      <div className="container">
        <Thread characterData={characters} removeCharacter={removeOneCharacter} />
        <Form handleSubmit={updateList} />
      </div>
    </>
  );  
}

export default ThreadPage;
