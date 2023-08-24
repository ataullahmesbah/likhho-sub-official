import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const PersonalDashboard = () => {


    const { user } = useContext(AuthContext)


    return (
        <div className='bg-[#AFD3E2] p-6 ' style={{width:'800px'}}>
            <h1>DashBoard</h1>
            <div className='grid lg:grid-cols-3 p-6 w-3/4'>
                <div className=''>
                    <div>
                        <p>Document</p>
                        <p>{user.displayName}</p>
                        <p>Document Created</p>
                    </div>
                    {/* <div>

                </div>
                <div></div> */}

                </div>
                <div>
                    <p>Document</p>
                    <p>{user.displayName}</p>
                    <p>Document Created</p>
                </div>
            </div>
        </div>
    );
};

export default PersonalDashboard;