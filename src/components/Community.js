import React from 'react';
import chris from '../static/chris.bmp';
import pic1 from '../static/pic-1.jpg';
import pic2 from '../static/pic-2.jpg';
import pic3 from '../static/pic-3.jpg';
import pic4 from '../static/pic-4.jpg';
import pic5 from '../static/pic-5.jpg';
import pic6 from '../static/pic-6.jpg';

const pictures = [pic1, pic2, pic3, pic4, pic5, pic6];

export default function () {
    return (
        <div className='max-w-1440 mx-auto pb-32'>
            <div className='2xl:w-1/2 w-3/4 2xl:ml-0 ml-10'>
                <h1 className='2xl:text-5xl sm:text-4xl text-3xl pb-12'>
                    You're in good company
                </h1>
            </div>
            <div className='flex flex-col lg:flex-row justify-between 2xl:mx-0 mx-10'>
                <div className='w-full mr-12 lg:pb-0 pb-16 flex flex-col items-stretch'>
                    <p className='leading-loose text-xl pb-6'>
                        Join more than 800 enthusiasts and professionals in the
                        fastest growing cloud community
                    </p>
                    <div className='grid grid-cols-3 grid-rows-2 gap-6'>
                        {pictures.map((pic, index) => {
                            return (
                                <div
                                    className='w-full pt-48 relative overflow-hidden'
                                    key={index}>
                                    <img
                                        className='h-full w-full object-cover object-center absolute inset-0'
                                        src={pic}
                                        alt='Article'
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className='w-full mr-12'>
                    <div className='w-full pt-16x9 relative overflow-hidden'>
                        <img
                            className='h-full w-full object-cover object-center absolute inset-0'
                            src={chris}
                            alt='Article'
                        />
                    </div>
                    <p className='leading-loose pb-4'>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt.
                    </p>
                    <p className='text-xl font-bold'>Chris Nagy</p>
                    <p className='leading-loose text-lg font-bold'>
                        Cloud Engineer @ Nordcloud
                    </p>
                </div>
            </div>
        </div>
    );
}
