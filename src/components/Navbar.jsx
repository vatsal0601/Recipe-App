import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
	return (
		<header className="bg-white shadow-md">
			<nav
				className="container mx-auto py-3 px-5 md:px-10 flex items-center justify-between"
				role="navigation">
				<Link to="/">
					<h1 className="text-xl md:text-2xl hover:text-green-600">
						<span className="font-bold">Recipe</span>App
					</h1>
				</Link>
				<ul className="hidden md:flex gap-7 font-semibold">
					<li className="text-gray-600 hover:text-green-600 transition-colors">
						<a href="https://github.com/vatsal0601/Recipe-App">GitHub</a>
					</li>
					<Link to="/about">
						<li className="text-gray-600 hover:text-green-600 transition-colors">About</li>
					</Link>
					<Link to="/search">
						<li className="text-gray-600 hover:text-green-600 transition-colors">Search</li>
					</Link>
				</ul>
				<svg
					onClick={toggle}
					className="w-6 h-6 hover:text-green-600 transition-colors md:hidden cursor-pointer"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6h16M4 12h16M4 18h7"
					/>
				</svg>
			</nav>
		</header>
	);
};

export default Navbar;
