import React, { useContext } from 'react';
import { AuthContext } from '../pages/Providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from 'react-query';

const useUser = () => {
   const {user} = useContext(AuthContext)
   const [axiosSecure ] = useAxiosSecure()
    const [data] = useQuery({
        queryKey:['isUser', user.email],
        queryFn: async()=>{
            const res = axiosSecure.get('')
        }
    })

};

export default useUser;