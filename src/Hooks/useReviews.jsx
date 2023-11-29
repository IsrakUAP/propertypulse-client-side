import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useReviews = () => {

    const {user} = useContext(AuthContext)
    const axioSecure = useAxios();
    const {refetch,data:reviews = []} = useQuery({
        queryKey: ['review', user?.email],
        queryFn: async () => {
            const res = await axioSecure.get(`/review?email=${user.email}`);
            return res.data;
        }

    })
    return [reviews,refetch]
};

export default useReviews;