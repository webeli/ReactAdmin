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
          <Content/>
        </div>
    );
  }
}

export default App;
