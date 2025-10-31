import React, { useEffect, useState } from 'react';
import { GoArrowRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

const Service = () => {
    
    const [services,setServices]=useState([]);

    useEffect(()=>{
         fetch('services.json')
         .then(res=>res.json())
         .then(data=>setServices(data))
         
    },[])
    return (
        <div className='container mx-auto flex flex-col gap-5 justify-center items-center my-10 px-3 '>
            <div className='max-w-3xl mx-auto text-center space-y-3'>
                <h4 className='text-xl font-bold text-primary '>Services</h4>
                <h2 className='text-3xl lg:text-5xl font-bold  '>Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>

                {
                    services.map(item=>

                    <div key={item._id} className='p-4 rounded-lg space-y-2.5 border border-black/5 shadow-sm dark:border-white/10'>
                        <img className='rounded-lg h-70 object-cover ' src={item.img} alt={item.title} />
                        <h3 className='text-2xl font-medium'>{item.title}</h3>
                        <div className='inline-flex justify-between items-center w-full'><p className='font-medium text-primary text-lg'>Price: ${item.price}</p>
                        <Link to='/'><GoArrowRight className='text-4xl rounded-full p-2 text-primary bg-primary/5 dark:bg-white/5'></GoArrowRight> </Link> 
                        </div>
                    </div>
                )
                }
                
            </div>

            <button className="btn btn-outline text-primary rounded-lg border-primary hover:bg-primary hover:text-white">More Services</button>

        </div>
    );
};

export default Service;