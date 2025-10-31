import React from 'react';
import img from '../../../assets/login/login.svg'
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { SiFacebook } from 'react-icons/si';
import { FaGithub } from 'react-icons/fa';
const Login = () => {

    const handleLogin = (e) => {
        e.preventDefault()

    }

    return (
        <div className=" max-w-6xl mx-auto min-h-screen py-10">
            <div className="flex gap-5 flex-col items-center lg:flex-row ">
                <div className='flex-1'>
                    <img className='w-[300px]' src={img} alt="" />
                </div>
                <div className="card bg-base-100 flex-1 shrink-0 shadow-2xl justify-center">
                    <h3 className='text-center text-xl'>Login</h3>
                    <form onSubmit={handleLogin} className="fieldset p-5">
                        <label className="label text-lg">Email</label>
                        <input type="email" className="input w-full text-base" placeholder="Email" />
                        <label className="label text-lg">Password</label>
                        <input type="password" className="input w-full text-base" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-primary  mt-4">Login</button>

                         <div className='flex flex-nowrap gap-3 mt-2 justify-center'>
                        <button className='circle-btn p-2 rounded-full bg-black/10 dark:bg-white/10 cursor-pointer'><FcGoogle className='text-xl'></FcGoogle></button>
                        <button className='circle-btn p-2 rounded-full bg-black/10 dark:bg-white/10 cursor-pointer'><SiFacebook className='text-xl text-[#1877F2]'></SiFacebook ></button>
                        <button className='circle-btn p-2 rounded-full bg-black/10 dark:bg-white/10 cursor-pointer'><FaGithub  className='text-xl'></FaGithub ></button>
                    </div>
                        <div className='text-center py-4'><span className='text-base '>Already have an account?</span> <Link to='/signup' className="text-base link-hover">Sign in</Link></div>

                       
                    </form>

                    
                </div>
            </div>
        </div>
    );
};

export default Login;