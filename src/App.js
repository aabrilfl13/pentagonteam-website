import "./App.css";
import React from "react";
import { NavBar } from "./components/NavBar";
import { Landing } from "./components/Landing";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Landing />
		</div>
	);
}

export default App;
