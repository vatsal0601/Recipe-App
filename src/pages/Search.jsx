import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const Search = ({ recipes, search, getSearch, updateSearch }) => {
	return (
		<div className="container mx-auto mt-10 py-3 px-5 md:px-10 flex flex-col items-center justify-center gap-10">
			<h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-green-600">Search</h1>
			<form onSubmit={getSearch} className="w-full text-center">
				<input
					type="text"
					name="search"
					placeholder="Search for anything and hit enter"
					value={search}
					onChange={updateSearch}
					className="p-3 w-full md:w-3/5 focus:ring-2 ring-green-600 font-semibold text-green-600 placeholder-gray-600 focus:placeholder-gray-400 focus:outline-none rounded-md shadow-md hover:shadow-lg focus:shadow-sm"
				/>
			</form>
			<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
				{recipes &&
					recipes.map((recipe, index) => {
						return (
							<Link to={`/recipe/${recipe.recipe.label}`} key={index}>
								<Card recipe={recipe} />
							</Link>
						);
					})}
			</div>
		</div>
	);
};

export default Search;
