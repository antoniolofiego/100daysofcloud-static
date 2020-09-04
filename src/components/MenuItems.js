import React from 'react';

export default function MenuItems({ handleClick }) {
    return (
        <div className='flex flex-col md:flex-row mx-6 2xl:m-0 items-center' >
            <a
                className='md:ml-4 md:py-0 py-2 text-center hover:underline text-sm lg:text-lg'
                href='#about'
                onClick={handleClick}>
                About us
            </a>
            <a
                className='md:ml-4 md:py-0 py-2 text-center hover:underline text-sm lg:text-lg'
                href='#community'
                onClick={handleClick}>
                Community
            </a>
            <a
                className='md:ml-4 md:py-0 py-2 text-center hover:underline text-sm lg:text-lg'
                href='#join-us'
                onClick={handleClick}>
                Join us
            </a>
            <a
                className='md:ml-4 md:py-0 py-2 text-center hover:underline text-sm lg:text-lg'
                href='https://docs.google.com/document/d/1usk_eFB6eYL07z5dKANkUCdvnvFzifxjyuwi8Pkyk8A/edit#heading=h.2ijr5mowrhqt' 
                onClick={handleClick}>
                Code of Conduct 
            </a>
        </div>
    );
}
