import {
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";

import DashboardLayout from "../../components/layout/DashboardLayout";

import UsersTable from "../../components/tables/UsersTable";

import Loader from "../../components/common/Loader";

import Modal from "../../components/common/Modal";

import UserForm from "./UserForm";

import useDebounce from "../../hooks/useDebounce";

import { getUsers } from "../../services/userService";

import toast from "react-hot-toast";

const USERS_PER_PAGE = 5;

function Users() {
  const [users, setUsers] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] = useState("");

  const [searchTerm, setSearchTerm] =
    useState("");

  const [currentPage, setCurrentPage] =
    useState(1);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [editingUser, setEditingUser] =
    useState(null);

  // Debounced Search
  const debouncedSearch =
    useDebounce(searchTerm, 500);

  // Fetch Users
  const fetchUsers = useCallback(
    async () => {
      try {
        setLoading(true);

        const data = await getUsers();

        setUsers(data || []);

        setError("");
      } catch (err) {
        setError("Failed to fetch users");

        toast.error(
          "Failed to fetch users"
        );
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // Initial API Call
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  // Reset Pagination On Search
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch]);

  // Filter Users
  const filteredUsers = useMemo(() => {
    return (users || []).filter((user) =>
      `${user.firstName} ${user.lastName}`
        .toLowerCase()
        .includes(
          debouncedSearch.toLowerCase()
        )
    );
  }, [users, debouncedSearch]);

  // Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(
      filteredUsers.length /
        USERS_PER_PAGE
    )
  );

  const startIndex =
    (currentPage - 1) * USERS_PER_PAGE;

  const paginatedUsers =
    filteredUsers.slice(
      startIndex,
      startIndex + USERS_PER_PAGE
    );

  // Add User
  const handleAddUser = (newUser) => {
    setUsers((prev) => [
      newUser,
      ...prev,
    ]);

    setIsModalOpen(false);

    toast.success(
      "User added successfully"
    );
  };

  // Edit User
  const handleEditUser = (
    updatedUser
  ) => {
    setUsers((prev) =>
      prev.map((user) =>
        user.id === updatedUser.id
          ? updatedUser
          : user
      )
    );

    setEditingUser(null);

    setIsModalOpen(false);

    toast.success(
      "User updated successfully"
    );
  };

  // Delete User
  const handleDeleteUser =
    useCallback((id) => {
      setUsers((prev) =>
        prev.filter(
          (user) => user.id !== id
        )
      );

      toast.success(
        "User deleted successfully"
      );
    }, []);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold">
            Users
          </h1>

          <p className="text-gray-500 mt-1">
            Manage all platform users
          </p>
        </div>

        {/* Loading */}
        {loading && <Loader />}

        {/* Error */}
        {error && (
          <div className="text-red-500">
            {error}
          </div>
        )}

        {/* Main Content */}
        {!loading && !error && (
          <>
            
            {/* Search + Add User */}
            <div className="bg-white p-4 rounded-2xl shadow-sm flex flex-col md:flex-row gap-4 md:items-center md:justify-between">

              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search users..."
                  value={searchTerm}
                  onChange={(e) =>
                    setSearchTerm(
                      e.target.value
                    )
                  }
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <button
                onClick={() => {
                  setEditingUser(null);

                  setIsModalOpen(true);
                }}
                className="bg-black text-white px-5 py-3 rounded-xl whitespace-nowrap"
              >
                Add User
              </button>

            </div>

            {/* Empty State */}
            {paginatedUsers.length ===
            0 ? (
              <div className="bg-white p-10 rounded-2xl text-center text-gray-500 shadow-sm">
                No users found
              </div>
            ) : (
              <UsersTable
                users={paginatedUsers}
                onEdit={(user) => {
                  setEditingUser(user);

                  setIsModalOpen(true);
                }}
                onDelete={
                  handleDeleteUser
                }
              />
            )}

            {/* Pagination */}
            <div className="flex items-center justify-center gap-3 mt-6">

              <button
                disabled={
                  currentPage === 1
                }
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.max(prev - 1, 1)
                  )
                }
                className="px-4 py-2 bg-black text-white rounded-lg disabled:opacity-50"
              >
                Previous
              </button>

              <span className="font-medium">
                Page {currentPage} of{" "}
                {totalPages}
              </span>

              <button
                disabled={
                  currentPage ===
                  totalPages
                }
                onClick={() =>
                  setCurrentPage((prev) =>
                    Math.min(
                      prev + 1,
                      totalPages
                    )
                  )
                }
                className="px-4 py-2 bg-black text-white rounded-lg disabled:opacity-50"
              >
                Next
              </button>

            </div>

            {/* Modal */}
            <Modal
              isOpen={isModalOpen}
              onClose={() => {
                setIsModalOpen(false);

                setEditingUser(null);
              }}
              title={
                editingUser
                  ? "Edit User"
                  : "Add User"
              }
            >
              <UserForm
                initialData={
                  editingUser
                }
                onSubmit={
                  editingUser
                    ? handleEditUser
                    : handleAddUser
                }
              />
            </Modal>

          </>
        )}
      </div>
    </DashboardLayout>
  );
}

export default Users;