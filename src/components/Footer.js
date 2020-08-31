import React from 'react';
import { FaTwitter, FaDiscord, FaGithub, FaLinkedin } from 'react-icons/fa';

import banner from '../static/banner.png';

export default function Footer() {
    return (
        <div className='w-full text-center p-4 pin-b'>
            <div className='flex justify-center'>
                <img className='h-32' src={banner} alt='#100DaysOfCloud Logo' />
            </div>

            <div className='flex justify-center mt-4'>
                <a
                    href='https://twitter.com/search?q=%23100DaysOfCloud&src=typeahead_click'
                    className='mx-8'>
                    <FaTwitter color='#00ACEE' size='2em' />
                </a>
                <a href='https://github.com/100DaysOfCloud' className='mx-8'>
                    <FaGithub size='2em' />
                </a>
                <a
                    href='https://www.linkedin.com/groups/13884435/'
                    className='mx-8'>
                    <FaLinkedin color=' #0077B5' size='2em' />
                </a>
                <a href='https://discord.gg/yd5j27X' className='mx-8'>
                    <FaDiscord color='#738ADB' size='2em' />
                </a>
            </div>

            <div className='mt-4'>
                Made with
                <span role='img' className='mx-2' aria-label='heart'>
                    ❤️
                </span>
                by{' '}
                <a
                    href='https://twitter.com/antonio_lofiego'
                    target='blank'
                    className='text-blue-700'>
                    Antonio Lo Fiego
                </a>
            </div>
        </div>
    );
}
