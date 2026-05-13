import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import UsersTable from "../../components/tables/UsersTable";
import Loader from "../../components/common/Loader";

import { getUsers } from "../../services/userService";

function Users() {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

const usersPerPage = 5;
  const filteredUsers = users.filter((user) =>
  `${user.firstName} ${user.lastName}`
    .toLowerCase()
    .includes(searchTerm.toLowerCase())
);
const totalPages = Math.ceil(
  filteredUsers.length / usersPerPage
);

const startIndex = (currentPage - 1) * usersPerPage;

const paginatedUsers = filteredUsers.slice(
  startIndex,
  startIndex + usersPerPage
);
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const data = await getUsers();

      setUsers(data);
    } catch (err) {
      setError("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      
      <div className="space-y-6">

        <div>
          <h1 className="text-3xl font-bold">
            Users
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all platform users
          </p>
        </div>

        {loading && <Loader />}

        {error && (
          <div className="text-red-500">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
          <div className="bg-white p-4 rounded-2xl shadow-sm">
  
  <input
    type="text"
    placeholder="Search users..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
  />

</div>
          <UsersTable users={paginatedUsers} />
          <div className="flex items-center justify-center gap-3 mt-6">

  <button
    disabled={currentPage === 1}
    onClick={() =>
      setCurrentPage((prev) => prev - 1)
    }
    className="px-4 py-2 bg-black text-white rounded-lg disabled:opacity-50"
  >
    Previous
  </button>

  <span className="font-medium">
    Page {currentPage} of {totalPages}
  </span>

  <button
    disabled={currentPage === totalPages}
    onClick={() =>
      setCurrentPage((prev) => prev + 1)
    }
    className="px-4 py-2 bg-black text-white rounded-lg disabled:opacity-50"
  >
    Next
  </button>

</div>
          </>
        )}

      </div>

    </DashboardLayout>
  );
}

export default Users;