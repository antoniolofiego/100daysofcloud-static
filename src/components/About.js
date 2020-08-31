import React from 'react';

export default function About() {
    return (
        <div className='max-w-1440 mx-auto pb-32'>
            <div className='2xl:w-1/2 w-3/4 2xl:ml-0 ml-10'>
                <h1 className='2xl:text-4xl sm:text-3xl text-2xl pb-12'>
                    Grow your cloud computing skills in a vibrant group
                </h1>
            </div>
            <div className='flex flex-col md:flex-row justify-between 2xl:mx-0 mx-10 mb-16'>
                <div className='w-full mr-12 md:pb-0 pb-16'>
                    <h2 className='font-bold text-xl pb-8'>
                        Study resources for Cloud Certifications
                    </h2>
                    <p className='leading-loose pb-4'>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt.
                    </p>
                    <button
                        type='button'
                        className='border border-blue-600 text-blue-600 py-4 px-6 rounded-lg hover:bg-blue-100 font-bold'>
                        <a
                            href='https://discord.gg/yd5j27X'
                            target='blank'
                            className='tracking-wide'>
                            Learn more
                        </a>
                    </button>
                </div>
                <div className='w-full mr-12'>
                    <h2 className='font-bold text-xl pb-8'>
                        Real-world projects
                    </h2>
                    <p className='leading-loose pb-4'>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt.
                    </p>
                    <button
                        type='button'
                        className='border border-blue-600 text-blue-600 py-4 px-6 rounded-lg hover:bg-blue-100 font-bold'>
                        <a
                            href='https://discord.gg/yd5j27X'
                            target='blank'
                            className='tracking-wide'>
                            Check them out
                        </a>
                    </button>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between 2xl:mx-0 mx-10'>
                <div className='w-full md:mr-12 md:pb-0 pb-16'>
                    <h2 className='font-bold text-xl pb-8'>
                        Open-Source Platform
                    </h2>
                    <p className='leading-loose pb-4'>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt.
                    </p>
                    <button
                        type='button'
                        className='border border-blue-600 text-blue-600 py-4 px-6 rounded-lg hover:bg-blue-100 font-bold'>
                        <a
                            href='https://discord.gg/yd5j27X'
                            target='blank'
                            className='tracking-wide'>
                            Visit our GitHub
                        </a>
                    </button>
                </div>
                <div className='w-full md:mr-12'>
                    <h2 className='font-bold text-xl pb-8'>
                        360° of cloud contents
                    </h2>
                    <p className='leading-loose pb-4'>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt.
                    </p>
                    <button
                        type='button'
                        className='border border-blue-600 text-blue-600 py-4 px-6 rounded-lg hover:bg-blue-100 font-bold'>
                        <a
                            href='https://discord.gg/yd5j27X'
                            target='blank'
                            className='tracking-wide'>
                            All our content
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
}
