import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';

function App() {
  const [isSignedIn, setIsSignedIn] = React.useState(false);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsSignedIn={setIsSignedIn} />} />
        <Route path="/dashboard" element={isSignedIn ? <Dashboard /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
