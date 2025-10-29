import React from 'react';
import Header from '../Shared/Header';
import SliderCarousel from './Slider/SliderCarousel';
import About from './AboutSection/About';

const Home = () => {
    return (
        <div className='mt-3 mb-10'>
            <SliderCarousel></SliderCarousel>
            <About></About>
        </div>
    );
};

export default Home;