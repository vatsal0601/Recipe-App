import React from "react";
import { useParams, useHistory } from "react-router-dom";

const Recipe = ({ recipes }) => {
	//!cuisineType, !dishType(breakfast/main-course), !image, !ingredientLines, !label(title), => mealType(time), => shareAs(link), !totalTime, !totalWeight, !totalDaily(per serve), !yield(serve)

	const { title } = useParams();
	const history = useHistory();

	let recipe = null;
	recipes.forEach((element) => {
		if (element.recipe.label === title) {
			recipe = element.recipe;
		}
	});

	return (
		<div className="container mx-auto mt-10 py-3 px-5 md:px-10 flex flex-col items-center justify-center gap-5">
			<h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-green-600 my-3">{title}</h1>
			<div className="flex flex-col xl:flex-row items-center xl:items-start justify-center xl:justify-around w-full gap-5">
				<div className="space-y-5">
					<img src={recipe.image} alt={title} className="w-full h-full rounded-md" />
					<div className="flex items-center justify-center divide-x divide-gray-400">
						<div className="text-center px-2">
							<h2 className="text-xl md:text-2xl xl:text-3xl font-semibold text-green-600">
								Cuisine
							</h2>
							<p className="text-gray-600 text-sm md:text-base xl:text-lg">
								{recipe.cuisineType ? recipe.cuisineType : "Not defined"}
							</p>
						</div>
						<div className="text-center px-2">
							<h2 className="text-xl md:text-2xl xl:text-3xl font-semibold text-green-600">Dish</h2>
							<p className="text-gray-600 text-sm md:text-base xl:text-lg">
								{recipe.mealType ? recipe.mealType : "Not Defined"}
							</p>
						</div>
						<div className="text-center px-2">
							<h2 className="text-xl md:text-2xl xl:text-3xl font-semibold text-green-600">Time</h2>
							<p className="text-gray-600 text-sm md:text-base xl:text-lg">
								{recipe.totalTime}mins
							</p>
						</div>
						<div className="text-center px-2">
							<h2 className="text-xl md:text-2xl xl:text-3xl font-semibold text-green-600">
								Servings
							</h2>
							<p className="text-gray-600 text-sm md:text-base xl:text-lg">{recipe.yield}</p>
						</div>
					</div>
				</div>
				<div className="w-full xl:w-max">
					<h1 className="font-semibold text-xl md:text-2xl xl:text-3xl text-green-600 my-3">
						Ingredients
					</h1>
					<ul className="list-inside list-disc md:text-lg xl:text-xl space-y-1">
						{recipe.ingredientLines.map((element, index) => {
							return <li key={index}>{element}</li>;
						})}
					</ul>
				</div>
			</div>
			<div className="w-full">
				<h1 className="font-semibold text-xl md:text-2xl xl:text-3xl text-green-600 my-3">
					Nutrition
				</h1>
				<table className="w-full md:text-lg xl:text-xl">
					<tbody>
						{Object.keys(recipe.totalNutrients).map((element, index) => {
							return (
								<tr className="border-b border-gray-300" key={index}>
									<td className="py-2">
										<span className="font-semibold">{recipe.totalNutrients[element].label}</span>(
										{recipe.totalNutrients[element].unit})
									</td>
									<td className="py-2">{recipe.totalNutrients[element].quantity.toFixed(2)}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			<button
				onClick={() => history.goBack()}
				className="font-semibold text-white md:text-lg xl:text-xl border-2 border-green-600 px-6 py-2 mt-3 rounded-md bg-green-600 hover:bg-transparent hover:text-gray-600 transition-colors inline-flex items-center justify-center gap-2 focus:outline-none">
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
						d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
					/>
				</svg>
				Go back
			</button>
		</div>
	);
};

export default Recipe;
