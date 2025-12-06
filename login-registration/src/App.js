import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "../src/Login/LoginPage";
import { ProtectedRoute } from "../src/ProtectedRoutes/ProtectedRoute";
import DahsboardPage from "../src/Dashboard/DahsboardPage";
import RegistrationPage from "../src/Registartion/RegistrationPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<DahsboardPage />} />
        {/* <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DahsboardPage />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </Router>
  );
}

export default App;
