import React, { useContext, useEffect, useState } from 'react';
import {  Link, useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const UpdateProfile = () => {
    // const allUser = useLoaderData()
    const { user } = useContext(AuthContext)
    // console.log("all user",allUser);
    
    const {id} = useParams();
    const [dbUser,setDbUser]=useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/users/${user?.email}`)
            .then(res => res.json())
            .then(data => setDbUser(data)
            
            )
    }, [user])
    console.log(dbUser);

    const handleUpdateProfile = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone=form.phone.value;
       
       

        const updatedProfile = {name,phone }
         console.log(updatedProfile);



        // send data to server
        fetch(`http://localhost:5000/users/${id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(updatedProfile)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount > 0){
               
                alert("Update Successfully");
            }
        })
         console.log(updatedProfile);

    }
    return (
        <div className="flex justify-center item-center border px-20 py-8 bg-blue-50">
           
            <div className='w-full'>
            <h2 className='text-3xl font-semibold mb-5 '>Update Profile</h2>
            <form onSubmit={handleUpdateProfile}>
                {/* name and quantity row */}
                <div className='flex flex-col items-center'>
                     <img className='h-[150px] w-[150px] rounded-[50%]' src={user.photoURL} alt="" /> 
                    {/* <FaUserCircle className='h-[100px] w-[100px]' /> */}
                    {/* <input type="file" className="file-input file-input-bordered file-input-sm w-56 mt-3" /> */}
                </div>

                <div className='className="max-w-sm"'>
                    <div className='text-center'>
                    <div className="form-control md:w-1/2 ml-4 mb-8 ">
                        <label className="label">
                            <span className="label-text">Detail Name</span>
                        </label>
                        <label className="input-group">

                    <input type="text" name="name" defaultValue={dbUser?.displayName}   placeholder="name" className="input input-bordered w-full" />
                        </label>

                    </div>

                    <div className="form-control md:w-1/2 ml-4 mb-8">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <label className="input-group">

                    <input type="text" name="phone" defaultValue={dbUser?.phone}   placeholder="phone" className="input input-bordered w-full" />
                        </label>

                    </div>

              <div>
                     
               <Link to="/profile">
               <input type="submit" value="Update Profile" className="btn bg-blue-300" />
               </Link>
                
              </div>
                    </div>
                </div>

            </form>
            </div>
        </div>
    );
};

export default UpdateProfile;