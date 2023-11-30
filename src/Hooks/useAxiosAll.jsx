import axios from "axios";

const axiosAll = axios.create({
    baseURL:'https://b8a12-server-side-iota.vercel.app'
})

const useAxiosAll = () => {
    return axiosAll;
};

export default useAxiosAll;