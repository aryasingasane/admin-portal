// // import React from 'react'

// // const Settings = () => {
// //   return (
// //     <div>

// //     </div>
// //   )
// // }

// // export default Settings

// // src/components/ThemeToggle.jsx
// // import { useTheme } from "../context/ThemeContext";

// // const Settings = () => {
// //   const { isDark, toggleTheme } = useTheme();

// //   return (
// //     <>
//     {/* <h2 className="text-black  dark:text-white">Theme:</h2>
//       <button
//         onClick={toggleTheme}
//         className="w-42 h-12 rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all bg-white/80 dark:bg-slate-800/80"
//         style={{ color: isDark ? "#fff" : "#64748b" }}
//       >
//         {isDark ? "☀️Light" : "🌙Dark"}
//       </button> */}
//       {/* <div style={{padding: '40px'}}>
//       <h2 className="text-black dark:text-red-500 text-3xl mb-4">RED TEST</h2>
//       <p>Theme state: {isDark ? 'DARK' : 'LIGHT'}</p>
//       <button 
//         onClick={toggleTheme}
//         className="px-6 py-3 bg-blue-500 text-white rounded-xl"
//       >
//         Toggle ({isDark ? 'Light' : 'Dark'})
//       </button>
//     </div> */}

// {/*     
//     </>
//   );
// };

// export default Settings; */}


// // src/pages/Settings.jsx - ULTIMATE TEST
// import { useEffect } from 'react';

// const Settings = () => {
//   useEffect(() => {
//     console.log('HTML has dark class?', document.documentElement.classList.contains('dark'));
//     console.log('Tailwind CDN loaded?', typeof window.tailwind !== 'undefined');
//   }, []);

//   const testToggle = () => {
//     const html = document.documentElement;
//     html.classList.toggle('dark');
//     console.log('AFTER toggle - dark class?', html.classList.contains('dark'));
//   };

//   return (
//     <div style={{padding: '40px', fontFamily: 'system-ui'}}>
//       <h1 style={{fontSize: '24px', marginBottom: '20px'}}>DEBUG TEST</h1>
      
//       <div style={{padding: '20px', background: 'lightgray', marginBottom: '20px'}}>
//         <h2 style={{fontSize: '32px'}}>STATIC BLACK</h2>
//       </div>
      
//       <div style={{padding: '20px', background: document.documentElement.classList.contains('dark') ? 'black' : 'white', color: 'red'}}>
//         <h2 style={{fontSize: '32px'}}>DYNAMIC RED (JS)</h2>
//         <p>Current: {document.documentElement.classList.contains('dark') ? 'DARK' : 'LIGHT'}</p>
//       </div>
      
//       <div className="p-8 bg-white dark:bg-black text-black dark:text-red-500 text-4xl mb-4">
//         TAILWIND TEST
//       </div>
      
//       <button 
//         onClick={testToggle}
//         style={{padding: '12px 24px', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontSize: '16px'}}
//       >
//         DIRECT TOGGLE (Console F12)
//       </button>
//     </div>
//   );
// };

// export default Settings;


import { useTheme } from "../context/ThemeContext";

const Settings = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 px-6 py-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Settings</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            Manage your application preferences
          </p>
        </div>

        {/* Theme Section */}
        <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                Appearance
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-100">
                Choose your preferred theme
              </p>
            </div>

            <button
              onClick={toggleTheme}
              className="relative w-20 h-10 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800"
              style={{
                backgroundColor: isDark ? "#3b82f6" : "#cbd5e1",
              }}
            >
              <span
                className="absolute top-1 left-1 w-8 h-8 bg-slate-50 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center text-lg"
                style={{
                  transform: isDark ? "translateX(40px)" : "translateX(0)",
                }}
              >
                {isDark ? "🌙" : "☀️"}
              </span>
            </button>
          </div>

          <div className="mt-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Current theme: <span className="font-semibold">{isDark ? "Dark Mode" : "Light Mode"}</span>
            </p>
          </div>
        </div>

        

        {/* Notifications Section */}
        <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
            Notifications
          </h2>
          
          <div className="space-y-3">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-slate-700 dark:text-slate-100">Email notifications</span>
              <input type="checkbox" className="w-5 h-5 rounded text-blue-600 focus:ring-2 focus:ring-blue-500" defaultChecked />
            </label>
            
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-slate-700 dark:text-slate-100">Project updates</span>
              <input type="checkbox" className="w-5 h-5 rounded text-blue-600 focus:ring-2 focus:ring-blue-500" defaultChecked />
            </label>
            
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-slate-700 dark:text-slate-100">System alerts</span>
              <input type="checkbox" className="w-5 h-5 rounded text-blue-600 focus:ring-2 focus:ring-blue-500" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
