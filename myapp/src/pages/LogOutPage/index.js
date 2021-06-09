import React, { useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

function LogOut({ link }) {
  async function logout() {
    try {
      const response = await axios.patch(
        `${link}logout`, { withCredentials: true },
      );
      return response;
    } catch (error) {
      return false;
    }
  }

  useEffect(() => {
    logout();
  }, []);

  return (
    <h1>YOU ARE LOGGED OUT</h1>
  );
}

LogOut.propTypes = {
  link: PropTypes.string.isRequired,
};

export default LogOut;
