
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import useAuth from "../../../Hooks/useAuth";

const AdminProfile = () => {
    const {user} = useAuth();
    const axiosSecure = useAxios();
    const { data: users = [] } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
        const res = await axiosSecure.get('/users');
        return res.data;
      }
    });
    console.log(users);
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Admin Profile</h2>
      {user && (
        <div>
          <img
            src={user.photoURL}
            className="mb-4 rounded-full"
            style={{ width: "100px", height: "100px" }}
          />
          <p className="text-gray-600 mb-2">User Name: {user.displayName}</p>
          <p className="text-gray-600 mb-2">Role: Admin</p>
        </div>
      )}
    </div>
  );
};

export default AdminProfile;
