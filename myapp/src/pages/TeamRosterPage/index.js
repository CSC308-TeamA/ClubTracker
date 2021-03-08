import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Accordion, Button, Card } from 'react-bootstrap'

import websiteBanner from '../../assets/websiteBanner.jpg'
import profileSilhouette from '../../assets/profileSilhouette.jpg'
import "../../styles/styles.scss";
import Padding from '../../components/Padding';
import Form from '../FilterForm'
import AddUserForm from '../../components/AddUserForm'

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
        <Accordion>
          <Card key={ index } style={{ width: '18rem' }}>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                <Card.Title>{ row.name }</Card.Title>
                <p> Position: { row.position } </p>
                <Card.Img variant="top" src={ profileSilhouette } />
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index}>
              <Card.Body>
                <Card.Text>
                  <p> Quote: <i>{ row.quote }</i> </p>
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  });

  return (
  <div>
    <div style={{ paddingTop: '15px', paddingBottom: '20px', display: 'flex', justifyContent: 'center' }}>
      <img src={ websiteBanner } />
    </div>

    <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '15px' }}>
        <Accordion>
          <Accordion.Toggle as={Button} variant="primary" eventKey="0">
            + Add a Member 
          </Accordion.Toggle>

          <Accordion.Collapse eventKey="0">
            <AddUserForm />
          </Accordion.Collapse>

        </Accordion>
    </div>

    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Form handleSubmit = {updatePage} />
    </div>

    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {list}
    </div>
  </div>
  );
}

export default TeamRoster;

