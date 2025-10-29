import React from 'react';
import person from '../../../../assets/about_us/person.jpg';
import parts from '../../../../assets/about_us/parts.jpg';

const About = () => {
    return (
        <div className='container flex flex-col lg:flex-row gap-5 mx-auto my-10 pb-10 px-3 '>

            <div className='flex-1 relative pr-10'>
                <img className='rounded-xl' src={person} alt="" />
                <img className='w-2/3 absolute -bottom-10 right-0 rounded-xl p-2 bg-white' src={parts} alt="" />
            </div>
            <div className='flex-1 space-y-3'>
                <h4 className='text-xl font-bold text-primary '>About Us</h4>
                <h2 className='text-3xl lg:text-5xl font-bold  '>We are qualified & of experience in this field</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. <br></br>
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
                <button class="btn btn-primary">Get More Info</button>

            </div>

        </div>
    );
};

export default About;