import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import websiteBanner from '../../assets/websiteBanner.jpg';
import Filter from '../../components/Filter/index';
import RosterAdminOptions from '../../components/RosterAdminOptions/index';
import Roster from '../../components/Roster';
import Banner from './TeamRosterPageElements';

function TeamRoster({ logInStatus, link }) {
  const [characters, setCharacters] = useState([]);

  async function fetch(field) {
    try {
      let tempLink = `${link}teamroster?`;
      if (field.name !== '') tempLink += `name=${field.name}&`;
      if (field.member_status !== '') tempLink += `member_status=${field.member_status}&`;
      if (field.position !== '') tempLink += `position=${field.position}&`;
      if (field.specialization !== '') tempLink += `specialization=${field.specialization}&`;

      const response = await axios.get(tempLink);
      return response.data;
    } catch (error) {
      return false;
    }
  }

  useEffect(() => {
    fetch({
      name: '',
      member_status: '',
      position: '',
      specialization: '',
    }).then((result) => {
      if (result) setCharacters(result);
    });
  }, []);

  function updatePage(field) {
    fetch(field).then((result) => {
      if (result) setCharacters(result);
    });
  }

  async function makePostCall(person) {
    try {
      const response = await axios.post(`${link}teamroster`, person);
      return response;
    } catch (error) {
      return false;
    }
  }

  function updateRoster(person) {
    makePostCall(person).then((result) => {
      if (result && result.status === 201) {
        setCharacters([...characters, result.data]);
      }
    });
  }

  async function makeDeleteCall(id) {
    try {
      const response = await axios.delete(`${link}teamroster?_id=${id}`);
      return response;
    } catch (error) {
      return false;
    }
  }

  function removeCharacter(id) {
    makeDeleteCall(id).then((result) => {
      if (result && result.status === 201) {
        fetch({
          name: '',
          member_status: '',
          position: '',
          specialization: '',
        }).then((res) => {
          if (res) {
            setCharacters(res);
          }
        });
      }
    });
  }

  return (
    <div>
      <Banner src={websiteBanner} alt="website banner" />
      {logInStatus
        ? (
          <RosterAdminOptions
            handleSubmit={updateRoster}
            characterData={characters}
          />
        )
        : '' }
      <Filter handleSubmit={updatePage} link={link} />
      <Roster
        characterData={characters}
        removeCharacter={removeCharacter}
        link={link}
      />
    </div>
  );
}

TeamRoster.propTypes = {
  logInStatus: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
};

export default TeamRoster;
