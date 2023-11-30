import useAgent from "../../../Hooks/useAgent";
import useAuth from "../../../Hooks/useAuth";


const AgentProfile = () => {
  const { user } = useAuth(); 
  const [isAgent] = useAgent();

  if (!user) {
  
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-4">Agent Profile</h2>
      <div className="flex items-center">
        <img
          src={user.photoURL}
          alt="User"
          className="rounded-full w-16 h-16 mr-4"
        />
        <div>
          <p className="text-xl font-bold">{user.displayName}</p>
          <p className="text-gray-600">Role: Agent</p>
        </div>
      </div>
    </div>
  );
};

export default AgentProfile;
