function UsersTable({ users }) {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm">
      
      <table className="w-full text-left">
        
        <thead className="border-b bg-gray-50">
          <tr>
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Age</th>
            <th className="p-4">Role</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-b hover:bg-gray-50"
            >
              <td className="p-4">
                {user.firstName} {user.lastName}
              </td>

              <td className="p-4">
                {user.email}
              </td>

              <td className="p-4">
                {user.age}
              </td>

              <td className="p-4">
                Employee
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default UsersTable;