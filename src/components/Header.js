import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import MenuItems from './MenuItems';

import banner from '../static/banner.png';
import logo from '../static/logo.png';

export default function Header() {
    const [clicked, setClicked] = useState(false);

    function handleClick() {
        setClicked((previousClicked) => !previousClicked);
    }

    return (
        <div className='flex-grow-0 flex-shrink'>
            <div className='max-w-1440 w-full mx-auto flex justify-between h-20 items-center'>
                <img
                    src={banner}
                    alt='#100DaysOfCloud banner'
                    className='h-16 mx-6 2xl:m-0 hidden md:block'
                />
                <img
                    src={logo}
                    alt='#100DaysOfCloud logo'
                    className='h-16 mx-6 2xl:m-0 md:hidden block'
                />
                <div className='md:hidden mx-6 relative'>
                    <button
                        type='button'
                        onClick={handleClick}
                        className='hover:text-gray-600'>
                        <GiHamburgerMenu size={32} />
                    </button>
                    <div
                        className={
                            (clicked ? 'block ' : 'hidden ') +
                            'bg-gray-200 w-48 py-2 mt-4 rounded-lg shadow-md absolute right-0 flex flex-col z-10'
                        }>
                        <MenuItems />
                    </div>
                </div>

                <div className='hidden md:block'>
                    <MenuItems />
                </div>
            </div>
        </div>
    );
}
