import "./App.css";
import React from "react";
import ClassEditForm from "./components/ClassEditForm";
import ClassAddForm from "./components/ClassAddForm";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ClassListPage from './components/ClassListPage'
import PrivateRoute from "./utils/privateRoute";


function App() {
  //Private Route is available for all pages within the app.
  return (
    <Router>
      <div className="App">
        <header>
        <h1>Welcome to Anywhere Fitness!!</h1>
        <Link to="/login" className="m-2 btn btn-success">
         Login
      </Link> 
        </header>
        <Switch>
        
          <PrivateRoute  path="/classlist" component={ClassListPage} />
          <Route  path="/addclass" component={ClassAddForm} /> 
          <Route  path="/class/edit/:id" component={ClassEditForm} />
          <Route  path="/login" component={LoginPage} />
        
          <SignUpPage />
        </Switch>
        </div>
    </Router>
    // </div>
  );
}

export default App;
