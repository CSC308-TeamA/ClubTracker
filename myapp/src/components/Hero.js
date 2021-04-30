import React from 'react';
import PropTypes from 'prop-types';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Hero({ title, subTitle, text }) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12}>
            { title && <h1 className="display-1 font-weight-bolder">{title}</h1> }
            { subTitle && <h3 className="display-4 font-weight-light">{subTitle}</h3> }
            { text && <h3 className="lead font-weight-light">{text}</h3> }
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Hero;
