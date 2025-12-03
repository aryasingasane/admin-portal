// import React, { useState } from "react";
// import useFetch from "../hooks/useFetch";
// import { Link } from "react-router-dom";

// const Items = () => {
//   //fetching the projects data from json server
//   const { data, loading, error } = useFetch("http://localhost:3000/projects");
//   console.log(data);

//   //dynamic search bar
//   const [searchTerm, setSearchTerm] = useState("");
//   // const filteredData = data?.filter((item) =>
//   //   item.name.toLowerCase().includes(searchTerm.toLowerCase())
//   // );

//   //status filter
//   const [statusFilter, setStatusFilter] = useState("all");

//   // independent filtering
//   const filteredData = data?.filter((item) => {
//     if (searchTerm) {
//       return item.name.toLowerCase().includes(searchTerm.toLowerCase());
//     }
//     if (statusFilter !== "all") {
//       return item.status === statusFilter;
//     }
//     return true;
//   });

//   return (
//     <div>
//       <div className="min-h-screen bg-slate-50 px-4 py-8">
//         <div className="mx-auto max-w-6xl">
//           <header className="mb-6">
//             <h1 className="text-3xl font-semibold text-slate-900">Projects</h1>
//             <p className="mt-1 text-sm text-slate-500">
//               Manage and view all the projects.
//             </p>
//           </header>

//           {/* Search + Filter */}
//           <div className="mb-4 flex flex-col gap-3 rounded-xl bg-white px-4 py-4 shadow-sm ring-1 ring-slate-200/70 sm:flex-row sm:items-center sm:justify-between">
//             <div className="flex flex-1 items-center gap-2">
//               <div className="relative flex-1">
//                 <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-slate-400">
//                 <svg
//                   className="h-4 w-4"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15z"
//                   />
//                 </svg>
//               </span>
//                 <input
//                   type="text"
//                   placeholder="Search items..."
//                   className="w-full rounded-xl border border-slate-200 bg-slate-50 pl-9 pr-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm focus:border-indigo-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//               </div>
//               {/* <button className="inline-flex items-center rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
//                 Search
//               </button> */}

//             </div>

//             <div>
//               {/* <button className="inline-flex items-center justify-between gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-indigo-500">
//                 <span>All Status</span>
//                 <svg
//                   className="h-4 w-4 text-slate-400"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M19 9l-7 7-7-7"
//                   />
//                 </svg>
//               </button> */}
//               <select
//               value={statusFilter}
//               onChange={(e) => setStatusFilter(e.target.value)}
//               className="block w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm hover:bg-slate-50 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none"
//             >
//               <option value="all" className="bg-white text-slate-700">All Status</option>
//               <option value="active">Active</option>
//               <option value="inactive">Inactive</option>
//               <option value="pending">Pending</option>

//             </select>
//             </div>
//           </div>

//           {/* Table */}
//           <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-slate-200/80">
//             <table className="min-w-full divide-y divide-slate-200">
//               <thead className="bg-slate-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
//                     Title
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
//                     Status
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
//                     Started
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500">
//                     Ended
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="divide-y divide-slate-100 bg-white">
//                 {/* Add your rows here */}
//                 {/* {data?.map((item) => (
//                   <tr key={item.id} className="hover:bg-slate-50 transition">
//                     <td className="px-6 py-4 text-sm font-medium text-slate-700">
//                       {item.name}
//                     </td> */}

//                 {/* <td className="px-6 py-4 text-sm text-slate-600 capitalize">
//                 {item.status}
//               </td> */}

//                 {/* <td className="px-6 py-4">
//                       <span
//                         className={`px-3 py-1 text-xs font-semibold rounded-full capitalize ${
//                           item.status === "active"
//                             ? "bg-green-100 text-green-700"
//                             : item.status === "pending"
//                             ? "bg-yellow-100 text-yellow-700"
//                             : "bg-red-100 text-red-700"
//                         }`}
//                       >
//                         {item.status}
//                       </span>
//                     </td>

//                     <td className="px-6 py-4 text-sm text-slate-600">
//                       {new Date(item.startDate).toLocaleDateString()}
//                     </td>

//                     <td className="px-6 py-4 text-sm text-slate-600">
//                       {new Date(item.endDate).toLocaleDateString()}
//                     </td>
//                   </tr>
//                 ))} */}

//                 {filteredData?.length > 0 ? (
//                   filteredData.map((item) => (
//                     <tr key={item.id}>
//                       <td className="px-6 py-4 text-sm font-medium">
//                         <Link to={`/item/${item.id}`}className="text-grey-800">{item.name}
//                         </Link>

//                       </td>
//                       <td className="px-6 py-4">
//                         <span
//                           className={`px-3 py-1 text-xs font-semibold rounded-full capitalize ${
//                             item.status === "active"
//                               ? "bg-green-100 text-green-700"
//                               : item.status === "pending"
//                               ? "bg-yellow-100 text-yellow-700"
//                               : "bg-red-100 text-red-700"
//                           }`}
//                         >
//                           {item.status}
//                         </span>
//                       </td>
//                       <td className="px-6 py-4 text-sm">
//                         {new Date(item.startDate).toLocaleDateString()}
//                       </td>
//                       <td className="px-6 py-4 text-sm">
//                         {new Date(item.endDate).toLocaleDateString()}
//                       </td>
//                     </tr>
//                   ))
//                 ) : (
//                   <tr>
//                     <td colSpan="4" className="py-6 text-center text-slate-500">
//                       ❌ No matching results
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Items;

import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";

const Items = () => {
  const { data, loading, error } = useFetch("http://localhost:3000/projects");

  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  // FIXED: Both filters work together now
  const filteredData = data?.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

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
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Manage and view all projects.
          </p>
        </header>

        {/* Search + Filter */}
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
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="block w-full rounded-lg border border-slate-200 dark:border-slate-600 bg-slate-100 dark:bg-slate-700 px-4 py-2 text-sm text-slate-700 dark:text-slate-200 shadow-sm hover:bg-slate-50 dark:hover:bg-slate-600 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-xl bg-slate-50 dark:bg-slate-800 shadow-sm ring-1 ring-slate-200/80 dark:ring-slate-700">
          <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
            <thead className="bg-slate-50 dark:bg-slate-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Started
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Ended
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700 bg-slate-100 dark:bg-slate-800">
              {filteredData?.length > 0 ? (
                filteredData.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-slate-50 dark:hover:bg-slate-700 transition"
                  >
                    <td className="px-6 py-4 text-sm font-medium">
                      <Link
                        to={`/item/${item.id}`}
                        className="no-underline  text-slate-800 dark:text-slate-200 hover:text-slate-900
                        dark:hover:text-slate-100"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 text-xs font-semibold rounded-full capitalize ${
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
                    ❌ No matching results
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Items;
