import React from "react";

const Teachers = () => {
  const data = [
    {
      timg: "img/BrainWave.png",
      tname: "Alvin Dsouza",
      tsubj: "Frontend",
      tcour: "#",
    },
    {
        timg: "img/BrainWave.png",
        tname: "Alvin Dsouza",
        tsubj: "Frontend",
        tcour: "#",
      },
      {
        timg: "img/BrainWave.png",
        tname: "Alvin Dsouza",
        tsubj: "Frontend",
        tcour: "#",
      },
      {
        timg: "img/BrainWave.png",
        tname: "Alvin Dsouza",
        tsubj: "Frontend",
        tcour: "#",
      },
  ];
  return (
    <div className="bg-white py-5">
        <div className="w-[85%] mx-auto">
        <h1 className="my-5 text-3xl font-bold text-center dark:text-gray-400">
          Learn from the best worldwide
        </h1>
        <div className="grid md:grid-cols-4 gap-3">
      {data.map((values, index) => (
        <div
          key={index}
          className="w-full my-3 max-w-sm rounded-lg dark:bg-gray-800"
        >
          <div className="flex flex-col items-center pb-10">
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg"
              src={values.timg}
              alt={values.tname}
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
              {values.tname}
            </h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {values.tsubj}
            </span>
            <div className="flex mt-3 space-x-3">
              <a
                href={values.tcour}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
  );
};

export default Teachers;
