import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import FriendsList from "./components/FriendsList";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        Welcome To your Friends
        <button>
          <Link to="/LoginPage">Login to begin</Link>
        </button>
      </div>

      <Route path="/LoginPage" component={LoginPage} />
      <PrivateRoute exact path="/FriendsList" component={FriendsList} />
    </React.Fragment>
  );
}

export default App;
