import React from 'react'

const Footer = () => {
  return (
    <div className="dark">
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                <img
                  src="img/BrainWave.png"
                  className="mr-3 h-8"
                  alt="BrainWave Logo"
                />
                <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                  BrainWave
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  Pages
                </h2>
                <ul className="font-medium text-gray-500 dark:text-gray-400">
                  <li>
                    <a href="#" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Courses
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Certificates
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  Resources
                </h2>
                <ul className="font-medium text-gray-500 dark:text-gray-400">
                  <li>
                    <a href="#" className="hover:underline">
                      Firebase
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Next
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      React
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                  Legal
                </h2>
                <ul className="font-medium text-gray-500 dark:text-gray-400">
                  <li>
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
              © 2023{' '}
              <a href="" className="hover:underline">
                BrainWave
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
