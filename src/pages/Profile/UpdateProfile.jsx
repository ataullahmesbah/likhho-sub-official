import React, { useContext } from 'react';
import {  useLoaderData, useParams } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const UpdateProfile = () => {
    const allUser = useLoaderData()
    const { user } = useContext(AuthContext)
    console.log("all user",allUser)
    const {id} = useParams()

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

    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            
            <form onSubmit={handleUpdateProfile}>
                {/* name and quantity row */}
                
                <div className="form-control md:w-1/2 ml-4 mb-8">
                        <label className="label">
                            <span className="label-text">Detail Name</span>
                        </label>
                        <label className="input-group">

                    <input type="text" name="name" defaultValue={user?.displayName}   placeholder="name" className="input input-bordered w-full" />
                        </label>

                    </div>

                    <div className="form-control md:w-1/2 ml-4 mb-8">
                        <label className="label">
                            <span className="label-text">Phone Number</span>
                        </label>
                        <label className="input-group">

                    <input type="text" name="phone" defaultValue={user?.phoneNumber}   placeholder="phone" className="input input-bordered w-full" />
                        </label>

                    </div>

                   
               

               

                <input type="submit" value="Update Profile" className="btn btn-block btn-secondary" />
                
            </form>
        </div>
    );
};

export default UpdateProfile;
