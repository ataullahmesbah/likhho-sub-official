import axios from 'axios';
import React from 'react';

const saveUser = (user) => {
    const currentUser = {
        email: user.email,
        role: "user"
    }

    axios.post(`http://localhost:5000/users/${user.email}`, currentUser)
    .then(data=>{
        console.log(data)
    })
    .catch(error=>{console.log(error.message)})
};

export default saveUser;