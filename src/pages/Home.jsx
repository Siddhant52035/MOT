import React, { useState, useEffect } from "react";
import axios from "axios";
import { equipments } from "../constants";
import { motion } from "framer-motion";

const Home = () => {
  const images = ["a.png", "b.png", "c.png", "d.png"];

  return (
    <main>
      <div
        className="h-[80vh] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('../../public/assets/Home.png')" }}
      >
        <div className="w-1/2 h-full flex flex-col justify-center items-start pt-32 pl-24">
          <h1 className="text-black text-xl md:text-xl font-semibold mb-4 animate-slide-fade  ">
            JOIN US TO SAVE LIVES
          </h1>
          <span className="block text-xl md:text-4xl font-normal md:font-semibold text-white text-left animate-slide-fade">
            MISSION <span className="text-blue-500 font-medium">OXYGEN </span>
            <span className="text-white font-medium">Team</span>
          </span>
          <button className="text-white border-2 border-white p-2 w-[150px] mt-4 text-center font-semibold hover:font-bold animate-slide-fade">
            DONATE US
          </button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 150 }} // Start 150px below
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }} // Triggers when 30% of it is visible
        className="w-full max-w-[70%] mx-auto px-4 md:px-10 shadow-lg rounded-br-3xl rounded-tl-3xl bg-gray-200 h-auto md:h-[250px] flex justify-center items-center my-8"
      >
        <span className="text-gray-900 text-center text-sm md:text-base lg:text-xl font-semibold leading-relaxed tracking-wide px-4">
          " I'm a filmmaker from Nepal with over eight years of experience in
          the industry. Starting as an assistant director on Hostel Returns in
          2014, I've since produced and directed films like Kaussidd and Bihe
          Pass. I founded Flicker Arts to support independent filmmakers and
          currently serve as content head at FOPI, Nepal's video-on-demand
          platform..."
        </span>
      </motion.div>
      {/* section for images */}
      <section className="w-full flex">
        <div className="w-1/2 h-auto relative">
          <img
            src="../../public/assets/e.png"
            alt="Mission"
            className="w-full h-auto left-0 "
          />
          <div className="absolute top-0 left-0 w-full h-full flex justify-center pt-80 flex-col items-start  text-white">
            <img
              src="public/assets/MOT final logo.png"
              alt="MOT"
              className="w-52 h-auto ms-14 animate-slide-fade"
            />
            <h1 className="text-xl  w-[75%] ps-20 animate-zoom-in">
              MOT is the team to reach out for any technical help,
              Documentation, Tracking, Service and Maintenence related to
              Biomedical equipments.
            </h1>
          </div>
        </div>
        <div className="columns-2 w-1/2 h-auto gap-2">
          {images.map((image, index) => (
            <div key={index} className="break-inside-avoid mb-2">
              <img
                src={`public/assets/${image}`}
                alt={`Image ${index + 1}`}
                className="w-full h-auto animate-rotate-in"
              />
            </div>
          ))}
        </div>
      </section>
      <section>
        <div>
          <h1 className="font-medium text-4xl mt-20 mx-20 px-20 text-blue-500 ">
            Equipment Aggregate Data
          </h1>
          <p className="text-lg font-normal  px-20 p-5 ms-20  ">
            MOT is the team to reach out for any technical help Documentation,
            Tracking, Service And Maintenence related to Biomedical
            Equipments.Wubba Lubba Dub Dub. yayy here we go again.
          </p>
        </div>

        {/* Equipment List */}
        <div className="w-[80%]  mx-auto mt-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
            {equipments.map(({ id, name, quantity, img, color }) => (
              <li
                key={id}
                className="w-[300px] md:w-[250px] h-[250px] md:h-[225px] flex justify-center items-center animate-slide-fade flex-col shadow-lg group shadow-gray-700 rounded-lg bg-opacity-90 text-black mx-auto"
                style={{ backgroundColor: color }}
              >
                <img
                  src={`public/assets/${img}`}
                  alt={`${name} image`}
                  className="w-14"
                />
                <span className="text-lg font-medium w-[80%] mx-auto mb-5 sm:mb-8 md:mb-10 text-center group-hover:text-xl md:group-hover:text-xl">
                  {name}
                </span>
                <span className=" text-xl font-semibold group-hover:text-base sm:group-hover:text-lg md:group-hover:text-2xl text-black w-[90%] mx-auto text-center">
                  {quantity}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        <h1 className="font-medium text-4xl text-center mt-20 mb-10 text-black ">
          Our Achievements
        </h1>
        <div className="w-full bg-gray-800 flex">
          <img src="public/assets/abc.png" className="w-2/3" />
          <div className="w-1/3 relative">
            <h3 className="text-white text-center font-semibold text-3xl">
              The Title
            </h3>
            <p className="text-white font-normal text-lg px-8 pt-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus vero maiores odit consequatur, cupiditate sit eligendi.
              Amet soluta, officiis, odio est itaque explicabo quibusdam
              reprehenderit ab et velit saepe mollitia.
            </p>
            {/* Container for Buttons */}
            <div className="w-full flex justify-between items-baseline mt-8 px-8">
              <button className="text-white border-2 rounded-full p-2 border-gray-400 bg-gray-700 hover:shadow-lg">
                <img src="public/assets/left-arrow.png" alt="Left Arrow" />
              </button>
              <button className="text-white border-2 rounded-full p-2 border-gray-400 bg-gray-700 hover:shadow-lg">
                <img src="public/assets/right-arrow.png" alt="Right Arrow" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="font-medium text-4xl text-center mt-20 mb-10 text-black ">
          Our Partners
        </h1>

        <div></div>
        <div className="flex ">
          <div className="w-1/2 flex justify-center items-center flex-col">
            <h1 className="font-medium text-4xl text-center mt-20 mb-10 text-black ">
              Lead Organizations
            </h1>
            <img
              src="public/assets/org (4).png"
              alt="MOT"
              className="w-[20%]  h-auto ms-14 "
            />
            <img
              src="public/assets/org (3).png"
              alt="MOT"
              className="w-[20%]  h-auto ms-14 "
            />
          </div>
          <div className="w-1/2 flex justify-center items-center flex-col2">
            <h1 className="font-medium text-4xl text-center mt-20 mb-10 text-black ">
              Partner Organizations
            </h1>
            <img
              src="public/assets/org (2).png"
              alt="MOT"
              className="w-[20%]  h-auto ms-14 "
            />
          </div>
        </div>
        <div className="flex justify-between items-center flex-col">
          <h1 className="font-medium text-4xl text-center mt-20 mb-10 text-black ">
            Supporting Organizations
          </h1>
          <img
            src="public/assets/org (1).png"
            alt="MOT"
            className="w-2/3  h-auto ms-14 "
          />
        </div>
      </section>
      <section className="w-[75%] my-10 mx-auto flex justify-center items-center">
        <p className="text-center">
          Join initiative of{" "}
          <a
            href="https://www.ran.org.np/"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Robotics Association of Nepal [RAN]
          </a>{" "}
          &{" "}
          <a href="#" className="text-blue-500 underline hover:text-blue-700">
            Biotechnology Society of Nepal [BSN]
          </a>{" "}
          in partnership with{" "}
          <a href="#" className="text-blue-500 underline hover:text-blue-700">
            Nepal Health Research Council [NHRC]
          </a>{" "}
          supported by{" "}
          <a href="#" className="text-blue-500 underline hover:text-blue-700">
            The Asia Foundation [TAF]
          </a>
          .
        </p>
      </section>
      <section>
        <h1 className="font-thin text-xl text-left mx-40 mt-20  text-[#b29063] ">
          OUR MISSION
        </h1>
        <h1 className="font-medium text-4xl text-left mx-40 mt-2 mb-10 text-black ">
          HELPING LIVES STAND OUT
        </h1>
        <div className="flex mx-40 gap-14">
          <div className="w-[2px] h-[250px] bg-[#b29063]  mx-auto"></div>
          <p className="text-left ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non
            lacus vehicula, maximus lorem malesuada, condimentum felis. Praesent
            posuere quam a rutrum dignissim. <br />
            <br />
            Pellentesque dolor sapien, lobortis vel pulvinar rhoncus, auctor
            consectetur dolor. Aliquam eget velit vel massa ornare tincidunt.
            Nunc sagittis in urna quis sagittis. Morbi dignissim eleifend orci a
            iaculis. Proin nunc justo, dictum vitae ante ut, accumsan tristique
            tellus. In lectus velit, dictum ut pretium non, placerat nec ante.
            Duis congue mauris ac nibh congue tristique. Aenean eget felis
            faucibus neque placerat volutpat. Ut nec risus consectetur,
            elementum enim a, malesuada sapien. Praesent scelerisque ligula ac
            orci ultrices semper. Nunc fringilla nulla ut tellus pharetra
            facilisis nec rhoncus ipsum. Nam lacus augue, suscipit eget dui eu.
          </p>
        </div>
      </section>
      <section>
        <div className="w-full h-[100vh ] bg-gray-800 flex">
          <img src="public/assets/Picture1.png" className="w-[45%]" />
          <div className="w-[60%] ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.646010314239!2d85.32097531506198!3d27.70315938279603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19a64b5f13e1%3A0x28b2d0eacda46b98!2sKathmandu%20Durbar%20Square!5e0!3m2!1sen!2snp!4v1632912345678!5m2!1sen!2snp"
              allowfullscreen=""
              loading="lazy"
              className="w-full h-1/2"
            ></iframe>
            {/* <div
              className="w-full h-[1/2] "
              style={{ backgroundImage: "url('../../public/assets/prx.png')" }}
            >
              <h1 className=" h-[60px]"> </h1>
              <h1 className=" h-[60px]"> </h1>
              <h1 className=" h-[60px]"> </h1>
              <h1 className=" h-[60px]"> </h1>
              <h1 className=" h-[60px]"> </h1>
              <h1 className=" h-[60px]"> </h1>
              <h1 className=" h-[40px]"> </h1>
            </div> */}
            <div className="w-full h-1/2 bg-[#EBE9E3]">
              <h1>Our Address</h1>
              <h1>Lorem Ipsum</h1>
              <p>asdvbgfdfg ginvarkngsa eungaeignarg</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="h-screen w-full bg-cover flex bg-center"
          style={{ backgroundImage: "url('../../public/assets/form.png')" }}
        >
          <div className="w-[60%] bg-transparent  p-8 mb-8 md:mb-0">
            <div className=" my-6 ms-2">
              <h2 className="text-lg font-normal text-[#B29063] mb-2 ">
                SUBMIT INQUIRY
              </h2>
              <p className="text-3xl font-normal text-white mb-2 ">
                Get In Touch
              </p>
            </div>
            <form>
              <div className="flex">
                <div className="w-1/2 ">
                  <input
                    placeholder="Inquiry Type"
                    type="text"
                    class="w-full  px-3 py-2 mb-8 bg-transparent border-b-2 border-gray-300 focus:outline-none placeholder-gray-300 focus:border-[#B29063]"
                  />

                  <input
                    type="text"
                    placeholder="FirstName"
                    class="w-full px-3 py-2 mb-8 bg-transparent border-b-2 border-gray-300  focus:outline-none placeholder-gray-300 focus:border-[#B29063]"
                  />
                  <input
                    type="text"
                    placeholder="LastName"
                    class="w-full px-3 py-2 mb-8 bg-transparent border-b-2 border-gray-300  focus:outline-none placeholder-gray-300 focus:border-[#B29063]"
                  />
                  <select class="w-full px-3 py-2 mb-4 text-gray-300 bg-transparent border-b-2 border-gray-300  focus:outline-none focus:border-[#B29063]">
                    <option className="text-black">Select Country</option>
                    <option className="text-black">United States</option>
                    <option className="text-black">Canada</option>
                    <option className="text-black">UK</option>
                  </select>
                </div>
                <div className="w-1/2 ms-10 ">
                  <input
                    type="Email"
                    placeholder="E-mail"
                    class="w-full px-3 py-2 mb-8 bg-transparent border-b-2 border-gray-300 placeholder-gray-300  focus:outline-none focus:border-[#B29063]"
                  />
                  <input
                    type="text"
                    placeholder="How did you hear about us?"
                    class="w-full px-3 py-2 mb-8 bg-transparent border-b-2 border-gray-300 placeholder-gray-300  focus:outline-none focus:border-[#B29063]"
                  />
                  <input
                    type="text"
                    placeholder='If "Other", please describe'
                    class="w-full px-3 py-2 mb-8 bg-transparent border-b-2 border-gray-300 placeholder-gray-300 focus:outline-none focus:border-[#B29063]"
                  />
                  <input
                    type="text"
                    placeholder="Message"
                    class="w-full px-3 py-2 mb-8 bg-transparent border-b-2 border-gray-300 placeholder-gray-300  focus:outline-none focus:border-[#B29063] transition"
                  />
                </div>
              </div>
              <input
                type="checkbox"
                id="myCheckbox"
                className="w-5 h-5 pt-2  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-[#B29063]"
              />
              <label className="text-gray-300 ps-5">
                I am interested in receiving latest insights & news
              </label>
              <br />
              <button className="bg-[#B29063] text-lg font-medium text-white px-4 py-1 mt-8  hover:bg-[#B29063] transition">
                Submit
              </button>
            </form>
          </div>
          <div className="w-[40% flex justify-start ms-10 mt-20 items-center">
            <img src="/assets/h4.png" className="w-[381px] h-auto" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
