import React from 'react';
import { FaTwitter, FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';

import banner from '../static/banner.png';

export default function Footer() {
    return (
        <div className='w-full text-center pin-b pt-32 mb-16'>
            <div className='flex justify-center'>
                <img
                    className='lg:h-24 h-16'
                    src={banner}
                    alt='#100DaysOfCloud Logo'
                />
            </div>

            <div className='flex justify-center mt-4'>
                <a
                    href='https://twitter.com/100DaysCloud'
                    target='blank'
                    className='mx-8'>
                    <FaTwitter color='#00ACEE' size='2em' />
                </a>
                <a
                    href='https://github.com/100DaysOfCloud'
                    target='blank'
                    className='mx-8'>
                    <FaGithub size='2em' />
                </a>
                <a
                    href='https://www.linkedin.com/groups/13884435/'
                    target='blank'
                    className='mx-8'>
                    <FaLinkedin color=' #0077B5' size='2em' />
                </a>
                <a
                    href='https://discord.gg/yd5j27X'
                    target='blank'
                    className='mx-8'>
                    <FaDiscord color='#738ADB' size='2em' />
                </a>
            </div>

            <div className='mt-4'>
                Made with
                <span role='img' className='mx-1' aria-label='heart'>
                    ❤️
                </span>
                by{' '}
                <a
                    href='https://twitter.com/antonio_lofiego'
                    target='blank'
                    className='text-blue-700 hover:underline'>
                    Antonio Lo Fiego
                </a>
            </div>
            <div className='mt-2'>
                Built with React and TailwindCSS, hosted on AWS
            </div>
        </div>
    );
}
