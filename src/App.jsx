import { Suspense, lazy } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

//components
import NavBar from "./Components/NavBar";
import Sidebar from "./Components/Sidebar";
import ProtectedRoute from "./routes/ProtectedRoute";
import ErrorBoundary from "./Components/ErrorBoundary";
//context
import { ThemeProvider } from "./context/ThemeContext";
import { AuthProvider } from "./context/AuthContext";
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
