import { useContext } from "react";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../pages/Providers/AuthProvider";

const useAdmin = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure()

    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/users/admin/${user?.email}`)
            // console.log('admin response',res)
            return res.data.admin;
            
        }
    })
    console.log('useAdmin response', isAdmin)
    return [isAdmin, isAdminLoading]
};

export default useAdmin;