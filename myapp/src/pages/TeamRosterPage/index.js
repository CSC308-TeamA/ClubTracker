import React, { useState, useEffect } from 'react';
import axios from 'axios';
import websiteBanner from '../../assets/websiteBanner.jpg';
import Form from '../../components/FilterForm/index';
import AddUserForm from '../../components/AddUserForm/index';
import Roster from '../../components/Roster';
import styles from '../../styles/TeamRoster.module.css';
import Padding from '../../components/Padding';

function TeamRoster() {
  const [characters, setCharacters] = useState([]);

  async function fetch(field) {
    try {
      let link = 'http://localhost:5000/teamroster?';
      if (field.name !== '') link += `name=${field.name}&`;
      if (field.stat !== '') link += `status=${field.stat}&`;
      if (field.role !== '') link += `role=${field.role}&`;
      if (field.posit !== '') link += `position=${field.posit}&`;
      if (field.special !== '') link += `specialization=${field.special}&`;

      const response = await axios.get(link);
      return response.data;
    } catch (error) {
      return false;
    }
  }

  useEffect(() => {
    fetch({
      name: '',
      stat: '',
      role: '',
      posit: '',
      special: '',
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
      const response = await axios.post('http://localhost:5000/teamroster', person);
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
      const response = await axios.delete(`http://localhost:5000/teamroster?_id=${id}`);
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
          stat: '',
          role: '',
          posit: '',
          special: '',
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
      <Padding />
      <div className={styles.banner}>
        <img src={websiteBanner} alt="website banner" />
      </div>

      <AddUserForm handleSubmit={updateRoster} />
      <Form handleSubmit={updatePage} />
      <Roster characterData={characters} removeCharacter={removeCharacter} />
    </div>
  );
}

export default TeamRoster;
