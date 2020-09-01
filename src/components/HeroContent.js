import React from 'react';
import { motion } from 'framer-motion';

export default function HeroContent() {
    return (
        <div className='max-w-1440 mx-auto relative'>
            <div className='absolute bottom-0 left-0 mb-48'>
                <motion.div
                    className='w-3/5 2xl:ml-0 ml-10'
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.5,
                    }}>
                    <div
                        className='2xl:text-6xl sm:text-5xl text-3xl pb-12'
                        id='hero-title'>
                        The community for the cloud practitioners
                    </div>
                    <div className='pb-10' id='server-button'>
                        <button
                            type='button'
                            className='text-white bg-blue-700 py-4 px-6 rounded-lg hover:bg-blue-800'>
                            <a
                                href='https://discord.gg/yd5j27X'
                                target='blank'
                                className='tracking-wide'>
                                Join our server
                            </a>
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
