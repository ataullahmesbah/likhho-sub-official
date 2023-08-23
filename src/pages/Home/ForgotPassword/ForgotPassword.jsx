import React, { useState } from 'react';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import app from '../../../firebase/firebase.config';
import { FaUnlockAlt } from 'react-icons/fa';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async () => {
    const auth = getAuth(app);
    
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Password reset email sent. Please check your inbox.');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className='flex justify-center mt-20 mb-24'>
        <div className='card md:w-1/2 w-2/3 bg-base-200 shadow-xl pt-5'>
      <div className='flex justify-center text-red-500 text-5xl'>
      <FaUnlockAlt></FaUnlockAlt>
      </div>
      <h2 className='text-2xl text-center font-semibold my-3'>Reset Your Password</h2>
      <div className='text-center'>
      <input
      className='md:w-72 px-4 py-2 rounded-md'
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br/>
      <button onClick={handleResetPassword} className='btn bg-blue-500 text-white hover:bg-blue-400 rounded-lg mt-5 '>Reset Password</button>
      <p className='text-green-600 mt-5 mb-10'>{message}</p>
      </div>
    </div>
    </div>
  );
};

export default ForgotPassword;
