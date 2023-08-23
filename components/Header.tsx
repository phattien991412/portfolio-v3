import React from "react";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Header = () => {
  return (
    <div className=" fixed top-4 left-1/2 -translate-x-1/2 w-3/5 mx-auto flex flex-col md:flex-row justify-between items-center z-50">
      <h2 className="glitch text-xl uppercase">Trinh Tien Phat</h2>

      <ul className="flex items-center gap-4">
        <li className="hover:text-accent transition-all duration-300 cursor-pointer">
          <a href="http://fb.com/phattien991412" target="_blank" rel="noopener noreferrer"><span><FaFacebookF /></span></a>
        </li>
        <li className="hover:text-accent transition-all duration-300 cursor-pointer">
          <a href="https://www.linkedin.com/in/phat-trinh-tien-60a269271/" target="_blank" rel="noopener noreferrer"><span><FaLinkedinIn /></span></a>
        </li>
        <li className="hover:text-accent transition-all duration-300 cursor-pointer">
          <a href="https://github.com/phattien991412" target="_blank" rel="noopener noreferrer"><span><FaGithub /></span></a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
