import React from 'react'
import { Accordion, Button, Card } from 'react-bootstrap'
import profileSilhouette from '../assets/profileSilhouette.png'
import styles from '../styles/TeamRoster.module.css'

function RosterList(props) {
  return (
    props.characterData.map((row, index) => {
      return (
        <div className={styles.rosterList} key={index}>
          <Accordion>
            <Card className={styles.rosterListCard}>
              <Card.Header>
                <Card.Title className={styles.rosterListCardTitle}>{row.name}</Card.Title>
                <Accordion.Toggle as={Button} variant="link" eventKey={row._id}>
                  <Card.Img variant="top" src={profileSilhouette} />
                </Accordion.Toggle>
                <p className={styles.rosterListCardPosition}>
                  Position: {row.position} <br />
                  Specialization: {row.specialization.join(", ")}
                </p>
              </Card.Header>
            <Accordion.Collapse eventKey={row._id}>
              <Card.Body>
                <Card.Text>
                  Quote: <i>{row.quote}</i>
                </Card.Text>
              </Card.Body>
            </Accordion.Collapse>
            </Card>
          </Accordion>
        </div >
      );
})
  )
}


function Roster(props) {
  return (
    <div className={styles.roster}>
      <RosterList characterData={props.characterData} />
    </div>
  );
}

export default Roster;
