import React, {useState} from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import {
  CardHoover,
  UpdateText,
  ThreadCard,
  TitleText,
  DescriptionText,
  NavLink
} from './CardElements';

function Cards() {
  const [groups, setGroups] = useState([
    {
      groupName: "Robot",
      threads: [
        {
          name: "Meeting 4/20",
          url: "Meeting-4-20",
          description: "This is a thread",
          dateCreated: "Date object",
          lastModified: "Date object",
          numPosts: 3
        },
        {
          name: "Meeting 4/21",
          url: "Meeting-4-21",
          description: "This is a thread 2",
          dateCreated: "Date object",
          lastModified: "Date object",
          numPosts: 3
        }
      ]
    },
    {
      groupName: "Competition",
      threads: [
        {
          name: "League",
          url: "League",
          description: "There is a competition",
          dateCreated: "Date object",
          lastModified: "Date object",
          numPosts: 10
        }
      ]
    }
  ]);

  const groupCards = groups.map((group, index)  => {
    const threads = group.threads.map((thread, index) => {
      return (
        <>
          <ThreadCard>
            <Card.Body>
              <NavLink to={"discussion/" + thread.url} activeStyle>
                <TitleText>
                  {thread.name}
                </TitleText>
              </NavLink>
              <DescriptionText>
                {thread.description}
              </DescriptionText>
            </Card.Body>
          </ThreadCard>
        </>
      );
    });

    return (
      <>
        <Card>
          <Accordion>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              <Card.Body>
                <TitleText>
                  {group.groupName}
                </TitleText>
                <DescriptionText>
                  Number of threads: {group.threads.length}
                </DescriptionText>
              </Card.Body>
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <div>
                {threads}
              </div>
            </Accordion.Collapse>
          </Accordion>
        </Card>
      </>
    );
  });

  return (
    <>
      {groupCards}
    </>
  );
}

export default Cards;
