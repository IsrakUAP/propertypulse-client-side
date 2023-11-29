import axios from "axios";

const axiosAll = axios.create({
    baseURL:'http://localhost:5000'
})

const useAxiosAll = () => {
    return axiosAll;
};

export default useAxiosAll;