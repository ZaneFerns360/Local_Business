import React from 'react'

const Teachers = () => {
  const data = [
    {
      timg: 'img/BrainWave.jpg',
      tname: 'Alvin Dsouza',
      tsubj: 'Frontend',
      tcour: '#',
    },
    {
      timg: 'img/BrainWave.jpg',
      tname: 'Alvin Dsouza',
      tsubj: 'Frontend',
      tcour: '#',
    },
    {
      timg: 'img/BrainWave.jpg',
      tname: 'Alvin Dsouza',
      tsubj: 'Frontend',
      tcour: '#',
    },
    {
      timg: 'img/BrainWave.jpg',
      tname: 'Alvin Dsouza',
      tsubj: 'Frontend',
      tcour: '#',
    },
  ]
  return (
    <div className="bg-white py-5">
      <div className="mx-auto w-[85%]">
        <h1 className="my-5 text-center text-3xl font-bold dark:text-gray-400">
          Learn from the best worldwide
        </h1>
        <div className="grid gap-3 md:grid-cols-4">
          {data.map((values, index) => (
            <div
              key={index}
              className="my-3 w-full max-w-sm rounded-lg dark:bg-gray-800"
            >
              <div className="flex flex-col items-center pb-10">
                <img
                  className="mb-3 h-24 w-24 rounded-full shadow-lg"
                  src={values.timg}
                  alt={values.tname}
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {values.tname}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {values.tsubj}
                </span>
                <div className="mt-3 flex space-x-3">
                  <a
                    href={values.tcour}
                    className="inline-flex items-center rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    View Courses
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Teachers
