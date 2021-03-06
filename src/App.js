import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { getSessions } from './services/users';
import LoginPage from './pages/login/LoginPage';
import ExistingUsers from './pages/existingUsers/ExistingUsers';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [valuesLogin, setValuesLogin] = useState(null);
  const [user, setUser] = useState('');

  useEffect(() => {
    if (valuesLogin !== null) {
      fetchLoggedIn();
    }
  }, [valuesLogin]);

  const fetchLoggedIn = () => {
    getSessions()
    .then(response => {
      if (response.success) {
        const userAux = response.sessions.filter(item => item.username === valuesLogin.username && item.password === valuesLogin.password)[0];
        if (userAux !== undefined) {
          setUser(userAux.name);
          setLoggedIn(true);
        }
      }
    });
  }

  const getValuesLoginForm = (values) => {
    setValuesLogin(values);
  }

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={localProps =>
        loggedIn === true ? <Component {...localProps} /> : <Redirect to="/login" />
      }
    />
  );

  const GuestRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={localProps =>
        loggedIn === false ? <Component {...localProps} getValuesLoginForm={getValuesLoginForm}/> : <Redirect to="/existing-users" />
      }
    />
  );

  return (
    <BrowserRouter>
      <Switch>
        <GuestRoute exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/existing-users" component={ExistingUsers} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;