import { createContext, useContext, useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { data: users, loading, error } = useFetch("http://localhost:3000/users");
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => localStorage.getItem("auth") === "true"
  );
  const [currentUser, setCurrentUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) || null
  );

  const login = (email, password) => {
    const user = users?.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(user);

      localStorage.setItem("auth", "true");
      localStorage.setItem("user", JSON.stringify(user));

      return { success: true };
    }

    return { success: false, error: "Invalid Credentials" };
  };

  const logout = () => {
    setIsAuthenticated(false);
    setCurrentUser(null);
    localStorage.removeItem("auth");
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, loading, error, currentUser, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
