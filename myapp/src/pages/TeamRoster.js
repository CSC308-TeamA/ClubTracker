import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import websiteBanner from '../assets/websiteBanner.jpg'
import profileSilhouette from '../assets/profileSilhouette.jpg'
import "../styles/styles.scss";
import Padding from '../components/Padding/';

import Form from './FilterForm.js'

function TeamRoster() {
  const [characters, setCharacters] = useState([]);

  async function fetch(field) {
    try {
      var link = "http://localhost:5000/teamroster?"
      if (field.name !== "")
        link += "name=" + field.name + "&";
      if (field.stat !== "")
        link += "status=" + field.stat + "&";
      if (field.role !== "")
        link += "role=" + field.role + "&";
      if (field.posit !== "")
        link += "position=" + field.posit + "&";
      if (field.special !== "")
        link += "specialization=" + field.special + "&";

      const response = await axios.get(link);
      return response.data;
    }

    catch (error) {
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    fetch({
      name: '',
      stat: '',
      role: '',
      posit: '',
      special: ''
    }).then(result => {
      if (result)
        setCharacters(result);
    });
  }, []);

  function updatePage(field) {
    console.log(field);
    fetch(field).then(result => {
      if (result)
        setCharacters(result);
    });
  }

  const list = characters.map((row, index) => {
    return (
      <div style={{ padding: '10px' }}>
        <Card key={ index } style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ profileSilhouette } />
          <Card.Body>
            <Card.Title>{ row.name }</Card.Title>
            <Card.Text>
              <p> Position: { row.position } </p>
              <p> Quote: <i>{ row.quote }</i> </p>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  });

  return (
    <>
      <Padding />
      <div style={{ paddingTop: '15px', paddingBottom: '20px', display: 'flex', justifyContent: 'center'}}>
        <img src={ websiteBanner } />
      </div>
      <div>
        <Form handleSubmit = {updatePage} />
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {list}
      </div>
    </>
  );
}

export default TeamRoster;

