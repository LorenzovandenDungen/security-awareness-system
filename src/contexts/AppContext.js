// src/contexts/AppContext.js

import React, { createContext, useReducer } from "react";

const initialState = {
  users: [],
  trainings: [],
  // ... other state variables you might need
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, users: action.payload };
    case "SET_TRAININGS":
      return { ...state, trainings: action.payload };
    // ... other actions
    default:
      return state;
  }
}

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
