import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <aside className="h-screen w-54 bg-slate-950 text-slate-100 flex flex-col py-6">
        <nav className="flex flex-col gap-2 px-2">
          <Link
            to="/dashboard"
            className="no-underline w-60  hover:bg-slate-800"
          >
            <button className="flex items-center gap-3 px-4 py-3 text-sm rounded-xl text-slate-200 transition">
              <span className="text-lg"></span>
              <span className="text-lg">Dashboard</span>
            </button>
          </Link>

          <Link to="/items" className="no-underline w-60  hover:bg-slate-800">
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-slate-200 hover:bg-slate-800 transition">
              <span className="text-lg"></span>
              <span className="text-lg">Items</span>
            </button>
          </Link>

          <Link
            to="/settings"
            className="no-underline w-60  hover:bg-slate-800"
          >
            <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm text-slate-200 hover:bg-slate-800 transition ">
              <span className="text-lg"></span>
              <span className="text-lg">Settings</span>
            </button>
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
