import React from "react";

const JoinUs = () => {
  return (
    <main>
      <section>
        <div className="h-screen w-full bg-cover bg-[#87A7C6] flex bg-center">
          <div className="flex">
            <div className="w-1/2 ms-10 ">
              <div className=" flex justify-start ms-20 mt-20 items-center">
                <img
                  src="/assets/image 25.png"
                  className="w-[381px] h-auto rounded-lg "
                />
              </div>
            </div>
            <div className="w-1/2 mt-20">
              <h1 className="font-bold text-3xl text-white pb-4">
                Join Us Today
              </h1>
              <p className="pb-4">
                Clarity gives you the blocks and components you need to create a
                truly professional website.
              </p>
              <form>
                <label className="text-gray-200">Full Name</label>
                <br />
                <input
                  placeholder="i.e. Siddhant Thakur"
                  type="text"
                  class="w-2/3  px-3 py-2.5 mb-8 bg-transparent border-2 border-gray-600 rounded-3xl focus:outline-none placeholder-gray-600 focus:border-[#B29063]"
                />
                <br />
                <label className="text-gray-200">Email</label>
                <br />
                <input
                  type="email"
                  placeholder="abc@gmail.com"
                  class="w-2/3 px-3 py-2.5 mb-8 bg-transparent border-2 border-gray-600 rounded-3xl  focus:outline-none placeholder-gray-600 focus:border-[#B29063]"
                />
                <br />
                <label className="text-gray-200">Password</label>
                <br />
                <input
                  type="password"
                  placeholder=".........."
                  class="w-2/3 px-3 py-2.5 mb-8 bg-transparent border-2 border-gray-600 rounded-3xl  focus:outline-none placeholder-gray-600  focus:border-[#B29063]"
                />
              </form>

              <button className="bg-[#3d5872] text-lg font-medium rounded-3xl text-white px-8 py-2 mt-8  hover:bg-[#B29063] transition">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JoinUs;
