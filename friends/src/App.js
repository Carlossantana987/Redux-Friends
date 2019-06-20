import React from "react";
import "./App.css";
import { Route, Link } from "react-router-dom";
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

      <Route exact path="/LoginPage" component={LoginPage} />
    </React.Fragment>
  );
}

export default App;
