import React from 'react'

//temporary location of people for team roster
const people = [
  {
    name: 'Darren Collins',
    role: 'Head Mentor',
    quote: '',
    image: '',
  },
  {
    name: 'Avery',
    role: 'Programmer',
    quote: '',
    image: '',
  },
  {
    name: 'Jacob',
    role: 'Lead Designer',
    quote: 'Something epic here',
    image: '',
  },
  {
    name: 'Shane',
    role: 'President',
    quote: '',
    image: '',
  },
];

function TeamRoster() {
  const list = people.map((row, index) => {
    return (
      <dl key={index}>
        <dt>{row.name}</dt>
        <dd>{row.role}</dd>
        <dd>{row.quote}</dd>
        <img src={row.image} alt="personImage"/>
      </dl>
    );
  });
  return (
  <list>
    {list}
  </list>
  );
}

export default TeamRoster;

