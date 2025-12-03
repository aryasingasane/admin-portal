import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";

const Items = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/projects");

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // Filter logic
  const filteredData = data?.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const totalPages = Math.ceil(filteredData?.length / itemsPerPage);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = filteredData?.slice(indexOfFirst, indexOfLast);

  const goToPage = (page) => setCurrentPage(page);

  const [forcedDelay, setForcedDelay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setForcedDelay(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading || forcedDelay) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">
            Projects
          </h1>
          <p className="mt-1 text-m text-slate-500 dark:text-slate-400">
            Manage and view all projects.
          </p>
        </header>

        <div className="mb-4 flex flex-col gap-3 rounded-xl bg-slate-50 dark:bg-slate-800 px-4 py-4 shadow-sm ring-1 ring-slate-200/70 dark:ring-slate-700 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-2">
            <div className="relative flex-1">
              <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 pl-9 pr-3 py-2.5 text-sm text-slate-900 dark:text-white placeholder-slate-400 shadow-sm focus:border-indigo-500 focus:bg-white dark:focus:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // Reset pagination on search change
                }}
              />
            </div>
          </div>

          <div>
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1); // Reset pagination on filter change
              }}
              className="block w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>

        <div className="overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800 shadow-sm ring-1 ring-slate-200/80 dark:ring-slate-700">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
            <thead className="bg-slate-50 dark:bg-slate-900">
              <tr>
                <th className="px-6 py-3 text-left text-s font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-s font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-s font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Started
                </th>
                <th className="px-6 py-3 text-left text-s font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Ended
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 dark:divide-slate-700 bg-slate-100 dark:bg-slate-800">
              {currentItems?.length > 0 ? (
                currentItems.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50 dark:hover:bg-slate-700 transition"
                  >
                    <td className="px-6 py-4 text-m font-medium">
                      <Link
                        to={`/item/${item.id}`}
                        className="no-underline text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-slate-100"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 text-s font-semibold rounded-full capitalize ${
                          item.status === "active"
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : item.status === "pending"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                            : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                      {new Date(item.startDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">
                      {new Date(item.endDate).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="py-6 text-center text-slate-500 dark:text-slate-400"
                  >
                    No matching results
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {filteredData?.length > 0 && (
          <div className="mt-6 flex justify-center gap-3">
            <button
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
              className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-sm font-bold disabled:opacity-40 dark:text-white"
            >
              Previous
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => goToPage(i + 1)}
                className={`px-4 py-2 rounded-lg text-m font-bold dark:text-white ${
                  currentPage === i + 1
                    ? "bg-indigo-600 text-white"
                    : "bg-slate-200 dark:bg-slate-700"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={currentPage === totalPages}
              onClick={() => goToPage(currentPage + 1)}
              className="px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-500 text-sm font-bold dark:text-white disabled:opacity-40"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Items;

