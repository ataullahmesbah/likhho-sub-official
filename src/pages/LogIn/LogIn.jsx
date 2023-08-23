import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useContext, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { AuthContext } from '../Providers/AuthProvider';
import Social from '../shared/Social/Social';
import saveUser from '../../api/saveUser';
import Lottie from 'react-lottie';
import animationData from '../../../public/login.json';


const LogIn = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { signinUser } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/'

    const togglePassword = () => {
        setShowPassword(!showPassword)
    }

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        signinUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successfull',
                    text: 'Welcome to Likho',
                })
                saveUser(result.user)
                navigate(from, { replace: true })

            })
            .catch(error => {
                console.log(error.message)
            })
    }


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div className="bg-white">
            <form onSubmit={handleSubmit(onSubmit)} className="hero-content flex-col lg:flex-row md:gap-10 p-0">
                <div className="w-1/2">

                    {/* <img className='h-[300px] w-[400px]' src={loginLogo} alt="" /> */}
                    <Lottie 
                       options={defaultOptions}
                        lg:height={400}
                        lg:width={500}
                    />
                </div>
                <div className="card w-full max-w-sm  border-2">
                    <div className="card-body">
                        <h1 className="text-3xl font-bol">Please Login!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="Type your email" className="input input-bordered rounded-lg bg-white" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ? 'text' : 'password'} {...register("password", { required: true })} placeholder="Type your password" className="input input-bordered rounded-lg bg-white" /><FaEye onClick={togglePassword} className='relative bottom-7 left-64 md:left-72'></FaEye>

                            <label className="label">
                                <Link to="/reset-password" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary rounded-lg bg-blue-500 text-white">Login</button>
                        </div>
                        <p className=''>New to this site? <Link to='/signup' className='text-blue-600 font-semibold'>Signup</Link></p>
                    </div>
                    <Social></Social>
                </div>
            </form>
        </div>
    );
};

export default LogIn;