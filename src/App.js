import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import "./App.css";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Nav } from "./components/nav/Nav";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Services } from "./components/services/Services";
import { Sponsors } from "./components/sponsors/Sponsors";
import { Team } from "./components/team/Team";
import { Testimonials } from "./components/testimonials/Testimonials";

function App() {
	return (
		<div className="App">
			{/* <Nav /> */}

			<Header />
			{/* <About /> */}
			<Services />
			<Team />
			{/* <Portfolio /> */}
			{/* <Testimonials /> */}
			<Contact />
			<Sponsors />
			<Footer />
		</div>
	);
}

export default App;
