import React from 'react';
import useAdmin from '../../hooks/useAdmin';
import useUser from '../../hooks/useUser';

const Dashboard = () => {
    const useAdmin = useAdmin()
    const useUser = useUser()

    

    return (
        <div>
            {
                useAdmin && useAdmin

                
            }

            {
                useUser && useUser
            }
            
        </div>
    );
};

export default Dashboard;