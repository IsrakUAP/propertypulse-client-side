import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxios from "../../../Hooks/useAxios";

const ManageUsers = () => {
    const axiosSecure = useAxios();
    const { data: users = [], refetch } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
      }
    });
  
    const makeAdmin = (user) => {
      axiosSecure.patch(`/users/admin/${user._id}`)
        .then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${user.name} is an Admin Now!`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        });
    };
  
    const makeAgent = (user) => {
      axiosSecure.patch(`/users/agent/${user._id}`)
        .then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${user.name} is an Agent Now!`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        });
    };
  
    const markAsFraud = (user) => {
      axiosSecure.patch(`/users/${user._id}`)
        .then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: `${user.name} is a Fraud Now!`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        });
    };
  
    const deleteUser = (user) => {
      console.log(user);
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/users/${user._id}`)
            .then((res) => {
              if (res.data.deletedCount > 0) {
                refetch();
                Swal.fire({
                  title: 'Deleted!',
                  text: 'Your file has been deleted.',
                  icon: 'success'
                });
              }
            });
        }
      });
    };
  
    return (
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">Manage Users</h2>
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">User Name</th>
            <th className="py-2 px-4 border-b">User Email</th>
            <th className="py-2 px-4 border-b">Make Admin</th>
            <th className="py-2 px-4 border-b">Make Agent</th>
            <th className="py-2 px-4 border-b">Mark as Fraud</th>
          </tr>
        </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id} className="text-gray-700 text-center">
                <td className="py-2 px-4 border-b">{user.name}</td>
                <td className="py-2 px-4 border-b">{user.email}</td>
                <td className="py-2 px-4 border-b">
                 {user.role === 'admin' ? 'Admin' : <button onClick={() => makeAdmin(user)} className="btn btn-blue">Make Admin</button> }
                </td>
                <td className="py-2 px-4 border-b">
                {user.role === 'agent' ? 'Agent' : <button onClick={() => makeAgent(user)} className="btn btn-green">Make Agent</button>}
                </td>
                {user.role === 'agent' && (
                  <td className="py-2 px-4 border-b">
                    {user.role === 'fraud' ? 'Fraud' : <button onClick={() => markAsFraud(user)} className="btn btn-red">Mark as Fraud</button>}
                  </td>
                )}
                {user.role === 'fraud' && (
                <td className="py-2 px-4 border-b">
                  <button onClick={() => deleteUser(user)} className="btn btn-red">Delete User</button>
                </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ManageUsers;
  