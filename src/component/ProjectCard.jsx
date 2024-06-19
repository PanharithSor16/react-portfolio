import React from 'react'

const ProjectCard = () => {
  return (
    <div className=" flex sm:flex-row place-content-around  space-x-5 m-8 flex-col-reverse">
            <div className=" text-start sm:mt-0 mt-2 sm:w-[45%]">
              <h1 className="items-start font-semibold text-2xl pb-3">
                Promokh
              </h1>
              <p>
                A subheading for this section, as long or as short as you like
              </p>
              <div className=" font-semibold">
                <button className=" bg-sky-500 rounded-md p-2 mt-3">
                  <a className=" text-red-100" href="https://github.com/">
                    Source
                  </a>
                </button>
                <button className=" bg-sky-500 rounded-md p-2 mt-3 ml-3">
                  <a className=" text-yellow-100" href="https://github.com/">
                    Demo
                  </a>
                </button>
                <button className=" bg-sky-500 rounded-md p-2 mt-3 ml-3">
                  <a className=" text-pink-100" href="https://github.com/">
                    details
                  </a>
                </button>
              </div>
            </div>
            <div className=" sm:mt-2 sm:w-[45%]">
              <img src={image1} alt="" />
            </div>
          </div>
  )
}

export default ProjectCard