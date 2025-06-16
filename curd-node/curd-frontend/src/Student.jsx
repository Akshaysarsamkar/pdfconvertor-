import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Student = () => {
  const [student, setStudent] = useState([]);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000")
      .then((res) => setStudent(res.data))
      .catch((err) => console.log(err));
  }, []);

  // DELETE DATA
  const handleDelete = async (sid) => {
    try {
      await axios.delete("http://localhost:4000/student/" + sid);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(msg);

  return (
    <div className="flex h-screen bg-blue-100 justify-center items-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-700">Student List</h2>
          <h1></h1>
          <Link
            to="/create"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded transition-all cursor-pointer"
          >
            Add +
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-gray-700 tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {student.map((val) => (
                <Fragment key={val.sid}>
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {val.sname}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800">
                      {val.email}
                    </td>
                    <td className="px-6 py-4 flex gap-2">
                      <Link
                        to={`/update/${val.sid}`}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm cursor-pointer"
                      >
                        Update
                      </Link>
                      <button
                        onClick={() => handleDelete(val.sid)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Student;
