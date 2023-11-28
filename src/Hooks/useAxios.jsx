import axios from "axios";

const axiosProvider = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxios = () => {
    return axiosProvider;
};

export default useAxios;