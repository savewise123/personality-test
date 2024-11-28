import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";
import SignupPage from "./pages/SingupPage";
import TestPage from "./pages/TestPage";
import TestResultPage from "./pages/TestResultPage";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProvider from "./components/UserProvider";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route element={<ProtectedRoute />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path="/results" element={<TestResultPage />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
