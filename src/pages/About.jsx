import React from "react";

const About = () => {
  return (
    <main>
      <section>
        <div className="flex w-[88%] mx-auto">
          <div className="w-1/2 text-4xl mb-24 mt-14 font-medium">
            Innovative minds to
            <br /> boost your business
          </div>
          <div className="w-1/2 text-lg mb-24 mt-14 font-normal text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare, eros dolor interdum nulla, ut commodo diam libero
            vitae erat.
          </div>
        </div>
        <div>
          <img
            src="/assets/image.png"
            alt="img"
            className="mx-auto h-auto"
            style={{ width: "90%" }}
          />
        </div>
      </section>
      <section>
        <div className="grid grid-cols-4 gap-4 text-center py-4 my-10">
          <div>
            <div className="text-4xl font-bold">100+</div>
            <h1 className="text-xl">Country Served</h1>
          </div>
          <div>
            <div className="text-4xl font-bold">10+</div>
            <h1 className="text-xl">Years Of Experience</h1>
          </div>
          <div>
            <div className="text-4xl font-bold">50+</div>
            <h1 className="text-xl">Awards Won</h1>
          </div>
          <div>
            <div className="text-4xl font-bold">99%</div>
            <h1 className="text-xl">Consumer Satisfaction Rate</h1>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
