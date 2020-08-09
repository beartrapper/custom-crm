import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Components/Auth/Login";
import EntrancePage from "./Components/Dashboard/MainPage/EntrancePage";
import AllUsers from "./Components/Dashboard/User/AllUsers";
import AllProducts from "./Components/Dashboard/Products/AllProducts";
import SpecificProducts from "./Components/Dashboard/Products/SpecificPoduct";
import BestCustomers from "./Components/Dashboard/Reports/BestCustomers";
import RevenueByEvent from "./Components/Dashboard/Reports/ReveneuByEvent";
import RevenueByMonth from "./Components/Dashboard/Reports/RevenueByMonth";
import Project from "./Components/Dashboard/Projects/Project";
import CreateNewProject from "./Components/Dashboard/Projects/CreateNewProject";
import AllInvoices from "./Components/Dashboard/Invoice/AllInvoices";
import AllContact from "./Components/Dashboard/Contacts/AllContacts";
import SingleContact from "./Components/Dashboard/Contacts/SingleContact";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/dashboard" component={EntrancePage} exact />
          <Route path="/dashboard/users" component={AllUsers} />
          <Route path="/dashboard/products" component={AllProducts} exact />
          <Route
            path="/dashboard/specific-product"
            component={SpecificProducts}
          />
          <Route path="/dashboard/best-customers" component={BestCustomers} />
          <Route
            path="/dashboard/revenue-by-event"
            component={RevenueByEvent}
          />
          <Route
            path="/dashboard/revenue-by-months"
            component={RevenueByMonth}
          />
          <Route path="/dashboard/project" component={Project} />
          <Route
            path="/dashboard/create-project"
            component={CreateNewProject}
          />
          <Route path="/dashboard/invoices" component={AllInvoices} />
          <Route path="/dashboard/contacts" component={AllContact} />
          <Route path="/dashboard/single-contact" component={SingleContact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
