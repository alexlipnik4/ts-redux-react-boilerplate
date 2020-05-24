import React, {useContext} from 'react';
import { AuthContext } from './common/context/AuthContext';

import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Admin from './components/pages/Admin';

import NavBar from './components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './components/Todos';
import PrivateRoute from './common/hocs/PrivateRoute';
import UnPrivateRoute from './common/hocs/UnPrivateRoute';

function App() {
  const { user, setUser, isAuthenticated, setIsAuthenticated} = useContext(AuthContext);

  return (
    <Router>
      <NavBar />
        
      <Route exact path="/" component={Home} />
      <UnPrivateRoute path="/login" component={Login} />
      <UnPrivateRoute path="/Register" component={Register} />
      <PrivateRoute path="/admin" roles={["admin"]} component={Admin} />
      <PrivateRoute path="/todos" roles={["user", "admin"]} component={Todos} />

    </Router>
  );
}

export default App;
