import React from 'react';

const IMG_URL =
    'https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

export default function Hero() {
    return (
        <div
            className='w-full h-screen bg-cover bg-center '
            style={{
                backgroundImage: `url(${IMG_URL})`,
            }}>
            <div className='max-w-1440 mx-auto h-screen relative'>
                <div className='absolute bottom-0 left-0 mb-32'>
                    <div className='w-3/5 ml-10'>
                        <h1 className='text-6xl pb-12' id='hero-title'>
                            The community for the cloud practitioners
                        </h1>
                        <div className='pb-10' id='server-button'>
                            <button
                                type='button'
                                className='text-white bg-blue-700 py-4 px-6 rounded-lg hover:bg-blue-800'>
                                <a
                                    href='https://discord.gg/yd5j27X'
                                    target='blank'>
                                    Join our server
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
