import React from "react";
import "./header.css";
import SocialMedia from "../floating/SocialMedia"

export const Header = () => {
	return (
		<div>
			<header>
			<div className="container header__container">
				<h5>Hello I'm</h5>
				<h1>Antonio Abril</h1>
				<h5 className="text-light">Backend Dev</h5>
				<SocialMedia />
			</div>
			</header>
			<button className="btn">hola</button>
		</div>
	);
};
