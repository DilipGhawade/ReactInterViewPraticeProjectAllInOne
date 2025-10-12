import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginComponent/LoginPage";
import { ProtecteRoute } from "./ProtecteRoute";
import DashboardPage from "./DashboardComponent/DashboardPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dahsboard"
          element={
            <ProtecteRoute>
              <DashboardPage />
            </ProtecteRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
