import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useAxiosAll from "../../Hooks/useAxiosAll";
import GoogleLogin from "../../Components/GoogleLogin/GoogleLogin";




const Register = () => {
  const axiosAll = useAxiosAll();
  const { register, handleSubmit, reset, formState: { errors } } = useForm()
  const { createUser, updateUser } = useContext(AuthContext)
  const navigate = useNavigate();
  const onSubmit = data => {
    createUser(data.email, data.password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUser(data.name, data.photo)
          .then(() => {

            const userInfo = {
              name: data.name,
              email: data.email
            }
            axiosAll.post('/users', userInfo)
              .then(res => {
                if (res.data.insertedId) {
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Registration Successful",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')

                }
              })

          })
          .catch(error =>
            console.log(error)
          )
      })

  };


  return (
    <div className="w-full lg:w-1/2 mx-auto mt-8">
      <div className="flex flex-col items-center">
        <div className="text-center mb-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-green-400">Please Register</h1>
        </div>
        <div className="card w-full max-w-md shadow-lg bg-white rounded-lg overflow-hidden">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body p-8">
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full px-4 py-3 rounded-md focus:outline-none focus:ring focus:border-primary"
              />
              {errors.name && <span>Your Name is required</span>}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Photo
              </label>
              <input
                type="text"
                {...register("photo", { required: true })}
                name="photo"
                placeholder="PhotoURL"
                className="input input-bordered w-full px-4 py-3 rounded-md focus:outline-none focus:ring focus:border-primary"
              />
              {errors.photo && <span>Photo Url is required</span>}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full px-4 py-3 rounded-md focus:outline-none focus:ring focus:border-primary"
              />
              {errors.email && <span>Your mail is required</span>}
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Password
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/,
                })}
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full px-4 py-3 rounded-md focus:outline-none focus:ring focus:border-primary"
              />
              {errors.password && errors.password.type === "required" && (
                <span>Your password is required</span>
              )}
              {errors.password && errors.password.type === "pattern" && (
                <span>Password must be at least 6 characters long, contain at least one capital letter, and one special character</span>
              )}
            </div>
            <div>
              <input type="submit" className="btn bg-green-400 w-full py-3" value="Register" />
            </div>
          </form>
          <GoogleLogin></GoogleLogin>
          <span className=" text-center mb-3">Have an account?  <Link to="/login" className="text-xl font-medium text-green-500 hover:text-gray-300">Login</Link></span>
        </div>
      </div>
    </div>
  );
};

export default Register;