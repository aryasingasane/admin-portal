import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const ItemDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/update/" + id);
  };

  useEffect(() => {
    console.log("item details useeffect ");
    axios
      .get("http://localhost:3000/projects/" + id)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  // const { data} = useFetch("http://localhost:3000/projects"+id);
  // console.log(data);

  const technologies = data.technologies ? data.technologies.split(", ") : [];

  return (
    <div className="min-h-screen bg-neutral-100  dark:bg-slate-800 px-6 py-10">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header Card */}
        <div className="bg-slate-50  dark:bg-slate-900 p-8 rounded-2xl shadow-sm space-y-4 border border-gray-200">
          <div className="flex justify-between items-center">
            <span
              className={`text-m px-3 py-1 rounded-full text-white ${
                data.status === "active"
                  ? "bg-green-500"
                  : data.status === "inactive"
                  ? "bg-red-500"
                  : data.status === "pending"
                  ? "bg-yellow-500"
                  : "bg-gray-500"
              }`}
            >
              {data.status}
            </span>
            <span className="text-s text-gray-800">ID · {data.id}</span>
            <span
              className="border text-m px-3 py-2 rounded-lg text-black bg-blue-200 cursor-pointer"
              onClick={handleClick}
            >
              Update
            </span>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {data.name}
          </h2>
          <p className="text-gray-600  dark:text-white text-sm leading-relaxed">
            {data.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50  dark:bg-slate-900 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="text-lg text-gray-800 flex items-center gap-2 mb-3">
              <span className="text-lg"><i class="fa-regular fa-calendar"></i></span>
              <span className="font-medium text-gray-900 dark:text-white">
                Timeline
              </span>
            </div>

            <div className="text-m text-gray-700 dark:text-white space-y-2">
              <div className="flex justify-between border-b pb-2">
                <span>Start</span>
                <span>{data.startDate}</span>
              </div>
              <div className="flex justify-between pt-2">
                <span>End</span>
                <span>{data.endDate}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50  dark:bg-slate-900 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="text-lg text-gray-800 flex items-center gap-2 mb-3">
              <span className="text-lg"><i class="fa-solid fa-code"></i></span>
              <span className="font-medium text-gray-900 dark:text-white">
                Tech Stack
              </span>
            </div>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-m border border-gray-300 rounded-lg text-gray-700 dark:text-white bg-gray-50 dark:bg-slate-600 hover:bg-white transition cursor-default select-none"
                  style={{ letterSpacing: "0.3px" }}
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-indigo-400 dark:bg-indigo-900 dark:hover:bg-indigo-600 text-white text-center p-4 rounded-xl shadow-md">
            <div className="text-2xl mb-1"><i class="fa-regular fa-file"></i></div>
            <p className="text-lg">Project</p>
          </div>

          <div className="bg-orange-400 dark:bg-orange-800 text-white text-center p-6 rounded-xl shadow-md">
            <div className="text-2xl mb-1"><i class="fa-regular fa-clock"></i></div>
            <p className="text-lg">
              {Math.round(
                (new Date(data.endDate) - new Date(data.startDate)) /
                  (1000 * 60 * 60 * 24 * 30)
              )}{" "}
              months required
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
