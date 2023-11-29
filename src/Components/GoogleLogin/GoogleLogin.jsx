import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosAll from "../../Hooks/useAxiosAll";


const GoogleLogin = () => {
    const {googleSignIn} = useAuth();
    const axiosAll = useAxiosAll();
    const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
    const handleGoogle = () =>{
        googleSignIn()
        .then(result =>{
            console.log(result);
            const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }
            axiosAll.post('/users',userInfo)
            .then(res=>{
                console.log(res.data);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Login Successful",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate(from, {replace : true});
            })
            
        })

    }
    return (
        <div>
              <div className="form-control">
                        <button onClick={handleGoogle} className="btn  bg-green-500 w-[86%] mx-auto"><img className="h-[30px]" src="https://i.ibb.co/zSC5sQX/7611770-1.png" alt="" /> Google login</button>
                    </div>
        </div>
    );
};

export default GoogleLogin;