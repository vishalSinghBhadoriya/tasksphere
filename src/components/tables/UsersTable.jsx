
import React from "react";
import Badge from "../common/Badge";
function UsersTable({
  users,
  onEdit,
  onDelete,
}) {
    
  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow-sm">
      
      <table className="w-full text-left">
        
        <thead className="border-b bg-gray-50">
          <tr>
            
            <th className="p-4">Name</th>
            <th className="p-4">Email</th>
            <th className="p-4">Age</th>
            <th className="p-4">Role</th>
            <th className="p-4">Actions</th>
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
               <Badge type="success">
  Active
</Badge>
              </td>
              <td className="p-4 flex gap-2">

  <button
    onClick={() => onEdit(user)}
    className="bg-blue-500 text-white px-3 py-1 rounded-lg"
  >
    Edit
  </button>

  <button
    onClick={() => onDelete(user.id)}
    className="bg-red-500 text-white px-3 py-1 rounded-lg"
  >
    Delete
  </button>

</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}

export default React.memo(UsersTable);