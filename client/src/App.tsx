import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Plans from './pages/Plans/Plans';
import LoadingSpinner from './components/LoadingSpinner';
import { useAuth } from './hooks/useAuth'; 

function App() {
  const { isAuthenticated, isLoading } = useAuth(); 

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
            element={isAuthenticated ? <Dashboard /> : <Navigate to="/"  />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
