import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<>
			<div className="w-full bg-green-800 px-5 py-10 text-center flex flex-col items-center justify-center gap-5">
				<h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white">
					Cook. Eat. Repeat.
				</h1>
				<p className="text-lg md:text-xl xl:text-2xl max-w-prose text-gray-300">
					Delicious recipes at your finger tips. A complete step-by-step guide to cook soul soothing
					delicious and healthy food.
				</p>
				<Link to="/search">
					<button className="font-semibold text-white md:text-lg xl:text-xl border-2 border-green-600 px-6 py-2 mt-3 rounded-md hover:bg-green-600 transition-colors inline-flex items-center justify-center gap-2 focus:outline-none">
						<svg
							className="w-5 md:w-6 h-5 md:h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
						Search
					</button>
				</Link>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path fill="#065F46" fillOpacity="1" d="M0,224L1440,32L1440,0L0,0Z"></path>
			</svg>
		</>
	);
};

export default Hero;
