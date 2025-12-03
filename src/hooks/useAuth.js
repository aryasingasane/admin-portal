import { useState } from 'react';
import useFetch from './useFetch';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { data, loading, error } = useFetch('http://localhost:3000/users');

  const login = (email, password) => {
    const user = data?.find(u => u.email === email && u.password === password);
    
    if (user) {
      setIsAuthenticated(true);
      return { success: true, user };
    }
    return { success: false, error: 'Invalid credentials' };
  };

  return { data, loading, error, isAuthenticated, login };
};

export default useAuth;

