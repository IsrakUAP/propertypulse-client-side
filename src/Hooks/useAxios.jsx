import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosProvider = axios.create({
    baseURL: 'https://b8a12-server-side-iota.vercel.app'
})
const useAxios = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();
    axiosProvider.interceptors.request.use(function(config){
        const token = localStorage.getItem('token')
        config.headers.authorization = `Bearer ${token}`;
        console.log(token);
        return config;
    }, function(error){
        return Promise.reject(error);
    });
    
    axiosProvider.interceptors.response.use(function(response){
        return response;
    }, async (error) =>{
        const status = error.response.status;
        console.log(status);
        if(status === 401 || status === 403){
            await logOut();
            navigate('/login')
        }
        return Promise.reject(error);
    })
    
    return axiosProvider;
};

export default useAxios;