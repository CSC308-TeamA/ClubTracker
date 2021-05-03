import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';

function Layout({ children }) {
  return (
    <Container>
      {children}
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
