import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LandingPage from "./LandingPage";
import RestaurantPage from "./components/RestaurantPage";
import Navbar from "./components/Navbar";
import AddRest from "./AddRest";
import Login from "./Login";

const App = () => {
	return (
		<>
			<div>
				<Navbar />
				<Router>
					<Routes>
						<Route path="/" exact element={<LandingPage />} />
						<Route path="/add-restaurant" element={<AddRest />} />
						<Route path="/login" element={<Login />} />
						<Route path="/restaurant/:id" element={<RestaurantPage />} />
						<Route path="/restaurant/mcd" element={<RestaurantPage restName='Mc Donalds' restDesc = "McDonalds is a very nice place" />} />
					</Routes>
				</Router>
			</div>
		</>
	)
}

export default App;