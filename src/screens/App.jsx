import React from 'react';
import styled from '@emotion/styled';
import { BrowserRouter as Router } from 'react-router-dom';
// import NavBar from '../components/NavBar';
import Routes from '../components/Routes';

const Container = styled.div`
  display: flex;
  flex:1;
  flex-direction: row;
`;

const App = (props) => {
  return (
    <Router>
      <Container>
        <Routes />
      </Container>
    </Router>
  );
};

export default App;
