import "./App.css";
import React from "react";
import ClassEditForm from "./components/ClassEditForm";
import ClassAddForm from "./components/ClassAddForm";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  //Private Route is available for all pages within the app.
  return (
    <Router>
      <div className="App">
        <h1>Welcome to Anywhere Fitness!!</h1>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <SignUpPage />
        </Switch>
        </div>
    </Router>
    </div>
  );
}

export default App;
