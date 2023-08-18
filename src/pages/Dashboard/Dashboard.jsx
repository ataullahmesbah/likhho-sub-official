import React, { useContext } from 'react';
import useAdmin from '../../hooks/useAdmin';
import useUser from '../../hooks/useUser';
import { AuthContext } from '../Providers/AuthProvider';


const Dashboard = () => {

    const {user } = useContext(AuthContext)
    const useAdmins = useAdmin()
    const useUsers = useUser()

    console.log(useAdmins, useUsers, user.email)

    

    return (
        <div>
            {/* {
                useAdmin && useAdmin

                
            }

            {
                useUser && useUser
            } */}
            
        </div>
    );
};

export default Dashboard;