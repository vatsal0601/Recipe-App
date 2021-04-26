import React from "react";
import Image from "../images/cooking.svg";

const About = () => {
	return (
		<div className="container mx-auto mt-10 text-center flex flex-col items-center justify-center gap-3 py-3 px-5 md:px-10">
			<h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-green-600">About</h1>
			<p className="text-lg md:text-xl xl:text-2xl max-w-prose text-gray-600">
				The app is made using React and it uses Edamam API for fetching the recipes from their
				server.
			</p>
			<img
				src={Image}
				alt="cooking"
				className="mt-10 w-9/12 sm:w-7/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12"
			/>
		</div>
	);
};

export default About;
