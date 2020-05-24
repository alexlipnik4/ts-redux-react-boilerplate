import React, {useContext} from 'react';
import { AuthContext } from './common/context/AuthContext';

import Home from './components/Home';
import NavBar from './components/Navbar';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Todos from './components/Todos';
import Admin from './components/Admin';
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
