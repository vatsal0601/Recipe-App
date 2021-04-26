import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Card from "../components/Card";

const Home = ({ recipes }) => {
	return (
		<main>
			<Hero />
			<div className="-mt-20 sm:-mt-28 md:-mt-36 lg:-mt-44 xl:-mt-56 2xl:-mt-80 container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
				{recipes &&
					recipes.map((recipe, index) => {
						return (
							<Link to={`/recipe/${recipe.recipe.label}`} key={index}>
								<Card recipe={recipe} />
							</Link>
						);
					})}
			</div>
		</main>
	);
};

export default Home;
