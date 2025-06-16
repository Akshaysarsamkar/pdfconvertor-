import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateStudent = () => {
  let [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  let [erros, setError] = useState([]);

  let { name, email } = formData;
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:4000/create", { email, name })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((rej) => {
        console.log(rej);
      });
  };

  let handleChange = (e) => {
    let { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  console.log(formData);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Add Student
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter name"
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter email"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition-all shadow-md"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateStudent;
