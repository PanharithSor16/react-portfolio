// import React from 'react'

const Navbar = () => {
  return (
    <section className=" flex place-content-around">
      <div className="flex flex-col sm:flex-row sm:place-content-between text-center w-[80%] p-5">
        <div className=" font-semibold text-xl text-red-900">Panharith <span className=" text-pink-500">Sor</span></div>
        <div className=" mt-2 sm:mt-0 flex place-content-around text-center space-x-4 font-medium">
          <div> Projects</div>
          <div> About</div>
          <div> Contact</div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
