import React from 'react';
import './Styles.css';
import SignInForm from './components/Form/SignInForm';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Welcome from "./pages/welcome"
import { ProtectedRoute } from "./routes/protected.route";

function App() {
  return (
    <Router>
      <div className="container-fluid App">
        <Switch>
          <Route path="/" exact component={SignInForm} />
          <ProtectedRoute exact path="/welcome" component={Welcome} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
