import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Auth/Login";
import EntrancePage from "./Components/Dashboard/MainPage/EntrancePage";
import AllUsers from "./Components/Dashboard/User/AllUsers";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/dashboard" component={EntrancePage} exact />
          <Route path="/dashboard/users" component={AllUsers} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
