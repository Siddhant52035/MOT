import React from "react";

const Hospitals = () => {
  return (
    <main>
      <section>
        <div className="bg-gradient-to-b from-[#dee3e6] to-[#699dbf]  w-[97%] mx-auto rounded-xl my-4 flex">
          <div className="w-[78%] ps-4 pt-6">
            <h1 className="font-bold text-7xl text-[#0d6199]">MOT</h1>
            <p className="font-medium text-2xl pt-4 text-justify w-[90%] leading-relaxed">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
              cumque dolorum explicabo aliquid nesciunt dolores repellendus,
              eligendi maxime quam eveniet eius ea, veritatis, sit magni. Natus
              aliquid debitis amet nostrum.
            </p>
          </div>
          <div className="w-[20%]">
            <img
              src="/assets/Nepal.png"
              alt="img"
              className="object-contain h-auto"
            />
          </div>
        </div>
      </section>
      <section className="w-[95%] mx-auto flex">
        <div className="w-[50%] flex">
          <div className="bg-black rounded-full h-11 w-11 flex justify-center items-center">
            <img
              src="/assets/Information.png"
              alt="img"
              className="object-contain h-auto"
            />
          </div>
          <h1>Information</h1>
        </div>
        <div className="w-[50%] flex">
          <div className="bg-black rounded-full h-11 w-11 flex justify-center items-center ">
            <img
              src="/assets/Vector.png"
              alt="img"
              className="object-contain h-auto "
            />
          </div>{" "}
          <h1>Available Equipments</h1>
        </div>
      </section>
    </main>
  );
};

export default Hospitals;
