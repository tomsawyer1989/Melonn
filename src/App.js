import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { getSessions } from './services/users';
import LoginPage from './pages/login/LoginPage';
import ExistingUsers from './pages/existingUsers/ExistingUsers';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [valuesLogin, setValuesLogin] = useState(null);
  const [loadingLogin, setLoadingLogin] = useState(false);

  useEffect(() => {
    if (valuesLogin !== null) {
      fetchLoggedIn();
    }
  }, [valuesLogin]);

  const fetchLoggedIn = () => {
    getSessions()
    .then(response => {
      if (response.success) {
        const user = response.sessions.filter(item => item.username === valuesLogin.username && item.password === valuesLogin.password)[0];
        if (user !== undefined) {
          localStorage.setItem('user', user.name);
          setLoggedIn(true);
        }
        else {
          alert('Credenciales incorrectas...');
        }
      }
    });

    setLoadingLogin(false);
  }

  const getValuesLoginForm = (values) => {
    setValuesLogin(values);
    setLoadingLogin(true);
  }

  const logOut = (value) => {
    if (value) {
      setLoggedIn(false);
    }
  }

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={localProps =>
        loggedIn === true ? <Component {...localProps} logOut={logOut}/> : <Redirect to="/login" />
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
    <>
    <BrowserRouter>
      <Switch>
        <GuestRoute exact path="/login" component={LoginPage} />
        <PrivateRoute exact path="/existing-users" component={ExistingUsers} />
        <Redirect to="/login" />
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;