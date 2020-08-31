import React from 'react';

const IMG_URL =
    'https://images.unsplash.com/photo-1517483000871-1dbf64a6e1c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

export default function Hero() {
    return (
        <div
            className='bg-cover bg-center h-full flex-shrink flex-grow'
            style={{
                backgroundImage: `url(${IMG_URL})`,
            }}
            id='home'></div>
    );
}
