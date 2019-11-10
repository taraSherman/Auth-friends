import React from "react";
import { withRouter, Route, Link } from "react-router-dom";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import PrivateRoute from "./components/PrivateRoute";
import { FriendList } from './components/FriendList';
import Login from "./components/Login";
// import "./styles.scss";

function App() {
  const loggedIn = axiosWithAuth();

  return (
    <div className="wrapper">
      <nav>
      {!loggedIn && <Link to='/'>Log In</Link>}
      {loggedIn && <Link to='/friendlist'>My Friends</Link>}
      </nav>

      <Route exact path="/" component={Login} />
      <PrivateRoute exact path="/friends" component={FriendList} />
        {/* 
          Build a PrivateRoute component that will 
          display FriendForm when you're authenticated 
        */}
    </div>
  );
}

export default withRouter(App);
