import { Check, ChevronRight, Milestone, Star } from 'lucide-react'
import React from 'react'

const CourseSep = () => {
    const data = [
        {
            cimg: 'img/HTML.png',
            cname: 'HTML & CSS',
            cdesc: 'Are you ready to embark on a creative journey into the world of web design? Welcome to "Web Design Fundamentals: HTML & CSS Mastery," a comprehensive course designed to equip you with the essential skills and knowledge needed to create stunning and functional websites from scratch.',
            crank: 4,
            clang: 'English',
            cobj: [
                'Learning HTML (Hypertext Markup Language)',
                'Learning CSS (Cascading Style Sheets)',
                'Responsive Web Design',
                'Web Development Best Practices',
                'Projects and Hands-On Practice',
                'Web Performance and Optimization',
                'HTML5 and CSS3 Features',
            ],
            cont: 'In todays digital age, a strong online presence is crucial for individuals and businesses alike. This course is your gateway to understanding the building blocks of the web – HTML and CSS. Whether you are a complete beginner or have some prior experience, this course will take you from the basics to proficiency in creating visually appealing and responsive websites.',
        },
    ]
    return (
        <div>
            <div className='grid md:grid-cols-3'>
                {
                    data.map((values, index) => (
                        <>
                            <div key={index} className='mx-8 px-4 col-span-2'>
                                <h1 className="my-5 mb-2 text-3xl font-bold dark:text-gray-400">{values.cname}</h1>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{values.cdesc}</p>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg className="w-4 h-4 text-gray-300 mr-1 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{values.crank} out of 5</p>
                                </div>

                                <div className="flex items-center gap-3 my-2">
                                    <Milestone />
                                    <p className=" font-normal text-gray-700 dark:text-gray-400">{values.clang}</p>
                                </div>

                                <h1 className='my-5 mb-2 text-xl font-bold dark:text-gray-400'>Course Objectives</h1>
                                <div className='grid md:grid-cols-2'>
                                    {
                                        values.cobj.map((values, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <Check />
                                                <p className="font-normal text-gray-700 dark:text-gray-400">{values}</p>
                                            </div>
                                        ))}
                                </div>

                                <h1 className='my-5 mb-2 text-xl font-bold dark:text-gray-400'>Course Content</h1>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{values.cont}</p>

                            </div>
                            <div>
                            <img className='h-[75%] my-3 mr-3' src={values.cimg} />
                            <a href='#' className=" w-[30%] flex items-center my-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View Course 
                            <ChevronRight className='pl-2'/>
                            </a>
                            </div>
                        </>
                    ))
                }
            </div>
        </div>
    )
}

export default CourseSep
