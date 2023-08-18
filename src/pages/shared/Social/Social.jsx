import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import saveUser from "../../../api/saveUser";

const Social = () => {
    const { googleSignin } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleGoogleSignin = () => {
        googleSignin()
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                Swal.fire({
                    icon: 'success',
                    title: 'Signup Successfull',
                    text: 'Welcome to Likho',
                })
                saveUser(result.user)
                navigate('/')
            })

            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className="divider"></div>
            <div className="text-center my-2">
                <button onClick={handleGoogleSignin} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default Social;