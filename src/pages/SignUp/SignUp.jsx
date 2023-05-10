import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const SignUp = () => {

    const {createUser} = useContext(AuthContext)

    const handleSignUp = event => {
        event.preventDefault()

        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const password = form.password.value

        console.log(name, email, password)
        createUser(email, password)
        .then(result => {
            const registeredUser = result.user
            console.log(registeredUser)
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
                        <h1 className='text-3xl font-bold text-center'>Sign Up</h1>
                        <form onSubmit={handleSignUp}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
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
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className='btn bg-orange-500 border-none' type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <h3 className='text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to='/login'>Please Login</Link></h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;