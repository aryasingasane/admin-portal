// // pages/Dashboard.jsx
// import LoadingSpinner from '../Components/LoadingSpinner';
// import useFetch from '../hooks/useFetch';

// const Dashboard = () => {
//   const { data: projects = [], loading } = useFetch('http://localhost:3000/projects');

//   if (loading) return <LoadingSpinner />;

//   // Stats
//   const totalProjects = projects.length;
//   const activeProjects = projects.filter(p => p.status === 'active').length;
//   const inactiveProjects = projects.filter(p => p.status === 'inactive').length;
//   const pendingProjects = projects.filter(p => p.status === 'pending').length;

//   const recentProjects = projects
//     .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
//     .slice(0, 3);

//   const topTechStack = Object.entries(
//     projects.flatMap(p => p.technologies.split(', '))
//       .reduce((acc, tech) => {
//         tech = tech.trim();
//         acc[tech] = (acc[tech] || 0) + 1;
//         return acc;
//       }, {})
//   )
//     .sort((a, b) => b[1] - a[1])
//     .slice(0, 6)
//     .map(([tech, count]) => ({ tech, count }));

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-6">
//       <div className="max-w-6xl mx-auto">

//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-extrabold text-gray-900">Dashboard</h1>
//           <p className="text-lg text-gray-600 mt-1">Project Analytics</p>
//         </div>


//         {/* ---- TOP SECTION: Stats + Tech Badges ---- */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

//           {/* LEFT SIDE: 2x2 Stats */}
//           <div className="grid grid-cols-2 gap-6">

//             {/* Total */}
//             <div className="bg-white rounded-2xl p-6 border shadow-md hover:shadow-lg transition-all">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="w-12 h-12 bg-indigo-200 text-white rounded-xl flex items-center justify-center text-xl">📊</div>
//                 <span className="px-2 py-2 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">Total</span>
//               </div>
//               <p className="text-3xl font-bold">{totalProjects}</p>
//               <p className="text-gray-500 text-m">Projects</p>
//             </div>

//             {/* Active */}
//             <div className="bg-white rounded-2xl p-6 border shadow-md hover:shadow-lg transition-all">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="w-12 h-12 bg-green-200 text-white rounded-xl flex items-center justify-center text-xl">✅</div>
//                 <span className="px-2 py-2 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Active</span>
//               </div>
//               <p className="text-3xl font-bold">{activeProjects}</p>
//               <p className="text-gray-500 text-m">Live</p>
//             </div>

//             {/* Inactive */}
//             <div className="bg-white rounded-2xl p-6 border shadow-md hover:shadow-lg transition-all">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="w-12 h-12 bg-red-300 text-white rounded-xl flex items-center justify-center text-xl">⏸️</div>
//                 <span className="px-2 py-2 bg-red-100 text-red-700 text-xs font-semibold rounded-full">Inactive</span>
//               </div>
//               <p className="text-3xl font-bold">{inactiveProjects}</p>
//               <p className="text-gray-500 text-m">Archived</p>
//             </div>

//             {/* Pending */}
//             <div className="bg-white rounded-2xl p-6 border shadow-md hover:shadow-lg transition-all">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="w-12 h-12 bg-yellow-200 text-white rounded-xl flex items-center justify-center text-xl">⏳</div>
//                 <span className="px-2 py-2 bg-yellow-100 text-yellow-700 text-xs font-semibold rounded-full">Pending</span>
//               </div>
//               <p className="text-3xl font-bold">{pendingProjects}</p>
//               <p className="text-gray-500 text-m">In Queue</p>
//             </div>
//           </div>


//           {/* RIGHT SIDE: Tech Badge Card */}
//           <div className="bg-white rounded-2xl p-8 shadow-xl border">
//             <h2 className="text-xl font-semibold text-gray-900 mb-5 flex items-center gap-2">
//               ⚙️ Tech Stack Usage
//             </h2>

//             <div className="flex flex-wrap gap-3">
//               {topTechStack.map(({ tech, count }, i) => (
//                 <span
//                   key={i}
//                   className="px-3 py-2 bg-slate-100 border border-gray-500 text-m rounded-xl shadow-sm hover:shadow-md transition
//                   hover:bg-white"
//                 >
//                   {tech}
//                   <span className="text-xs opacity-80 ml-2">({count})</span>
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>


//         {/* ---- RECENT PROJECTS ---- */}
//         <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 ">
//           <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center pb-3">
//             Recent Projects
//           </h3>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden"> 
//             {recentProjects.map(project => (
//               <div key={project.id} className="bg-white rounded-xl p-4 border shadow hover:shadow-xl transition cursor-pointer overflow-hidden">
              
//                 <div className="flex justify-between items-center mb-2">
//                   <h4 className="font-semibold text-lg text-gray-900">{project.name}</h4>
//                   <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
//                     project.status === 'active' ? 'bg-green-100 text-green-700' :
//                     project.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
//                     'bg-red-100 text-red-700'
//                   }`}>
//                     {project.status}
//                   </span>
//                 </div>

//                 <p className="text-sm text-gray-600 line-clamp-2 mb-3">
//                   {project.description}
//                 </p>

//                 <p className="text-xs text-gray-400">Started: {project.startDate}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { useState, useEffect } from 'react';
import LoadingSpinner from '../Components/LoadingSpinner';
import useFetch from '../hooks/useFetch';

const Dashboard = () => {
  const { data: projects = [], loading } = useFetch('http://localhost:3000/projects');

  // if (loading) return <LoadingSpinner />;

  const [forcedDelay, setForcedDelay] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setForcedDelay(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading || forcedDelay) return <LoadingSpinner />;

  // Stats
  const totalProjects = projects.length;
  const activeProjects = projects.filter(p => p.status === 'active').length;
  const inactiveProjects = projects.filter(p => p.status === 'inactive').length;
  const pendingProjects = projects.filter(p => p.status === 'pending').length;

  const recentProjects = projects
    .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
    .slice(0, 3);

  const topTechStack = Object.entries(
    projects.flatMap(p => p.technologies.split(', '))
      .reduce((acc, tech) => {
        tech = tech.trim();
        acc[tech] = (acc[tech] || 0) + 1;
        return acc;
      }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([tech, count]) => ({ tech, count }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-6 dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-slate-100">Dashboard</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">Project Analytics</p>
        </div>

        {/* TOP SECTION: Stats + Tech Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

          {/* LEFT SIDE: 2x2 Stats */}
          <div className="grid grid-cols-2 gap-6">

            {/* Total */}
            <div className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border dark:border-slate-700 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-indigo-200 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 rounded-xl flex items-center justify-center text-xl">📊</div>
                <span className="px-2 py-2 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 text-xs font-semibold rounded-full">Total</span>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{totalProjects}</p>
              <p className="text-gray-500 dark:text-gray-400 text-m">Projects</p>
            </div>

            {/* Active */}
            <div className="bg-slate-50  dark:bg-slate-900 rounded-2xl p-6 border dark:border-slate-700 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-200 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-xl flex items-center justify-center text-xl">✅</div>
                <span className="px-2 py-2 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 text-xs font-semibold rounded-full">Active</span>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{activeProjects}</p>
              <p className="text-gray-500 dark:text-gray-400 text-m">Live</p>
            </div>

            {/* Inactive */}
            <div className="bg-slate-50  dark:bg-slate-900 rounded-2xl p-6 border dark:border-slate-700 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-red-300 dark:bg-red-900 text-red-700 dark:text-red-300 rounded-xl flex items-center justify-center text-xl">⏸️</div>
                <span className="px-2 py-2 bg-red-100 dark:bg-red-900/50 text-red-700 dark:text-red-300 text-xs font-semibold rounded-full">Inactive</span>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{inactiveProjects}</p>
              <p className="text-gray-500 dark:text-gray-400 text-m">Archived</p>
            </div>

            {/* Pending */}
            <div className="bg-slate-50  dark:bg-slate-900 rounded-2xl p-6 border dark:border-slate-700 shadow-md hover:shadow-lg transition-all">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-yellow-200 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 rounded-xl flex items-center justify-center text-xl">⏳</div>
                <span className="px-2 py-2 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-700 dark:text-yellow-300 text-xs font-semibold rounded-full">Pending</span>
              </div>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">{pendingProjects}</p>
              <p className="text-gray-500 dark:text-gray-400 text-m">In Queue</p>
            </div>
          </div>

          {/* RIGHT SIDE: Tech Badge Card */}
          <div className="bg-slate-50  dark:bg-slate-800 rounded-2xl p-8 shadow-xl border dark:border-slate-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-5 flex items-center gap-2">
              ⚙️ Tech Stack Usage
            </h2>

            <div className="flex flex-wrap gap-3">
              {topTechStack.map(({ tech, count }, i) => (
                <span
                  key={i}
                  className="px-3 py-2 bg-slate-50 dark:bg-slate-700 border border-gray-300 dark:border-gray-600 text-m rounded-xl shadow-sm hover:shadow-md transition hover:bg-white dark:hover:bg-slate-600 text-gray-800 dark:text-gray-200"
                >
                  {tech}
                  <span className="text-xs opacity-80 ml-2">({count})</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RECENT PROJECTS */}
        <div className="bg-slate-50  dark:bg-slate-800 rounded-3xl shadow-2xl p-10 border border-gray-100 dark:border-slate-700">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center pb-3">
            Recent Projects
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-hidden"> 
            {recentProjects.map(project => (
              <div key={project.id} className="bg-slate-50  dark:bg-slate-700 rounded-xl p-4 border dark:border-slate-600 shadow hover:shadow-xl transition cursor-pointer overflow-hidden">
              
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-lg text-gray-900 dark:text-white">{project.name}</h4>
                  <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'active' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                    project.status === 'pending' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                    'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 mb-3">
                  {project.description}
                </p>

                <p className="text-xs text-gray-400 dark:text-gray-500">Started: {project.startDate}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
