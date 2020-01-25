import React, { Component } from 'react';
import styled from '@emotion/styled';
import { Icon, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import COLEpng from '../img/COLE.png';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  height: 100vh;
  width: 200px;
  background-color: green;
`;

const COLEImg = styled.img`
  height: auto;
  width: 90%;
  padding: 5% 0;
`;

export default class NavBar extends Component {
  // handleContextRef = contextRef => this.setState({ contextRef })
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    // const { activeItem } = this.state;
    // const { children } = this.props;
    // const { contextRef } = this.state;

    return (
      <Container>
        <COLEImg alt="COLE" src={COLEpng} />
        <div className="nav-group nav-group-left">
          <NavLink to="/" exact>
            <Icon name="github" />
          </NavLink>

          <NavLink to="/about">About</NavLink>
          <NavLink to="/test/id1">test id1</NavLink>
          <NavLink to="/test/id2">test id2</NavLink>
        </div>
        <div className="nav-group">
          <NavLink to="/" exact>
                COLE
            <Icon name="plus" />
          </NavLink>
        </div>
        <div className="nav-group nav-group-right">
          <NavLink to="/" exact>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/test/id1">test id1</NavLink>
          <NavLink to="/test/id2">test id2</NavLink>
        </div>
      </Container>
    );
  }
}
