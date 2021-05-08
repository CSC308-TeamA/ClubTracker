import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
  H3,
} from './ProfileElements';
import pfp from '../../assets/profiles/pfp2.gif';

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <H3>
          <strong>{currentUser.username}</strong>
          Profile
        </H3>
      </header>
      <img src={pfp} alt="Profile" />
      <p>
        <strong>Token:</strong>
        {currentUser.accessToken.substring(0, 20)}
        ...
        {' '}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong>
        {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong>
        {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles
        && currentUser.roles.map((role) => <li key={role.id}>{role}</li>)}
      </ul>

    </div>
  );
};

export default Profile;
