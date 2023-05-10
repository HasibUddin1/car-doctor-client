import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const {signIn} = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault()

        const form = event.target
        const email = form.email.value
        const password = form.password.value

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user
            console.log(loggedUser)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row lg:gap-20">
                <div className="w-1/2">
                    <img src={img} alt="" />
                </div>
                <div className="card w-1/2 max-w-xl shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-3xl font-bold text-center'>Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='email' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn bg-orange-500 border-none' type="submit" value="Login" />
                            </div>
                        </form>
                        <h3 className='text-center'>New to Car Doctors? <Link className='text-orange-600 font-bold' to='/signUp' >Please Sign Up</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;