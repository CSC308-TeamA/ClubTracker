import React, { useState, useEffect } from 'react';

import UserService from '../services/user.service';

const BoardAdmin = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    UserService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const econtent = (error.response
            && error.response.data
            && error.response.data.message)
            || error.message
            || error.toString();

        setContent(econtent);
      },
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{content}</h3>
        <p>Hello Admin!</p>
      </header>
    </div>
  );
};

export default BoardAdmin;
