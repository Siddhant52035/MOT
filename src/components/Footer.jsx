import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white h-[300px] pt-16 p-5">
      <div className="container mx-auto flex justify-between gap-4">
        <img
          src="../../public/assets/MOT.png"
          alt="Logo"
          className="object-contain w-36 h-auto"
        />
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <p className="mb-2 mt-8 text-gray-300 text-sm text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis noni
            lectus vehicula, maximus lorem malesuada, condimentum felis. Present
            posuere quam a rutrum dignissim. Pellentesque dolor sapien,
            lobortis.
          </p>
        </div>
        <div className="w-full flex justify-between  md:w-1/4 mb-6 md:mb-0">
          <div>
            <h3 className="font-bold mb-3">About Us</h3>
            <ul>
              <li className="mb-2 text-gray-300">
                <a href="/link1" className="hover:underline text-sm">
                  Leads
                </a>
              </li>
              <li className="mb-2 text-gray-300">
                <a href="/link2" className="hover:underline text-sm">
                  Organizations
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/link3"
                  className="hover:underline text-sm text-gray-300"
                >
                  Objective
                </a>
              </li>
              <li>
                <a
                  href="/link3"
                  className="hover:underline text-sm text-gray-300"
                >
                  News & Resources
                </a>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-[40%] ms-4 mb-6 md:mb- 0">
            <h3 className="font-bold mb-3">Links</h3>
            <ul>
              <li className="mb-2 text-gray-300">
                <a href="/link1" className="hover:underline text-sm">
                  Request Support
                </a>
              </li>
              <li className="mb-2 text-gray-300">
                <a href="/link2" className="hover:underline text-sm">
                  Member Request
                </a>
              </li>
              <li className="text-gray-300">
                <a href="/link3" className="hover:underline text-sm">
                  Donation
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <h3 className="font-bold mb-3">Social Media Links</h3>
          <ul className="flex gap-4">
            <li className="mb-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../../public/assets/image 42.png"
                  alt="Facebook"
                  className="w-8 h-8 hover:opacity-80"
                />
              </a>
            </li>
            <li className="mb-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../../public/assets/image 43.png"
                  alt="Twitter"
                  className="w-8 h-8 hover:opacity-80"
                />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../../public/assets/image 44.png"
                  alt="Instagram"
                  className="w-8 h-8 hover:opacity-80"
                />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="../../public/assets/image 45.png"
                  alt="Instagram"
                  className="w-8 h-8 hover:opacity-80"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
