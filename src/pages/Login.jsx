// import React, { useState, useEffect } from "react";
// import useAuth from "../hooks/useAuth";
// import { useNavigate } from "react-router-dom";
// import LoadingSpinner from "../Components/LoadingSpinner";

// const Login = () => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [message, setMessage] = useState("");
//     const [isLoading, setIsLoading] = useState(false);

//     const { data, loading, error, isAuthenticated, login } = useAuth();

//     const navigate = useNavigate();

//     useEffect(() => {
//     if (isAuthenticated) {
//       navigate('/dashboard');
//     }
//   }, [isAuthenticated, navigate]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setMessage('');

//     const result = login(username, password);
//     console.log(result);

//     setTimeout(() => {
//       if (result.success) {
//         setMessage('Login successful! Redirecting...');
//         setTimeout(() => {
//           navigate('/dashboard');
//         }, 1500);
//       } else {
//         setMessage(result.error || 'Login failed');
//       }
//       setIsLoading(false);
//     }, 1000);
//   };

//   if (loading) {
//     return <LoadingSpinner/>;
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div className="bg-white shadow-2xl rounded-3xl p-10 transform ">
//           {/* Avatar */}
//           <div className="mx-auto h-20 w-20 rounded-full bg-blue-800 flex items-center justify-center shadow-lg font-bold text-slate-100 text-3xl">
//             <svg
//               className="w-6 h-6 text-slate-100  dark:text-grey-800"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
//               />
//             </svg>
//           </div>

//           <div className="mt-8 space-y-6">
//             <div className="text-center">
//               <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
//               <p className="mt-2 text-sm text-gray-600">
//                 Please sign in to your account
//               </p>
//             </div>

//             {message && (
//               <div className={`p-4 rounded-xl text-sm font-medium text-center ${
//                 message.includes('successful')
//                   ? 'bg-green-100 text-green-800 border border-green-200'
//                   : 'bg-red-100 text-red-800 border border-red-200'
//               }`}>
//                 {message}
//               </div>
//             )}

//             <form className="space-y-6" onSubmit={handleSubmit}>
//               {/* Username Field */}
//               <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all duration-200 hover:shadow-md">
//                 <label
//                   htmlFor="username"
//                   className="block text-s font-medium text-gray-700 mb-1"
//                 >
//                   Username
//                 </label>
//                 <div className="flex items-center">
//                   <input
//                     id="username"
//                     name="username"
//                     type="text"
//                     required
//                     className="placeholder-gray-400 text-gray-900 w-full focus:outline-none text-sm bg-transparent"
//                     placeholder="admin@example.com"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     disabled={isLoading}
//                   />
//                 </div>
//               </div>

//               {/* Password Field */}
//               <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all duration-200 hover:shadow-md">
//                 <label
//                   htmlFor="password"
//                   className="block text-s font-medium text-gray-700 mb-1"
//                 >
//                   Password
//                 </label>
//                 <div className="flex items-center">
//                   <input
//                     id="password"
//                     name="password"
//                     type="password"
//                     required
//                     className="placeholder-gray-400 text-gray-900 w-full focus:outline-none text-sm bg-transparent"
//                     placeholder="admin123"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     disabled={isLoading}
//                   />
//                 </div>
//               </div>

//               {/* Login Button */}
//               <button
//                 type="submit"
//                 disabled={isLoading}
//                 className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-m font-bold rounded-2xl text-slate-100 bg-blue-800 focus:ring-4 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none shadow-xl  hover:shadow-2xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
//               >
//                 {isLoading ? (
//                   <>
//                     <span className="animate-spin mr-3 text-xl">⏳</span>
//                     Logning In...
//                   </>
//                 ) : (
//                   'Login'
//                 )}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../Components/LoadingSpinner";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { loading, isAuthenticated, login } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    const result = await login(username, password);

    setTimeout(() => {
      if (result.success) {
        setMessage("Login successful! Redirecting...");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1500);
      } else {
        setMessage(result.error || "Login failed");
      }
      setIsLoading(false);
    }, 1000);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-white shadow-2xl rounded-3xl p-10 transform ">
          {/* Avatar */}
          <div className="mx-auto h-20 w-20 rounded-full bg-blue-800 flex items-center justify-center shadow-lg font-bold text-slate-100 text-3xl">
            <svg
              className="w-6 h-6 text-slate-100  dark:text-grey-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0 0a8.949 8.949 0 0 0 4.951-1.488A3.987 3.987 0 0 0 13 16h-2a3.987 3.987 0 0 0-3.951 3.512A8.948 8.948 0 0 0 12 21Zm3-11a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
          </div>

          <div className="mt-8 space-y-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
              <p className="mt-2 text-sm text-gray-600">
                Please sign in to your account
              </p>
            </div>

            {message && (
              <div
                className={`p-4 rounded-xl text-sm font-medium text-center ${
                  message.includes("successful")
                    ? "bg-green-100 text-green-800 border border-green-200"
                    : "bg-red-100 text-red-800 border border-red-200"
                }`}
              >
                {message}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Username Field */}
              <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all duration-200 hover:shadow-md">
                <label
                  htmlFor="username"
                  className="block text-s font-medium text-gray-700 mb-1"
                >
                  Username
                </label>
                <div className="flex items-center">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    required
                    className="placeholder-gray-400 text-gray-900 w-full focus:outline-none text-sm bg-transparent"
                    placeholder="admin@example.com"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm px-4 py-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all duration-200 hover:shadow-md">
                <label
                  htmlFor="password"
                  className="block text-s font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <div className="flex items-center">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="placeholder-gray-400 text-gray-900 w-full focus:outline-none text-sm bg-transparent"
                    placeholder="admin123"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="group relative w-full flex justify-center py-4 px-4 border border-transparent text-m font-bold rounded-2xl text-slate-100 bg-blue-800 focus:ring-4 focus:ring-offset-2 focus:ring-blue-500 focus:outline-none shadow-xl  hover:shadow-2xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isLoading ? (
                  <>
                    <span className="animate-spin mr-3 text-xl">⏳</span>
                    Logning In...
                  </>
                ) : (
                  "Login"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
