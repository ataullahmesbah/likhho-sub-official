

import { Link, useNavigate } from 'react-router-dom';
import loginLogo from '../../assets/Login Image/login.png'
import { useForm } from "react-hook-form";
import { useContext, useState } from 'react';

import Swal from 'sweetalert2';
import { FaEye } from 'react-icons/fa';
import { AuthContext } from '../Providers/AuthProvider';
import Social from '../shared/Social/Social';


const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    const onSubmit = data => {
        console.log(data);

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.photo)
                Swal.fire({
                    icon: 'success',
                    title: 'Signup Successfull',
                    text: 'Welcome to Likho',
                })
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200 my-10 rounded-xl">

            <form onSubmit={handleSubmit(onSubmit)} className="hero-content flex-col lg:flex-row gap-32">
                <div>
                    <img className='h-[300px] w-[400px]' src={loginLogo} alt="" />

                </div>

                <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold">Please Signup!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                            {errors.name && <span className='text-red-500 mt-2'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-500 mt-2'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                pattern: /(?=.*?[A-Z])(?=.*?[#?!@$%^&*-]).{5,}$/
                            })} placeholder="password" className="input input-bordered" />
                            <FaEye onClick={togglePassword} className='relative bottom-7 left-72'></FaEye>

                            {errors.password?.type === 'required' && <span className='text-red-500 mt-2'>This field is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-500 mt-2'>Password must be 6 characters</span>}
                            {errors.password?.type === 'maxLength' && <span className='text-red-500 mt-2'>Password must be Less than 20 characters</span>}
                            {errors.password?.type === 'pattern' && <span className='text-red-500 mt-2'>Password must be one uppercase, one special character</span>}



                            <div>
                                <label className="label mb-3">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                        </div>

                        <div className="form-control ">
                            <button className="btn btn-primary">Signup</button>
                        </div>
                        <p className='mt-2'>Already have an account? <Link to='/login' className='text-blue-600 font-semibold'>Login</Link></p>
                    </div>
                    <Social></Social>
                </div>
            </form>
        </div>
    );
};

export default SignUp;