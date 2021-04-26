import React from "react";

const Card = ({ recipe }) => {
	return (
		<div className="m-3 space-y-3 bg-white overflow-hidden rounded-md shadow-md hover:shadow-lg">
			<img src={recipe.recipe.image} alt={recipe.recipe.label} className="w-full h-full" />
			<h1 className="px-3 text-2xl md:text-3xl xl:text-4xl text-green-600 font-semibold">
				{recipe.recipe.label}
			</h1>
			<p className="md:text-lg xl:text-xl text-gray-600 px-3 pb-3">
				<span className="font-semibold">Cuisine: </span>
				{recipe.recipe.cuisineType ? recipe.recipe.cuisineType : "Not Defined"}
			</p>
		</div>
	);
};

export default Card;
