import React from 'react';

import img1 from '../../../../assets/banner/1.jpg';
import img2 from '../../../../assets/banner/2.jpg';
import img3 from '../../../../assets/banner/3.jpg';
import img4 from '../../../../assets/banner/4.jpg';

const SliderCarousel = () => {
    return (
        <div className="container mx-auto">
            <div className="carousel max-h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src={img1}
                        className="w-full rounded-xl  object-cover object-top" />
                    <div className="absolute text-left top-0 left-0 gap-3 flex w-full h-full flex-col  p-4 bg-linear-to-r from-black/70 to-transparent justify-center rounded-xl ">
                        <div className='space-y-3 max-w-xl'>
                            <h1 className='text-3xl lg:text-5xl font-bold  '>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        </div>
                        <div className='space-x-4'>
                            <button class="btn btn-primary">Discover More</button>
                            <button className="btn btn-outline rounded-lg border-white">Latest Project</button>

                        </div>
                    </div>
                    <div className="absolute bottom-0 right-6 gap-3 flex -translate-y-1/2 transform justify-end">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                     <img
                        src={img2}
                        className="w-full rounded-xl  object-cover object-top" />
                    <div className="absolute text-left top-0 left-0 gap-3 flex w-full h-full flex-col  p-4 bg-linear-to-r from-black/70 to-transparent justify-center rounded-xl ">
                        <div className='space-y-3 max-w-2xl'>
                            <h1 className='text-3xl lg:text-5xl font-bold  '>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        </div>
                        <div className='space-x-4'>
                            <button class="btn btn-primary">Discover More</button>
                            <button className="btn btn-outline rounded-lg border-white">Latest Project</button>

                        </div>
                    </div>
                    <div className="absolute bottom-0 right-6 gap-3 flex -translate-y-1/2 transform justify-end">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src={img3}
                        className="w-full rounded-xl  object-cover object-top" />
                    <div className="absolute text-left top-0 left-0 gap-3 flex w-full h-full flex-col  p-4 bg-linear-to-r from-black/70 to-transparent justify-center rounded-xl ">
                        <div className='space-y-3 max-w-2xl'>
                            <h1 className='text-3xl lg:text-5xl font-bold  '>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        </div>
                        <div className='space-x-4'>
                            <button class="btn btn-primary">Discover More</button>
                            <button className="btn btn-outline rounded-lg border-white">Latest Project</button>

                        </div>
                    </div>
                    <div className="absolute bottom-0 right-6 flex gap-3 -translate-y-1/2 transform justify-end">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src={img4}
                        className="w-full rounded-xl  object-cover object-top" />
                    <div className="absolute text-left top-0 left-0 gap-3 flex w-full h-full flex-col  p-4 bg-linear-to-r from-black/70 to-transparent justify-center rounded-xl ">
                        <div className='space-y-3 max-w-2xl'>
                            <h1 className='text-3xl lg:text-5xl font-bold  '>Affordable Price For Car Servicing</h1>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        </div>
                        <div className='space-x-4'>
                            <button class="btn btn-primary">Discover More</button>
                            <button className="btn btn-outline rounded-lg border-white">Latest Project</button>

                        </div>
                    </div>
                    <div className="absolute bottom-0 right-6 flex -translate-y-1/2 gap-3 transform justify-end">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SliderCarousel;