import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../Providers/AuthProvider';
import { Link, useLoaderData } from 'react-router-dom';
// import { useLoaderData } from 'react-router-dom';


const MyProfile = () => {
     const allUser = useLoaderData();

    const { user } = useContext(AuthContext);
    // console.log(user?.email);
    // const {users}=allUser;
     console.log("all User",allUser);
    const { register, handleSubmit } = useForm();
    const [dbUser,setDbUser]=useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/users?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setDbUser(data)
            
            )
    }, [user])
    console.log(dbUser);


    const onSubmit = data => {
        console.log('normal data',data);
        const updateUserInfo = { displayName: data.displayName, email: data.email,phoneNumber: data.phoneNumber };
        console.log(updateUserInfo);
          

        fetch(`http://localhost:5000/users`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUserInfo)
        })
            .then(res => res.json())
            .then(insideData => console.log("insidedata",insideData))
    }


    return (
        <div className='w-full'>
            <h2 className='text-3xl font-semibold mb-5'>My Profile</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="md:flex gap-10">
                <div className='flex flex-col items-center'>
                     <img className='' src={user.photoURL} alt="" /> 
                    {/* <FaUserCircle className='h-[100px] w-[100px]' /> */}
                    <input type="file" className="file-input file-input-bordered file-input-sm w-56 mt-3" />
                </div>

                <div className="max-w-sm">
                    <div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" defaultValue={dbUser.name} {...register("displayName", { required: true })} placeholder='Full Name' className="input input-bordered rounded-lg w-full" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input type="email" defaultValue={user?.email} {...register("email", { required: true })} placeholder="Email Address" className="input input-bordered rounded-lg" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone Number</span>
                            </label>
                            <input type="number" defaultValue={dbUser.phone} {...register("phoneNumber", { required: true })} placeholder="phone number" className="input input-bordered rounded-lg" />
                        </div>

                        <div className="form-control mt-2">
                           <Link 
                             to={`/updateProfile/${dbUser?._id}`}
                           
                           >
                           <button className="btn btn-primary rounded-lg">Edit</button></Link> 
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default MyProfile;