import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "",
    technologies: "",
  });

  const [loading, setLoading] = useState(true);

  // Fetch existing project data
  useEffect(() => {
    fetch(`http://localhost:3000/projects/${id}`)
      .then(res => res.json())
      .then(data => {
        setFormData(data);
        setLoading(false);
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:3000/projects/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    navigate("/dashboard"); // redirect after saving
  };

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-6  dark:bg-slate-900 flex justify-center">
      <div className="bg-slate-50 shadow-2xl rounded-3xl p-10 max-w-xl w-full border border-gray-200  dark:bg-slate-800">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        Update Project
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* NAME */}
          <div>
            <label className="block font-semibold mb-1 dark:text-white">Project Name</label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-300 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block font-semibold mb-1  dark:text-white">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-300 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* DATES */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1  dark:text-white">Start Date</label>
              <input 
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-300 focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block font-semibold mb-1  dark:text-white">End Date</label>
              <input 
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-300 focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* STATUS */}
          <div>
            <label className="block font-semibold mb-1  dark:text-white">Status</label>
            <select 
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-300 focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
              <option value="pending">Pending</option>
            </select>
          </div>

          {/* TECHNOLOGIES */}
          <div>
            <label className="block font-semibold mb-1  dark:text-white">Technologies (comma separated)</label>
            <input 
              type="text"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              placeholder="HTML, CSS, React"
              className="w-full px-4 py-2 border rounded-lg bg-gray-50 dark:bg-gray-300 focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex gap-4 pt-2">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="w-1/2 py-2 border rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600  dark:text-white"
            >
              Cancel
            </button>

            <button 
              type="submit"
              className="w-1/2 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-md transition"
            >
              Save Changes
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default UpdateItem;

