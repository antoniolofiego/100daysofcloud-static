import React from 'react';

export default function About() {
    return (
        <div className='max-w-1440 mx-auto pt-32'>
            <div className='2xl:w-1/2 w-3/4 2xl:ml-0 ml-10'>
                <h1 className='2xl:text-5xl sm:text-4xl text-3xl pb-16'>
                    Grow your cloud computing skills in a vibrant group
                </h1>
            </div>
            <div className='flex flex-col lg:flex-row justify-between 2xl:mx-0 mx-10 mb-16'>
                <div className='w-full mr-12 lg:pb-0 pb-16'>
                    <h2 className='font-bold text-xl pb-8'>
                        Study resources for Cloud Certifications
                    </h2>
                    <p className='leading-loose pb-4'>
                        Got a question? Join the Discord and ask away. Looking
                        for a way to document your studies? Use our Journey
                        template. Need a study buddy? Join one of our open study
                        rooms.
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
                        Check out our Ideas repo for projects that you can take
                        on. We have guided implementations for every difficulty
                        level. Nothing is better than hands on learning! Have a
                        project you’d like to submit? We love contributions!
                    </p>
                    <button
                        type='button'
                        className='border border-blue-600 text-blue-600 py-4 px-6 rounded-lg hover:bg-blue-100 font-bold'>
                        <a
                            href='https://github.com/100DaysOfCloud/100DaysOfCloudIdeas'
                            target='blank'
                            className='tracking-wide'>
                            Check them out
                        </a>
                    </button>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between 2xl:mx-0 mx-10'>
                <div className='w-full lg:mr-12 lg:pb-0 pb-16'>
                    <h2 className='font-bold text-xl pb-8'>
                        Open-Source Platform
                    </h2>
                    <p className='leading-loose pb-4'>
                        We encourage active participation from the community and
                        truly embrace the Open-Source spirit. No matter where
                        you are in your cloud journey, you’re welcome to
                        contribute.
                    </p>
                    <button
                        type='button'
                        className='border border-blue-600 text-blue-600 py-4 px-6 rounded-lg hover:bg-blue-100 font-bold'>
                        <a
                            href='https://github.com/100DaysOfCloud'
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
                        From virtual machines, to microservices architecture and
                        serverless infrastructures, our community is learning
                        cloud inside and out. Want to learn a specific topic or
                        a range of them? We've got you covered.
                    </p>
                    <button
                        type='button'
                        className='border border-blue-600 text-blue-600 py-4 px-6 rounded-lg hover:bg-blue-100 font-bold'>
                        <a
                            href='https://linktr.ee/100daysofcloud'
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
