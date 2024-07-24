import { useState } from 'react'
import { HiMiniBars3 } from 'react-icons/hi2';

import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-[#1F1F1F]">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <NavLink
                            className="text-sm md:text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            to="/"
                        >
                            E-News
                        </NavLink>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <HiMiniBars3 />
                        </button>
                    </div>
                    <div className={`lg:flex flex-grow items-center ${navbarOpen ? " flex" : " hidden"}`}>
                        <ul className="flex flex-col gap-4 lg:flex-row list-none lg:ml-auto">
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "text-black bg-white rounded-md px-3 py-2 flex items-center text-xs md:text-base capitalize leading-snug hover:opacity-75"
                                            : "px-3 py-2 flex items-center text-xs md:text-base capitalize leading-snug text-white hover:opacity-75"}
                                    to="/"
                                >
                                    <span>Home</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "text-black bg-white rounded-md px-3 py-2 flex items-center text-xs md:text-base capitalize leading-snug hover:opacity-75"
                                            : "px-3 py-2 flex items-center text-xs md:text-base capitalize leading-snug text-white hover:opacity-75"}
                                    to="/history"
                                >
                                    <span>History</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar