import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../context/AuthContext";

const NavBar = () => {
  const { logout, currentUser } = useAuth();
  const userName = currentUser.name;
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="w-full h-16 bg-slate-200 dark:bg-slate-800 border-b dark:border-slate-700 flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-blue-600 dark:bg-blue-500 text-white flex items-center justify-center text-sm font-semibold">
          AP
        </div>
        <span className="text-lg font-semibold text-slate-800 dark:text-slate-100">
          Admin Portal
        </span>
      </div>

      <div className="flex items-center gap-5">
        <span className="text-base font-medium text-xl text-slate-800 dark:text-slate-200">
          <i class="fa-regular fa-circle-user"></i> {userName}
        </span>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-m font-medium text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 bg-slate-300 dark:bg-slate-900 dark:hover:bg-slate-700 transition-colors"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default NavBar;
