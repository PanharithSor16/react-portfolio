// import React from 'react'
import image1 from "../assets/Image1.svg";
import image from "../assets/Image.svg";
const Project = () => {
  return (
    <section>
      <div className="flex place-content-around">
        <div className="mt-10  text-center w-[80%]">
          <h1 className="text-2xl font-bold text-red-900">Projects</h1>
          <div className=" pb-5">
            <p className=" m-2 font-normal text-xs">
              Subheading that sets up context, shares more info about the
              author, or generally gets people psyched to keep reading
            </p>
          </div>
          <div className=" text-3xl font-semibold flex sm:flex-row flex-col place-content-center ">
            <div className="hover:scale-[1.05] rounded-md border-2 p-10 bg-gradient-to-r sm:mr-3 mt-3 from-cyan-100 hover:to-pink-200  hover:from-cyan-100">
              <h1 className=" hover:scale-125 mb-3 text-red-900 ">10+</h1>
              <h3 className=" hover:scale-125 font-normal text-xs text-cyan-900">
                Project
              </h3>
            </div>
            <div className="hover:scale-[1.1] rounded-md border-2 p-10 sm:mr-3 mt-3 bg-gradient-to-r from-cyan-100 hover:to-blue-200  hover:from-cyan-100">
              <h1 className=" hover:scale-125 mb-3 text-red-900 ">3 +</h1>
              <h3 className=" hover:scale-125 font-normal text-xs text-cyan-900">
                Experince{" "}
              </h3>
            </div>
            <div className=" hover:scale-[1.05]  rounded-md border-2 p-10 mt-3 bg-gradient-to-r from-cyan-100 hover:to-yellow-200  hover:from-cyan-100">
              <h1 className="  hover:scale-125 hover:font-semibold mb-3 text-red-900 ">
                7 +
              </h1>
              <h3 className=" hover:scale-125 font-normal text-xs text-cyan-900">
                Programming
              </h3>
            </div>
          </div>
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
          <div className=" flex sm:flex-row-reverse place-content-between items-start text-start flex-col-reverse space-x-5 m-8 ">
            <div className=" text-start sm:mt-0 mt-2 sm:w-[45%]">
              <h1 className="items-start font-semibold text-2xl pb-3">
                Jart Jearng
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
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
