
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import LoginForm from './LoginForm';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signin" component={Login} />
        <Route path="/register" component={LoginForm} />
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
