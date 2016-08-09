import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
        <div>
          <Header />
          <Grid>
            <Row className="show-grid">
              <Col xs={4} md={4}>
                <Menu />
              </Col>
              <Col xs={8} md={8}>
                <Content />
              </Col>
            </Row>
          </Grid>
        </div>
    );
  }
}

export default App;
