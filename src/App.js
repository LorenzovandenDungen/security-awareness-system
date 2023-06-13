// App.js

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import TrainingPage from "./pages/TrainingPage";
import AdminPage from "./pages/AdminPage";
// other imports...

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/training" element={<TrainingPage />} />
        <Route path="/admin" element={<AdminPage />} />
        {/* other routes... */}
      </Routes>
    </Router>
  );
}

export default App;
