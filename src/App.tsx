import React from 'react';
import Container from 'react-bootstrap/Container';
import './App.css';
import Header from './components/Header';
import Vitals from './components/Vitals';

function App() {
  return (
    <Container fluid>
      <Header />
      <Vitals />
    </Container>)
}

export default App;
