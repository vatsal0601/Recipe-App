import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import About from "./pages/About.jsx";
import Search from "./pages/Search.jsx";
import Recipe from "./pages/Recipe";
import Home from "./pages/Home.jsx";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const [search, setSearch] = useState("");
	const [query, setQuery] = useState("chocolate");
	const [recipes, setRecipes] = useState();

	useEffect(() => {
		const hideSidebar = () => {
			if (window.innerWidth >= 768 && isOpen) {
				setIsOpen(false);
			}
		};
		window.addEventListener("resize", hideSidebar);

		return () => {
			window.removeEventListener("resize", hideSidebar);
		};
	});

	useEffect(() => {
		const getRecipe = async () => {
			const APP_ID = "243087a8";
			const APP_KEY = "8dd678972216a15320639aa248c0b1bc";
			const response = await fetch(`/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
			const data = await response.json();
			setRecipes(data.hits);
		};
		getRecipe();
	}, [query]);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	const updateSearch = (e) => {
		setSearch(e.target.value);
	};

	const getSearch = (e) => {
		e.preventDefault();
		setQuery(search);
	};

	return (
		<div className="min-h-screen relative pb-16 bg-gray-50">
			<Router>
				<Navbar toggle={toggle} />
				<Sidebar isOpen={isOpen} toggle={toggle} />
				<Switch>
					<Route path="/about">
						<About />
					</Route>
					<Route path="/search">
						<Search
							recipes={recipes}
							search={search}
							getSearch={getSearch}
							updateSearch={updateSearch}
						/>
					</Route>
					<Route path="/recipe/:title">
						<Recipe recipes={recipes} />
					</Route>
					<Route path="/">{recipes && <Home recipes={recipes} />}</Route>
					<Redirect to="/" />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
