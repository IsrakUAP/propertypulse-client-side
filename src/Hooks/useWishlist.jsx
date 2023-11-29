import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const useWishlist = () => {
    const {user} = useContext(AuthContext)
    const axioSecure = useAxios();
    const {refetch,data:wishlist = []} = useQuery({
        queryKey: ['wishlist', user?.email],
        queryFn: async () => {
            const res = await axioSecure.get(`/wishlist?email=${user.email}`);
            return res.data;
        }

    })
    return [wishlist,refetch]
};

export default useWishlist;