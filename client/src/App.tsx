import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Plans from './pages/Plans/Plans';
import LoadingSpinner from './components/LoadingSpinner';
import axios from 'axios';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAuthenticationStatus = async () => {
      try {
        // Retrieve the JWT token from cookies
        const token = document.cookie.replace(
          /(?:(?:^|.*;\s*)jwt\s*=\s*([^;]*).*$)|^.*$/,
          '$1'
        );
        

        if (!token) {
          setIsLoading(false);
          return;
        }

        const response = await axios.get(`${import.meta.env.VITE_SERVER}/api/auth/status`, {
          headers: {
            jwt: token // Include the token in the 'jwt' header
          }
        });

        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Error fetching authentication status:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAuthenticationStatus();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/plans" element={<Plans />} />
          {/* Protected route for the dashboard */}
          <Route
            path="/dashboard"
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
