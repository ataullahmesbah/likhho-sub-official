import axios, { Axios } from 'axios';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../pages/Providers/AuthProvider';




const axiosSecure = axios.create({
    baseURL: "http://localhost:5173/"
})

const useAxiosSecure = () => {
   
    const navigate = useNavigate()
    const {logout}  = useContext(AuthContext)

    useEffect(()=>{
        
        axiosSecure.interceptors.request.use((config)=>{
            const token = localStorage.getItem('user_secret')
            if(token){
                config.headers.Authorization = `Bearer ${token}`
            }
            return config
        })


        axiosSecure.interceptors.response.use(
            (response)=> response,
            async (error) =>{
                if(error.response && [401, 403].includes(error.response.status)){
                    await logout
                    navigate('/login')
                }
            }
        )

    }, [logout, navigate])

    return [axiosSecure]
}; 

export default useAxiosSecure;