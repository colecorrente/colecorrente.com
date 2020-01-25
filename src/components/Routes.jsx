import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../screens/HomeScreen';

// const About = (props) => {
//   return <div> All there is to know about me </div>;
// };

// const Test = (props) => {
//   return <div> ID: {props.match.params.id} </div>;
// };

// const FallBack = (props) => {
//   return <div>URL Not Found</div>;
// };

/* <Route path="/about" component={About} />
    <Route exact path="/test/:id" component={Test} />
    <Route component={FallBack} /> */

const Routes = (props) => {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
