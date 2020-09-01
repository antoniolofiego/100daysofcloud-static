import React from 'react';

export default function CTA() {
    return (
        <div className='max-w-1440 mx-auto pt-32'>
            <div className='flex lg:flex-row flex-col text-center lg:text-left lg:justify-between items-center 2xl:mx-0 mx-10'>
                <h2 className='text-2xl md:w-3/4'>
                    At 100DaysOfCloud we celebrate, encourage, and believe that
                    diversity and inclusion are key factors to a positive and
                    productive community. If you are looking to make your next
                    move in the Cloud space, we would love to have you!
                </h2>
                <button
                    type='button'
                    className='text-white bg-blue-700 py-4 px-6 rounded-lg hover:bg-blue-800 max-w-xs lg:mt-0 mt-12'>
                    <a
                        href='https://discord.gg/yd5j27X'
                        target='blank'
                        className='tracking-wide'>
                        Join our server
                    </a>
                </button>
            </div>
        </div>
    );
}
