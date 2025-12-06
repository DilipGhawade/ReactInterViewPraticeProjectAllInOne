import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../src/Login/LoginPage.js";
import RegistrationPage from "../src/Registration/RegistrationPage.js";
import DashboardPage from "../src/Dashboard/DashboardPage.js";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
