import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';

const PersonalDashboard = () => {


    const { user } = useContext(AuthContext)


    return (
        <div className='bg-[#9aa0a3] p-6 lg:ml-8 shadow-black' style={{width:'1280px', height:'70vh'}}>
            <h1>DashBoard</h1>
            <div className=''>
                <div className=''>
                    <div className='grid lg:grid-cols-3 p-6 '>
                        <p>Document</p>
                        <p>{user.displayName}</p>
                        <p>Document Created</p>
                    </div>

                </div>
                <hr  className='bg-black max-w-full'/>
                <div className='grid lg:grid-cols-3 p-6 '>
                    <p>Document</p>
                    <p>{user.displayName}</p>
                    <p>Document Created</p>
                </div>
                <hr  className='bg-black max-w-full'/>
            </div>
        </div>
    );
};

export default PersonalDashboard;