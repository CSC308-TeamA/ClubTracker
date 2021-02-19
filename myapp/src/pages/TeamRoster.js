import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Card from 'react-bootstrap/Card'
import websiteBanner from '../assets/websiteBanner.jpg'
import profileSilhouette from '../assets/profileSilhouette.jpg'
import "../styles/styles.scss";
import Padding from '../components/Padding/';


function TeamRoster() {
  const [characters, setCharacters] = useState([]);

  async function fetchAll() {
    try {
      const response = await axios.get('http://localhost:5000/teamroster');
      return response.data.team_roster;
    }

    catch (error) {
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    fetchAll().then(result => {
      if (result)
        setCharacters(result);
    });
  }, []);

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
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {list}
      </div>
    </>
  );
}

export default TeamRoster;

