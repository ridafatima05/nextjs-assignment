import Link from "next/link";
import React from "react";
import { SiBuymeacoffee } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] bg-orange-950 flex justify-center items-center bottom-2">
      {/* Left side */}
      <div className="w-[90%] h-full text-orange-300 flex justify-between items-center">
      <div className="flex items-center">
        <SiBuymeacoffee className="text-4xl mr-2" /> {/* Coffee icon */}
          <h1 className="text-3xl m-2 ml-1 cursor-pointer font-serif font-semibold">Coffee Bar
          </h1>
        </div>
        <ul className="flex gap-x-5 mr-4">
          {/*Right side */}
          <li>
            <Link className="hover:text-orange-50" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-50" href="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-50" href="/menu">
              Menu
            </Link>
          </li>
          <li>
            <Link className="hover:text-orange-50" href="/contact">
              Contact
            </Link>
          </li>
        
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
