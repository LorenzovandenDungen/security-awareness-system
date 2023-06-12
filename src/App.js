import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import EmployeePage from "./pages/EmployeePage";
import CompanyPage from "./pages/CompanyPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/employee" component={EmployeePage} />
        <Route path="/company" component={CompanyPage} />
      </Switch>
    </Router>
  );
}

export default App;
