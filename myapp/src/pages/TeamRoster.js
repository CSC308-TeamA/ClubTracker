import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row } from 'react-bootstrap'
import websiteBanner from '../assets/websiteBanner.jpg'
import Form from '../components/FilterForm'
import AddUserForm from '../components/AddUserForm'
import Roster from '../components/Roster'
import styles from '../styles/TeamRoster.module.css'

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

  async function makePostCall(person) {
    try {
      const response = await axios.post('http://localhost:5000/teamroster', person);
      return response;
    }

    catch (error) {
      console.log(error);
      return false;
    }
  }

  function updateRoster(person) {
    makePostCall(person).then(result => {
      if (result && result.status === 201)
        setCharacters([...characters, result.data]);
    });
  }

  return (
    <div>
      {/* <div className={ styles.header }>
        <div className={ styles.headerBanner }>
          <img src={ websiteBanner } />
        </div>
        <div className={ styles.headerAddMember }>
          <AddUserForm handleSubmit={ updateRoster } />
        </div>
      </div> */}

      <div className={styles.banner}>
        <img src={websiteBanner} />
      </div>

      <AddUserForm handleSubmit={updateRoster} />
      <Form handleSubmit={updatePage} />
      <Roster characterData={characters} />
    </div>
  );
}

export default TeamRoster;
