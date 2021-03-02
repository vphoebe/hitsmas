import * as React from "react";
import { FaGithub } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="flex flex-wrap bg-blue-300 justify-between p-2 rounded-b-lg">
      <div className="font-bold text-gray-700">Hitsmas generator</div>
      <a
        href="https://github.com/vphoebe/hitsmas"
        target="blank"
        rel="noopener"
        className="flex items-center"
      >
        <FaGithub className="mr-3" />
        <div className="font-mono text-gray-700">vphoebe</div>
      </a>
    </nav>
  );
};

export default Nav;
