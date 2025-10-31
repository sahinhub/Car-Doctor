import React from 'react';
import Header from '../Shared/Header';
import SliderCarousel from './Slider/SliderCarousel';
import About from './AboutSection/About';
import Service from './ServiceSection/Service';

const Home = () => {
    return (
        <div className='mt-3 mb-10 text-black dark:text-white'>
            <SliderCarousel></SliderCarousel>
            <About></About>
            <Service></Service>
        </div>
    );
};

export default Home;