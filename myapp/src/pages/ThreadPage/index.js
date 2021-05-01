import React, { useState } from 'react';
import Thread from '../../components/Discussion/Thread';
import Form from '../../components/Discussion/Form';
import '../styles/thread.css';
import pfp1 from '../assets/profiles/pfp1.gif';
import pfp2 from '../assets/profiles/pfp2.gif';
import pfp3 from '../assets/profiles/pfp3.gif';

function ThreadPage() {
  const [characters, setCharacters] = useState([
    {
      picture: pfp1,
      name: 'Mr. Robot',
      user: 'robo123',
      role: 'Coach',
      comment: 'Sounds great! I will be there.',
    },
    {
      picture: pfp2,
      name: 'Jane',
      user: 'janedane',
      role: 'Parent',
      comment: 'Cool.',
    },
    {
      picture: pfp3,
      name: 'Sally',
      user: 'ILoveRobotics710',
      role: 'Head Coder',
      comment: 'We can check out the new serve drive code.',
    },
    {
      picture: pfp1,
      name: 'Jenisa',
      user: 'lovelybluebug',
      role: 'Head Coder',
      comment: 'I am done.',
    },
  ]);

  function removeOneCharacter(index) {
    const updated = characters.filter((character, i) => i !== index);
    setCharacters(updated);
  }

  function updateList(person) {
    setCharacters([...characters, person]);
  }

  return (
    <>
      <div className="container">
        <Thread
          characterData={characters}
          removeCharacter={removeOneCharacter}
        />
        <Form
          handleSubmit={updateList}
        />
      </div>
    </>
  );
}

export default ThreadPage;
