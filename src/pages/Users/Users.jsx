import { useEffect, useState } from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import UsersTable from "../../components/tables/UsersTable";
import Loader from "../../components/common/Loader";

import { getUsers } from "../../services/userService";
import Modal from "../../components/common/Modal";
import useDebounce from "../../hooks/useDebounce";
import UserForm from "./UserForm";
import { useMemo } from "react";
import { useCallback } from "react";
import toast from "react-hot-toast";
function Users() {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch =
  useDebounce(searchTerm, 500);
  const [currentPage, setCurrentPage] = useState(1);

const usersPerPage = 5;
const filteredUsers = useMemo(() => {
  return users.filter((user) =>
    `${user.firstName} ${user.lastName}`
      .toLowerCase()
      .includes(
        debouncedSearch.toLowerCase()
      )
  );
}, [users, debouncedSearch]);
const totalPages = Math.ceil(
  filteredUsers.length / usersPerPage
);

const startIndex = (currentPage - 1) * usersPerPage;

const paginatedUsers = filteredUsers.slice(
  startIndex,
  startIndex + usersPerPage
);
const [isModalOpen, setIsModalOpen] =
  useState(false);

const [editingUser, setEditingUser] =
  useState(null);
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
      toast.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };
const handleAddUser = (newUser) => {
  setUsers((prev) => [newUser, ...prev]);

  setIsModalOpen(false);
  toast.success("User added successfully");
};
const handleEditUser = (updatedUser) => {
  setUsers((prev) =>
    prev.map((user) =>
      user.id === updatedUser.id
        ? updatedUser
        : user
    )
  );

  setEditingUser(null);

  setIsModalOpen(false);
  toast.success("User updated successfully");
};
const handleDeleteUser = useCallback((id) => {
  setUsers((prev) =>
    prev.filter((user) => user.id !== id)
  );
  toast.success("User deleted successfully");
}, []);
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
  <div className="flex justify-end">
  
  <button
    onClick={() => {
      setEditingUser(null);

      setIsModalOpen(true);
    }}
    className="bg-black text-white px-5 py-3 rounded-xl"
  >
    Add User
  </button>

</div>
  <input
    type="text"
    placeholder="Search users..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
  />

</div>
          <UsersTable
  users={paginatedUsers}
  onEdit={(user) => {
    setEditingUser(user);

    setIsModalOpen(true);
  }}
  onDelete={handleDeleteUser}
/>
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
<Modal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  title={
    editingUser
      ? "Edit User"
      : "Add User"
  }
>
  
  <UserForm
    initialData={editingUser}
    onSubmit={
      editingUser
        ? handleEditUser
        : handleAddUser
    }
  />

</Modal>
</div>
          </>
        )}

      </div>

    </DashboardLayout>
  );
}

export default Users;