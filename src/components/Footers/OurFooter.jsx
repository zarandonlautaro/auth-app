import React, { Component } from 'react'
import IconGitHub from '../../assets/img/github.svg';
import IconLinkedin from '../../assets/img/linkedin.svg';
import { Container, Row, Col } from 'reactstrap';
export default class OurFooter extends Component {
  render() {
    return (
      <footer color="dark">
        <Container>
          <Row>
            <Col className="text-center">
              Crafted with <span role="img" alt="Love" aria-label="Love">💌</span> by Lautaro Zarandón
            </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <a style={{ padding: '0rem 1rem' }} target="_blank" rel="noopener noreferrer" href="https://github.com/zarandonlautaro">
                <img src={IconGitHub} alt="Git Hub" />
              </a>
              <a style={{ padding: '0rem 1rem' }} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/zarandonlautaro/">
                <img src={IconLinkedin} alt="Linkedin" />
              </a>
            </Col>
          </Row>
        </Container>
      </footer>
    )
  }
}
