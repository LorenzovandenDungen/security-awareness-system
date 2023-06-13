// src/pages/AdminPage.js

import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";

function AdminPage() {
  const { state, dispatch } = useContext(AppContext);

  // render your admin page here using the state and dispatch
  // you can dispatch actions to change the state based on user interactions or API calls

  return <div>Admin Page</div>;
}

export default AdminPage;
