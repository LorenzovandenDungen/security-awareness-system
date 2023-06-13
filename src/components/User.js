// src/components/Users.js

import React, { useEffect, useContext } from "react";
import axios from "axios";
import { AppContext } from "../contexts/AppContext";

function Users() {
  const { dispatch } = useContext(AppContext);

  useEffect(() => {
    axios.get("/api/users")
      .then(response => {
        dispatch({ type: "SET_USERS", payload: response.data });
      })
      .catch(error => {
        console.error("Error fetching users", error);
      });
  }, [dispatch]);

  // Render your component here

  return <div>Users Component</div>;
}

export default Users;
