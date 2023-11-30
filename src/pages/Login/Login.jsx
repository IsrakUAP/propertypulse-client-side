import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import GoogleLogin from "../../Components/GoogleLogin/GoogleLogin";
import { useState } from "react";



const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [errorMessage, setErrorMessage] = useState("");
  const handleLogin = async(e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    try {
      const result = await signIn(email, password);
      const user = result.user;
      console.log(user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login Successful",
        showConfirmButton: false,
        timer: 1500
      });
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Login Error:", error);
      if (error.code === "auth/user-not-found") {
        setErrorMessage("Email not found. Please check your email and try again.");
      } else if (error.code === "auth/wrong-password") {
        setErrorMessage("Incorrect password. Please check your password and try again.");
      } else {
        setErrorMessage("email or password doesn't match Please try again");
      }
    }
  };
  return (
    <div className="w-full lg:w-1/2 mx-auto mt-8">
      <div className="flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-green-400">Please Login</h1>
        </div>
        <div className="card w-full max-w-md shadow-lg bg-white rounded-lg overflow-hidden">
          <form onSubmit={handleLogin} className="card-body p-8">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full px-4 py-3 rounded-md focus:outline-none focus:ring focus:border-primary"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full px-4 py-3 rounded-md focus:outline-none focus:ring focus:border-primary"
                required
              />
            </div>
            <div className="mb-4 text-red-500">{errorMessage}</div>
            <div>
              <input type="submit" className="btn bg-green-400 w-full py-3" value="Login" />
            </div>
          </form>
          <GoogleLogin></GoogleLogin>
          <span className=" text-center my-3">Don't have an account? Create an account  <Link to="/register" className="text-xl font-medium text-green-500 hover:text-gray-300">Register</Link></span>
        </div>
      </div>
      
    </div>



  );
};

export default Login;