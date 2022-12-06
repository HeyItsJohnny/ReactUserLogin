import React from "react";
import SignUp from "./SignUp/SignUp";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import ForgotPassword from "./ForgotPassword/ForgotPassword";
import UpdateProfile from "./UpdateProfile/UpdateProfile";
import { Container } from 'react-bootstrap';
import { AuthProvider } from "./Contexts/AuthContext";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from "./PrivateRoute";

function App() {

    return (
      <>
        <Router>
          <AuthProvider> 
            <Container className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
            >
              <div className="w-100" style={{ maxWidth: '400px' }}>
              <Routes>
                <Route exact path="/" element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                } />
                <Route exact path="/updateprofile" element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute>
                } />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgotPassword" element={<ForgotPassword />} />
              </Routes>
              </div>
            </Container>
          </AuthProvider>
        </Router>
      </>
    );
}

export default App;
