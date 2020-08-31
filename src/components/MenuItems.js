import React from 'react';

export default function MenuItems() {
    return (
        <div className='flex flex-col md:flex-row mx-6 2xl:m-0'>
            <a
                className='md:ml-4 md:py-0 py-2 text-center hover:underline text-md lg:text-lg'
                href='#about'>
                About us
            </a>
            <a
                className='md:ml-4 md:py-0 py-2 text-center hover:underline text-md lg:text-lg'
                href='#cloud'>
                Cloud
            </a>
            <a
                className='md:ml-4 md:py-0 py-2 text-center hover:underline text-md lg:text-lg'
                href='#community'>
                Community
            </a>
            <a
                className='md:ml-4 md:py-0 py-2 text-center hover:underline text-md lg:text-lg'
                href='#join-us'>
                Join us
            </a>
        </div>
    );
}
