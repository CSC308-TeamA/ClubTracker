import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Button, Card } from 'react-bootstrap';
import profileSilhouette from '../assets/profileSilhouette.png';
import styles from '../styles/TeamRoster.module.css';

function Roster({ characterData, removeCharacter }) {
  return (
    <div className={styles.roster}>
      {characterData.map((row) => (
        <div className={styles.rosterList} key={row._id}>
          <Accordion>
            <Card className={styles.rosterListCard}>
              <Card.Header>
                <Card.Title className={styles.rosterListCardTitle}>
                  {row.name}
                </Card.Title>
                <Accordion.Toggle as={Button} variant="link" eventKey={row._id}>
                  <Card.Img variant="top" src={profileSilhouette} />
                </Accordion.Toggle>
                <p className={styles.rosterListCardPosition}>
                  Position:
                  {' '}
                  {row.position}
                  {' '}
                  <br />
                  Specialization:
                  {' '}
                  {row.specialization ? row.specialization.join(', ') : ''}
                </p>
              </Card.Header>
              <Accordion.Collapse eventKey={row._id}>
                <Card.Body>
                  <Card.Text>
                    Quote:
                    {' '}
                    <i>{row.quote}</i>
                    <Button onClick={() => removeCharacter(row._id)}>
                      Delete
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      ))}
    </div>
  );
}

Roster.propTypes = {
  characterData: PropTypes.node.isRequired,
  removeCharacter: PropTypes.func.isRequired,
};

export default Roster;
