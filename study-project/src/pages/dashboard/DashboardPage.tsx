import { useFetch } from "../../hooks/useFetch";
import { UserResponse } from "../../types/UserResp";
import { useState } from "react";

const DashboardPage = () => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { data, loading, error, refetch } = useFetch<UserResponse>(
    "https://jsonplaceholder.typicode.com/users"
  );

  const handleEdit = (user: UserResponse[0]) => {
    setEditingId(user.id);
    setEditForm({
      name: user.name,
      email: user.email,
      phone: user.phone,
    });
  };

  const handleSave = (id: number) => {
    // In a real app, you would make an API call here
    console.log("Saving:", id, editForm);

    // For demo purposes, we'll just log and exit edit mode
    setEditingId(null);
    // Note: In a real app, you'd update the data or refetch
  };

  const handleCancel = () => {
    setEditingId(null);
  };

  const handleDelete = (id: number) => {
    // In a real app, you would make an API call here
    console.log("Deleting user:", id);

    // For demo, we'll just show a confirmation and refetch
    if (window.confirm("Are you sure you want to delete this user?")) {
      // Simulate delete
      refetch();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading users...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600 text-lg">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">User Dashboard</h1>
          <p className="mt-2 text-gray-600">Manage your users with ease</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Stats Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5 1.947a8 8 0 00-16 0"
                      />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Total Users
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        {data?.length || 0}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Active Emails
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        {data?.length || 0}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">
                        Companies
                      </dt>
                      <dd className="text-lg font-medium text-gray-900">
                        {data?.length || 0}
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Users
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Personal details and contact information.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Username
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Phone
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Address
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Company
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data?.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {user.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {editingId === user.id ? (
                          <input
                            type="text"
                            name="name"
                            value={editForm.name}
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 border rounded"
                          />
                        ) : (
                          user.name
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        @{user.username}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {editingId === user.id ? (
                          <input
                            type="email"
                            name="email"
                            value={editForm.email}
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 border rounded"
                          />
                        ) : (
                          user.email
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {editingId === user.id ? (
                          <input
                            type="text"
                            name="phone"
                            value={editForm.phone}
                            onChange={handleInputChange}
                            className="w-full px-2 py-1 border rounded"
                          />
                        ) : (
                          user.phone
                        )}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {user.address.street}, {user.address.city}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {user.company.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {editingId === user.id ? (
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleSave(user.id)}
                              className="text-green-600 hover:text-green-900 px-2 py-1 rounded hover:bg-green-50"
                            >
                              Save
                            </button>
                            <button
                              onClick={handleCancel}
                              className="text-gray-600 hover:text-gray-900 px-2 py-1 rounded hover:bg-gray-100"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleEdit(user)}
                              className="text-indigo-600 hover:text-indigo-900 px-2 py-1 rounded hover:bg-indigo-50"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(user.id)}
                              className="text-red-600 hover:text-red-900 px-2 py-1 rounded hover:bg-red-50"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Table Footer */}
            <div className="bg-gray-50 px-4 py-3 sm:px-6">
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Showing <span className="font-medium">1</span> to{" "}
                  <span className="font-medium">{data?.length || 0}</span> of{" "}
                  <span className="font-medium">{data?.length || 0}</span>{" "}
                  results
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-sm text-gray-500">
                © 2024 User Dashboard. All rights reserved.
              </div>
              <div className="mt-2 md:mt-0">
                <nav className="flex space-x-4">
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900"
                  >
                    Contact
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;
