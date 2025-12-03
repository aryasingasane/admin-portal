// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// //components and pages
// import NavBar from "./Components/NavBar";
// import Sidebar from "./Components/Sidebar";
// import Items from "./pages/Items";
// import UpdateItem from "./pages/UpdateItem";
// import ItemDetails from "./pages/ItemDetails";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import Settings from "./pages/Settings";
// import { ThemeProvider } from "./context/ThemeContext";

// function App() {
//   return (
//     <>
//       {/* <h1 class="text-4xl font-bold underline">Hello World</h1> */}
//       {/* <NavBar/> */}
//       {/* <Sidebar/> */}
//       <ThemeProvider>
//         <BrowserRouter>
//           <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/login" element={<Login />} />
//           </Routes>
//           <div className="h-screen flex flex-col h-100 bg-slate-150">
//             <NavBar />

//             <div className="flex flex-1">
//               <Sidebar />

//               {/* Main content area */}
//               <main className="flex-1 p-6 overflow-auto">
//                 {/* Put your dashboard cards / content here */}

//                 <Routes>
//                   <Route path="/login" element={<Login />} />
//                   <Route path="/items" element={<Items />} />
//                   <Route path="/update/:id" element={<UpdateItem />} />
//                   <Route path="/item/:id" element={<ItemDetails />} />
//                   <Route path="/dashboard" element={<Dashboard />} />
//                   <Route path="/settings" element={<Settings />} />
//                 </Routes>
//               </main>
//             </div>
//           </div>
//         </BrowserRouter>
//       </ThemeProvider>
//     </>
//   );
// }

// export default App;

// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

// // Components and pages
// import NavBar from "./Components/NavBar";
// import Sidebar from "./Components/Sidebar";
// import Items from "./pages/Items";
// import UpdateItem from "./pages/UpdateItem";
// import ItemDetails from "./pages/ItemDetails";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import Settings from "./pages/Settings";
// import { ThemeProvider } from "./context/ThemeContext";
// import { AuthProvider } from "./context/AuthContext";

// function App() {
//   let [isALoggedIn, setIsLoggedIn] = useState(false);
//   return (
//     <ThemeProvider>
//       <AuthProvider>
//         <BrowserRouter>
//           <Routes>
//             {/* Public routes - NO NavBar/Sidebar */}
//             <Route path="/" element={<Login />} />
//             <Route path="/login" element={<Login />} />

//             {/* Protected routes - WITH NavBar/Sidebar */}
//             <Route
//               path="/*"
//               element={
//                 <div className="h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
//                   <NavBar />
//                   <div className="flex flex-1 overflow-hidden">
//                     <Sidebar />
//                     <main className="flex-1 p-6 overflow-auto bg-slate-50 dark:bg-slate-900">
//                       <Routes>
//                         <Route path="/dashboard" element={<Dashboard />} />
//                         <Route path="/items" element={<Items />} />
//                         <Route path="/update/:id" element={<UpdateItem />} />
//                         <Route path="/item/:id" element={<ItemDetails />} />
//                         <Route path="/settings" element={<Settings />} />
//                         {/* Redirect any unknown route to dashboard */}
//                         <Route
//                           path="*"
//                           element={<Navigate to="/dashboard" replace />}
//                         />
//                       </Routes>
//                     </main>
//                   </div>
//                 </div>
//               }
//             />
//           </Routes>
//         </BrowserRouter>
//       </AuthProvider>
//     </ThemeProvider>
//   );
// }

// export default App;

import { Suspense, lazy } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import NavBar from "./Components/NavBar";
import Sidebar from "./Components/Sidebar";
import ProtectedRoute from "./routes/ProtectedRoute";

import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
import ErrorBoundary from "./Components/ErrorBoundary";

// Lazy loaded pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Items = lazy(() => import("./pages/Items"));
const UpdateItem = lazy(() => import("./pages/UpdateItem"));
const ItemDetails = lazy(() => import("./pages/ItemDetails"));
const Settings = lazy(() => import("./pages/Settings"));
const Login = lazy(() => import("./pages/Login"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Suspense
            fallback={
              <div className="h-screen flex items-center justify-center text-2xl font-semibold text-gray-700 dark:text-gray-100">
                Loading...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />

              <Route
                path="/*"
                element={
                  <ProtectedRoute>
                    <ErrorBoundary>
                      <div className="h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
                        <NavBar />
                        <div className="flex flex-1 overflow-hidden">
                          <Sidebar />

                          <main className="flex-1 p-6 overflow-auto bg-slate-50 dark:bg-slate-900">
                            <Routes>
                              <Route
                                path="/dashboard"
                                element={<Dashboard />}
                              />
                              <Route path="/items" element={<Items />} />
                              <Route path="/settings" element={<Settings />} />
                              <Route
                                path="/item/:id"
                                element={<ItemDetails />}
                              />
                              <Route
                                path="/update/:id"
                                element={<UpdateItem />}
                              />

                              {/* Protected 404 */}
                              <Route path="*" element={<NotFound />} />
                            </Routes>
                          </main>
                        </div>
                      </div>
                    </ErrorBoundary>
                  </ProtectedRoute>
                }
              />

              {/* ---------- Public 404 (for routes like /random before login) ---------- */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
