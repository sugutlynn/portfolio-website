import Link from "next/link";
import React from "react";
import NavLink from "../components/NavLink"

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projecs",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={"/"} className="text-5xl text-white font-semibold">
          LOGO
        </Link>
      </div>
      <div className="menu block md:w-auto" id="navbar">
        <ul>
            {
                navLinks.map((link, index) => (
                    <li key={index}>
                        <NavLink href={link.path} title={link.title}/>
                    </li>
                ))
            }
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
