import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Accordion, Button } from 'react-bootstrap'
import { CardChange, Hoover } from './TeamRosterPageElements';

import websiteBanner from '../../assets/websiteBanner.jpg'
import profileSilhouette from '../../assets/profileSilhouette.jpg'
import "../../styles/styles.scss";
import Padding from '../../components/Padding';
import Form from '../../components/FilterForm'
import AddUserForm from '../../components/AddUserForm/'

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
          <CardChange key={ index } style={{ width: '18rem' }}>
            <CardChange.Header>
     
              <Accordion.Toggle as={Hoover} variant="link" eventKey={index}>
                <CardChange.Title>{ row.name }</CardChange.Title>
                <p> Position: { row.position } </p>
                <CardChange.Img variant="top" src={ profileSilhouette } />
              </Accordion.Toggle>
            </CardChange.Header>
            <Accordion.Collapse eventKey={index}>
              <CardChange.Body>
                <CardChange.Text>
                  <p> Quote: <i>{ row.quote }</i> </p>
                </CardChange.Text>
              </CardChange.Body>
            </Accordion.Collapse>
          </CardChange>
        </Accordion>
      </div>
    );
  });

  return (
    <>
    <Padding />
      <div style={{ paddingTop: '15px', paddingBottom: '20px', display: 'flex', justifyContent: 'center' }}>
        <img src={ websiteBanner } alt=""/>
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
    </>
  );
}

export default TeamRoster;

