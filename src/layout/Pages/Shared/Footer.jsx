import React from 'react';
import logo from './../../../assets/footer_logo.svg'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-black px-3 py-20'>
            <footer className="footer grid-cols-9 py-5 container mx-auto sm:footer-horizontal  text-base-content ">
                <aside className='col-span-3'>
                    <Link to='/'><img src={logo} alt="Car Doctor" /></Link>
                    <p>
                        Edwin Diaz is a software and web technologies engineer, <br></br>a life coach trainer who is also a serial .    
                        </p>
                        
                </aside>
                <nav className='col-span-2'>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className='col-span-2'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='col-span-2'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>

    );
};

export default Footer;