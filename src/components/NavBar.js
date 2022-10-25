import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { useState, useEffect } from "react";
import logo from "../assets/img/PENTAGON-IMAGOTIPO-01.png";

export const NavBar = () => {
	const [activeLink, setActiveLink] = useState("home");
	const [scrolled, seScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 50) {
				seScrolled(true);
			} else {
				seScrolled(false);
			}
		};

		window.addEventListener("scroll", onScroll);
	}, []);

	const onUpdateActiveLink = (value) => {
		setActiveLink(value);
	};

	return (
		<Navbar bg="dark" expand="lg" className={scrolled ? "scrolled" : ""}>
			<Container>
				<Navbar.Brand href="#home">
					<img src={logo} alt="Logo" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link
							href="#home"
							className={
								activeLink === "home" ? "active navbar-link" : "navbar-link"
							}
							onClick={() => onUpdateActiveLink("home")}
						>
							Home
						</Nav.Link>
						<Nav.Link
							href="#team"
							className={
								activeLink === "team" ? "active navbar-link" : "navbar-link"
							}
							onClick={() => onUpdateActiveLink("team")}
						>
							Team
						</Nav.Link>
						<Nav.Link
							href="#contact"
							className={
								activeLink === "contact" ? "active navbar-link" : "navbar-link"
							}
							onClick={() => onUpdateActiveLink("contact")}
						>
							Contact
						</Nav.Link>
					</Nav>
					<span className="navbar-text">
						<div className="social-icon">
							<a href="#">
								<img src={""} alt="" />
							</a>
							<a href="#">
								<img src={""} alt="" />
							</a>
							<a href="#">
								<img src={""} alt="" />
							</a>
						</div>
					</span>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
