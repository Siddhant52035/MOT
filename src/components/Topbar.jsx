import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center bg-white py-2 px-6 h-20 shadow-lg">
      <Link to="/">
        <img
          src="../../public/assets/MOT.png"
          alt="Logo"
          className="object-contain w-36 h-auto"
        />
      </Link>

      <ul className="flex space-x-6 items-center">
        <li>
          <a
            href="/"
            className="text-black text-lg font-semibold hover:bg-gray-700 hover:text-white px-3 py-2 rounded transition"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="about"
            className="text-black text-lg font-semibold relative hover:bg-gray-700 hover:text-white px-3 py-2 rounded transition"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            About
            {/* Dropdown */}
            {isDropdownOpen && (
              <div className="absolute  mt-2 w-32 bg-white text-gray-800 rounded-md shadow-lg">
                <a href="/link1" className="block px-4 py-2 hover:bg-gray-100">
                  Our Teams
                </a>
                <a href="/link2" className="block px-4 py-2 hover:bg-gray-100">
                  Leads
                </a>
                <a href="/link3" className="block px-4 py-2 hover:bg-gray-100">
                  Organizations
                </a>
              </div>
            )}
          </a>
        </li>
        <li>
          <a
            href="infographics"
            className="text-black text-lg font-semibold hover:bg-gray-700 hover:text-white px-3 py-2 rounded transition"
          >
            Infographics
          </a>
        </li>
        <li>
          <a
            href="hospital"
            className="text-black text-lg font-semibold hover:bg-gray-700 hover:text-white px-3 py-2 rounded transition"
          >
            Hospitals
          </a>
        </li>
        <li>
          <a
            href="news"
            className="text-black text-lg font-semibold hover:bg-gray-700 hover:text-white px-3 py-2 rounded transition"
          >
            News & Resources
          </a>
        </li>
        <li>
          <a
            href="donate"
            className="text-black text-lg font-semibold hover:bg-gray-700 hover:text-white px-3 py-2 rounded transition"
          >
            Donate
          </a>
        </li>
        <li>
          <a
            href="joinus"
            className="text-black text-lg font-semibold hover:bg-gray-700 hover:text-white px-3 py-2 rounded transition"
          >
            Join Us
          </a>
        </li>
      </ul>
      <a className="bg-black text-lg font-semibold text-white px-6 py-2 rounded hover:bg-gray-800 transition">
        Request Help
      </a>
    </nav>
  );
};

export default Topbar;
