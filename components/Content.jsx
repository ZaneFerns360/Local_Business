import React from 'react'

export default function Content() {
  return (
    <div>
      <div className="container mx-auto px-5 pt-24">
        <div className="mb-20 flex w-full flex-col flex-wrap items-center text-center">
          <h1 className="title-font mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
            Help Support locals, improve the neighboorhood
          </h1>
          <p className="w-full leading-relaxed text-gray-500 lg:w-1/2"></p>
        </div>
        <div className="-m-4 flex flex-wrap">
          <div className="p-4 md:w-1/2 xl:w-1/3">
            <div className="rounded-lg border border-gray-200 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                Live Feedback
              </h2>
              <p className="text-base leading-relaxed">
                Real time order delivery and status
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/2 xl:w-1/3">
            <div className="rounded-lg border border-gray-200 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                </svg>
              </div>
              <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                Events
              </h2>
              <p className="text-base leading-relaxed">
                Find events across multiple domains
              </p>
            </div>
          </div>
          <div className="p-4 md:w-1/2 xl:w-1/3">
            <div className="rounded-lg border border-gray-200 p-6">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h2 className="title-font mb-2 text-lg font-medium text-gray-900">
                Interact
              </h2>
              <p className="text-base leading-relaxed">
                Feel free to interact with businesses and ask questions.
              </p>
            </div>
          </div>

          <div className="p-4 md:w-1/2 xl:w-1/3"></div>
        </div>
      </div>
    </div>
  )
}
