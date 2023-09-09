import { ChevronRight } from 'lucide-react'
import React from 'react'
import Link from 'next/link'

const Courses = () => {
  const data = [
    {
      cname: 'HTML & CSS',
      cdesc:
        'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      clink: '#',
    },
    {
      cname: 'HTML & CSS',
      cdesc:
        'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      clink: '#',
    },
    {
      cname: 'HTML & CSS',
      cdesc:
        'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      clink: '#',
    },
  ]
  return (
    <div>
      <div className="mx-auto w-[85%] py-5">
        <h1 className="my-5 text-center text-3xl font-bold dark:text-gray-400">
          Learn the best courses worldwide
        </h1>
        <div className="grid gap-3 md:grid-cols-3">
          {data.map((values, index) => (
            <div
              className="my-2 mb-5 max-w-sm rounded-lg border border-gray-200 bg-white shadow-md hover:shadow-2xl dark:border-gray-800 dark:bg-gray-700"
              key={index}
            >
              <div className="p-5">
                <Link href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {values.cname}
                  </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {values.cdesc}
                </p>
                <Link
                  href={values.clink}
                  className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <ChevronRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Courses
