'use client'
import { getAuth, signOut } from 'firebase/auth'
import { useEffect, useLayoutEffect, useState } from 'react'
import { Home, GraduationCap, GalleryVerticalEnd, User2 } from 'lucide-react'
import { auth } from '../lib/firebase'
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  const [user, loading, error] = useAuthState(auth)
  const [signInWithGoogle] = useSignInWithGoogle(auth)
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <>
      <div className="dark w-full" style={{ zIndex: '5' }}>
        <nav className="sticky top-0 border-gray-200 bg-white dark:bg-gray-900">
          <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
            <Link href="#" className="flex items-center">
              <img
                src="img/BrainWave.png"
                className="mr-3 h-8"
                alt="BrainWave Logo"
              />
              <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                BrainWave
              </span>
            </Link>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-expanded="false"
              data-drawer-target="drawer-navigation"
              data-drawer-show="drawer-navigation"
              aria-controls="drawer-navigation"
              onClick={handleNav}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            {nav ? (
              // <!-- drawer component -->
              <div
                //   id="drawer-navigation"
                className="fixed left-0 top-0 z-40 h-screen w-64 overflow-y-auto bg-white p-4 transition-transform dark:bg-gray-800"
                style={{ zIndex: '5' }}
                // tabindex="-1"
              >
                <div className="overflow-y-auto pb-4 pt-2">
                  <ul className="space-y-2 font-medium">
                    <li className="mb-5">
                      <Link href="#" className="flex items-center">
                        <img
                          src="img/BrainWave.png"
                          className="mr-3 h-8"
                          alt="BrainWave Logo"
                        />
                        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                          BrainWave
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/"
                        className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        onClick={handleNav}
                      >
                        <Home />
                        <span className="ml-3">Home</span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/courses"
                        className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        onClick={handleNav}
                      >
                        <GraduationCap />
                        <span className="ml-3">Courses</span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/certificates"
                        className="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        onClick={handleNav}
                      >
                        <GalleryVerticalEnd />
                        <span className="ml-3 flex-1 whitespace-nowrap">
                          Certificates
                        </span>
                      </Link>
                    </li>
                    <li>
                      {/* {isAuth ? <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleLogout}> <User2/> Logout</button>
                                                : <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleLogin}> <User2/> Login</button>} */}
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              ''
            )}
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="mt-4 flex flex-col items-center rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
                <li>
                  <Link
                    href="/"
                    className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/courses"
                    className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/certificates"
                    className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                  >
                    Certificates
                  </Link>
                </li>
                <li>
                  {user ? (
                    <button
                      type="button"
                      className="mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
                      onClick={() => auth.signOut()}
                    >
                      Logout
                    </button>
                  ) : (
                    <div className="flex flex-row items-center justify-center">
                      <div>
                        <button
                          type="button"
                          className="mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
                          onClick={() => signInWithGoogle()}
                        >
                          Login with Google
                        </button>
                      </div>
                      <div className="pl-4">
                        <Link
                          className="mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
                          href="/login"
                        >
                          Login with email
                        </Link>
                      </div>
                    </div>
                  )}
                </li>
                <li>
                  {user && (
                    <div className="flex items-center justify-center rounded-full">
                      <a href="/userDetails">
                        <div>
                          <Image
                            src={
                              user.emailVerified
                                ? '/assets/BrainWave.png'
                                : '/assets/user.png'
                            }
                            alt="User photo"
                            height={40}
                            width={40}
                            className="rounded-full"
                          />
                        </div>
                      </a>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}
