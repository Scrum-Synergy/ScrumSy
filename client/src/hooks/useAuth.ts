import { useState, useEffect } from "react";
import axios from "axios";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAuthenticationStatus = async () => {
      try {
        // Retrieve the JWT token from cookies
        const token = document.cookie.replace(
          /(?:(?:^|.*;\s*)jwt\s*=\s*([^;]*).*$)|^.*$/,
          "$1"
        );

        if (!token) {
          setIsLoading(false);
          return;
        }

        const response = await axios.get(
          `${import.meta.env.VITE_SERVER}/api/auth/status`,
          {
            headers: {
              jwt: token, // Include the token in the 'jwt' header
            },
          }
        );

        if (response.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error("Error fetching authentication status:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAuthenticationStatus();
  }, []);

  return { isAuthenticated, isLoading };
}
